const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const UserSchema = new Schema({
    facebookId:{
        type: String,
        required: [true, 'El id de facebook es obligatorio']
    },
    active: {
        type: Boolean,
        default: false
    },
    needHelp: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});


const User = mongoose.model('user', UserSchema);

module.exports = User;
