
const constants = require("../constants/constants");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        skinType: {
            type: String,
            enum: ["dry", "oily", "normal", "sensitive"],
            // required: true
        },
        product: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        ],
        createdProducts: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        routines: [
            {
                type: Schema.Types.ObjectId,
                ref: "Routine"
            }
        ],
        createdRoutines: [
            {
                type: Schema.Types.ObjectId,
                ref: "Routine"
            }
        ],
        birthdate: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        biography: {
            type: String
        },
        picture: {
            type: String
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
