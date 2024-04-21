const db = require("../models");
const MoneyValue = db.MoneyValue;
const Treasure = db.Treasure;

const VALID_AMOUNT = [10, 15, 20, 25, 30];

const addMoneyValue = async (req, res) => {
  const { treasure_id, amt } = req.body;
  if (!treasure_id || !amt) {
    return res.status(400).send({ err: "Invalid payload." });
  }

  if (!VALID_AMOUNT.includes(Number(amt))) {
    return res.status(200).send({ err: "Invalid amount. Acceptable values are [10, 15, 20, 25, 30]." });
  }

  const isExist = await MoneyValue.findOne({
    where: {
      treasure_id,
      amt,
    },
  });

  if (isExist) {
    return res.status(200).send({ err: "Data already exist." });
  }

  const t_id = await Treasure.findByPk(treasure_id);

  if (!t_id) {
    return res.status(200).send({ err: "Invalid treasure_id." });
  }

  const data = await MoneyValue.create({ treasure_id, amt });
  return res.status(200).send(data);
};

const updateMoneyValue = async (req, res) => {
  const { id } = req.params;
  const { amt } = req.body;
  if (!id || !amt) {
    return res.status(400).send({ err: "Invalid request." });
  }
  
  if (!VALID_AMOUNT.includes(Number(amt))) {
    return res.status(200).send({ err: "Invalid amount. Acceptable values are [10, 15, 20, 25, 30]." });
  }

  const moneyvalue = await MoneyValue.findByPk(id);
  if (!moneyvalue) {
    return res.status(400).send({ err: "Invalid request." });
  }

  await moneyvalue.update({
    amt: Number(amt),
    updatedAt: new Date(),
  });
  return res.status(200).send(moneyvalue);
};

const deleteMoneyValue = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ err: "Invalid request." });
    }
  
    const flag = await MoneyValue.destroy({ where: { id }});
    if (flag) {
        return res.status(200).send({ msg: 'MoneyValue was deleted.'});
    }
    return res.status(404).send({ err: 'Resource does not exist.'});
  };

const getAllMoneyValues = async (req, res) => {
  const moneyvalue = await MoneyValue.findAll();
  return res.status(200).send(moneyvalue);
};

const getMoneyValueById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({ err: "Invalid request." });
  }
  const moneyvalue = await MoneyValue.findByPk(id);
  return res.status(200).send(moneyvalue);
};

const getMoneyValueByTreasureId = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({ err: "Invalid request." });
  }
  const moneyvalue = await MoneyValue.findAll({ where: { treasure_id: id }});
  return res.status(200).send(moneyvalue);
};

module.exports = {
  addMoneyValue,
  updateMoneyValue,
  deleteMoneyValue,
  getAllMoneyValues,
  getMoneyValueById,
  getMoneyValueByTreasureId,
};
