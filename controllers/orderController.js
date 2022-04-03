const Orders = require('../models/OrderModel');
const Users = require('../models/UserModel');

const OrderController = {
    getOrders: async (req, res) => {
        try {
            // console.log('Vo dc day r')

            const orders = await Orders.find();
            res.json(orders);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    checkOut: async (req, res) => {
        try {

            const { user, name, phone, address, email, note, info } = req.body;

            const checkUser = await Users.findOne({ user });

            // Check user
            if (!checkUser) {
                return res.status(400).json({ msg: 'User not found' });
            }

            const newOrder = new Orders({
                user, name, phone, address, email, note, info
            });

            // Save to mongodb
            await newOrder.save();
            res.json("Order successful");


        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    confirm_Order: async (req, res) => {
        try {
            const { id, date_confirm } = req.body;

            const checkId = await Orders.findOne({ id });

            if (!checkId) {
                return res.status(500).json({ msg: "Order not found" });
            }

            await Orders.findOneAndUpdate({ id }, { date_confirm });

            res.json({ msg: "Confirm order successful" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    delivered_Order: async (req, res) => {
        try {
            const { id, date_delivered } = req.body;

            const checkId = await Orders.findOne({ id });

            if (!checkId) {
                return res.status(500).json({ msg: "Order not found" });
            }

            await Orders.findOneAndUpdate({ id }, { date_delivered });

            res.json({ msg: "Delivery order successful" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getOrdersByUser: async (req, res) => {
        try {
            const { userId } = req.body;
            // console.log(userId)
            const orders = await Orders.find({ user: userId });

            // console.log(userId);

            res.json(orders);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = OrderController;