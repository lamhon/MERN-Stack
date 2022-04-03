const router = require('express').Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.get('/order', auth, authAdmin, orderController.getOrders);

router.post('/checkout', auth, orderController.checkOut);

router.post('/confirm_order', auth, authAdmin, orderController.confirm_Order);

router.post('/delivered_order', auth, authAdmin, orderController.delivered_Order);

router.post('/myorder', orderController.getOrdersByUser);

module.exports = router;
