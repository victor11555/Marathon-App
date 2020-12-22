const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    company: String,
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    marathons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Marathon'}],
    role: {type: String, required: true, default: 'company'},
});

module.exports = mongoose.model('Company', companySchema);
