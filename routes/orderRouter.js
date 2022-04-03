const router = require('express').Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.get('/order', auth, authAdmin, orderController.getOrders);

router.post('/checkout', auth, orderController.checkOut);

router.put('/confirm_order/:id', auth, authAdmin, orderController.confirm_Order);

router.put('/delivered_order/:id', auth, authAdmin, orderController.delivered_Order);

router.post('/myorder', orderController.getOrdersByUser);

module.exports = router;
