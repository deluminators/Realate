const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minlength: 6
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        validate: {
            validator: email => validator.isEmail(email),
            message: '{VALUE} is not a valid email'
        }
    },
    mobile: {
        type: String,
        validate: {
            validator: function (v) {
                var re = /^\d{10}$/;
                return (v == null || v.trim().length < 1) || re.test(v)
            },
            message: '{VALUE} is not a valid mobile number'
        }
    },
    address: {
        type: String,
        required: [true, 'Address is Required']
    }
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
