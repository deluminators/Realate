const User = require('../models/createModel');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = catchAsync(async (req, res, next) => {
    console.log(req.body);

    const { name, password, email, mobile, address } = req.body;

    bcrypt.hash(password, 12, async function (err, hash) {

        if (err) {
            return res.status(403).json({
                status: 'error',
                error: err,
                message: err.message
            });
        }

        const user = await User.create({
            name,
            password: hash,
            email,
            mobile,
            address
        },
            function (err, model) {
                if (err) {
                    return res.status(403).json({
                        status: 'error',
                        error: err,
                        message: err.message
                    });
                }
                delete model._doc.password;
                return res.status(200).json({
                    status: 'success',
                    data: model
                });
            });
    });
});

exports.login = catchAsync(async (req, res, next) => {
    console.log(req.body);

    const { email, password } = req.body;

    User.findOne({ email: email }, function (err, model) {
        if (err) {
            console.log(err);
            return res.status(403).json({
                status: 'error',
                error: err,
                message: err.message
            });
        }
        console.log(model)

        if (model) {
            bcrypt.compare(password, model.password)
                .then(matched => {
                    if (matched) {
                        const token = jwt.sign({ _id: model._id }, process.env.JWT_KEY);
                        delete model._doc.password;
                        return res.status(200).json({
                            token,
                            status: 'success',
                            user: {
                                ...model._doc
                            },
                            message: "Successfully Logged In"
                        });
                    } else {
                        return res.status(403).json({
                            status: 'error',
                            error: "User Found but Password is wrong",
                            message: "Invalid Email or Password"
                        });
                    }
                }).catch(err => {
                    return res.status(400).json({
                        status: 'error',
                        error: "Something wrong! Maybe password is null, or JWT_KEY is null",
                        message: err.message
                    });
                });
        } else {
            return res.status(404).json({
                status: 'error',
                error: "No User Found with entered Email",
                message: "Invalid Email or Password"
            });
        }
    })
});