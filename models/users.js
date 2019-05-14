const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    facebookId:{
        type: String,
        required: [true, 'El id de facebook es obligatorio']
    },
    active: {
        type: Boolean,
        default: false
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type : [Number],
            required: true
        }
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;