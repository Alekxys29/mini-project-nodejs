const { Op } = require('sequelize');
const db = require("../models");
const { haversineDistanceBetweenPoints } = require("../utils/utils");
const Treasure = db.Treasure;
const MoneyValue = db.MoneyValue;

const VALID_DISTANCE = [1, 10];

const addTreasure = async (req, res) => {
  const { latitude, longitude } = req.body;
  if (!latitude || !longitude) {
    return res.status(400).send({ err: "Invalid payload." });
  }

  const isExist = await Treasure.findOne({
    where: {
      latitude: latitude,
      longitude: longitude,
    },
  });

  if (isExist) {
    return res.status(200).send({ err: "Data already exist." });
  }

  const { name: latestTreasure } =
    (await Treasure.findOne({ order: [["id", "DESC"]] })) || {};
  let currCount = 1;

  if (latestTreasure) {
    currCount = parseInt(latestTreasure.split("T")[1]);
    currCount++;
  }

  const name = `T${currCount}`;
  const params = {
    name,
    latitude: latitude,
    longitude: longitude,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const treasure = await Treasure.create(params);
  return res.status(200).send(treasure);
};

const updateTreasure = async (req, res) => {
  const { id } = req.params;
  const { latitude, longitude } = req.body;
  if (!id || !latitude || !longitude) {
    return res.status(400).send({ err: "Invalid request." });
  }

  const treasure = await Treasure.findByPk(id);

  if (!treasure) {
    return res.status(400).send({ err: "Invalid request." });
  }
  
  await treasure.update({
    latitude,
    longitude,
    updatedAt: new Date(),
  });

  return res.status(200).send(treasure);
};

const deleteTreasure = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ err: "Invalid request." });
    }
  
    const flag = await Treasure.destroy({ where: { id }});
    if (flag) {
        return res.status(200).send({ msg: 'Treasure was deleted.'});
    }
    return res.status(404).send({ err: 'Resource does not exist.'});
  };

const getAllTreasures = async (req, res) => {
  const treasures = await Treasure.findAll();
  return res.status(200).send(treasures);
};

const getOneTreasure = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ err: "Invalid request." });
  }
  const treasure = await Treasure.findByPk(id);
  return res.status(200).send(treasure);
};

const findTreasure = async (req, res) => {
  const { latitude, longitude, distance, prize_value } = req.body;

  if (!latitude || !longitude || !distance) {
    return res.status(400).send({ err: "Invalid payload." });
  }

  if (!VALID_DISTANCE.includes(parseInt(distance))) {
    return res.status(400).send({
      err: "Invalid distance parameter. Acceptable values are [1, 10]",
    });
  }

  if (
    prize_value &&
    (!Number.isInteger(Number(prize_value)) ||
      Number(prize_value) < 10 ||
      Number(prize_value) > 30)
  ) {
    return res.status(400).send({
      err: "Invalid prize_value parameter. Only accepts a range of whole numbers from 10 to 30",
    });
  }

  const query = {
    include: [
      {
        model: MoneyValue,
        as: "moneyvalue",
        required: true
      },
    ],
  };
  if (prize_value) {
    query.include[0].where = { amt: { [Op.gte]: prize_value }};
  }

  let treasures = await Treasure.findAll(query);
  
  const mappedTreasure = treasures.map((treasure) => {
    treasure = JSON.parse(JSON.stringify(treasure));
    const computedDistance = haversineDistanceBetweenPoints(
      latitude,
      longitude,
      treasure.latitude,
      treasure.longitude
    );
    treasure.distance = computedDistance;
    return treasure;
  });

  const treasureCanidates = mappedTreasure
    .filter((item) => item.distance <= distance)
    .map((item) => {
      const prizes = item.moneyvalue.map((money) => money.amt).sort();
      let obj = {
        id: item.id,
        name: item.name,
        prizes: prize_value ? [prizes[0]] : prizes,
      };
      return obj;
    });

  return res.status(200).send({ treasures: treasureCanidates });
};

module.exports = {
  addTreasure,
  updateTreasure,
  deleteTreasure,
  getAllTreasures,
  getOneTreasure,
  findTreasure,
};
