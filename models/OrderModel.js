const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    note: {
        type: String
    },
    info: {
        type: Array,
        default: []
    },
    date_order: {
        type: Date,
        default: Date.now
    },
    date_confirm: {
        type: Date
    },
    date_delivered: {
        type: Date
    }
});

module.exports = mongoose.model('order', OrderSchema);
