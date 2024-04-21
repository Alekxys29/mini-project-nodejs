const moneyvalueController = require('../controllers/moneyvalue');
const auth = require('../middleware/authMiddleware');
const router = require('express').Router();

router.get('/', moneyvalueController.getAllMoneyValues);
router.post('/', moneyvalueController.addMoneyValue);

router.get('/treasure/:id', moneyvalueController.getMoneyValueByTreasureId);
router.get('/:id', moneyvalueController.getMoneyValueById);
router.put('/:id', moneyvalueController.updateMoneyValue);
router.delete('/:id', moneyvalueController.deleteMoneyValue);
module.exports = router;