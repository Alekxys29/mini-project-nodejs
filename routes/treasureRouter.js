const treasureController = require('../controllers/treasure');
const auth = require('../middleware/authMiddleware');
const router = require('express').Router();

router.get('/', treasureController.getAllTreasures);
router.post('/', treasureController.addTreasure);
router.get('/findTreasure', treasureController.findTreasure);

router.get('/:id', treasureController.getOneTreasure);
router.put('/:id', treasureController.updateTreasure);
router.delete('/:id', treasureController.deleteTreasure);
module.exports = router;