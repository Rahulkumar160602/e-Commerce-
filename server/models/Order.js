const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [Object],
totalPrice: Number,
paymentStatus: { type: String, default: 'pending' },
shippingAddress: Object,
}, { timestamps: true });
module.exports = mongoose.model('Order', OrderSchema);