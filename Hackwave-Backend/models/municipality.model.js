const mongoose = require('mongoose');

const municipalitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    services: [{
       type : mongoose.Schema.Types.ObjectId,
       ref: 'Service',
       required: true
    }],
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
}, { timestamps: true });

const Municipality = mongoose.model('Municipality', municipalitySchema);

module.exports = Municipality;
