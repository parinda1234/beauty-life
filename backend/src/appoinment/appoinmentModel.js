const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppoinmentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    pnum: {
        type: String,
        required: true
    },
    srvce: {
        type: String,
        required: true
    },
    Addate: {
        type: String,
        required: true
    },
    prsn: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('appoinment', AppoinmentSchema);