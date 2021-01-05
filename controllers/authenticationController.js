const User = require('../models/createModel');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
    console.log(req.body);

    const { name, password, email, mobile, address } = req.body;

    const hash = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        password: hash,
        email,
        mobile,
        address
    });

    delete user._doc.password;
    return res.status(200).json({
        status: 'success',
        data: user
    });
});

exports.login = catchAsync(async (req, res, next) => {
    console.log(req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return next(new AppError(`No User Found with email: ${email}`));
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
        return next(new AppError('Invalid Email or Password!'));
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
    delete user._doc.password;
    return res.status(200).json({
        token,
        status: 'success',
        user,
        message: "Successfully Logged In"
    });
});