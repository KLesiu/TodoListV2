"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [4, 'Name should be atleast 4 characters long'],
        maxLength: [30, "Name should be less than 30 characters"]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false
    },
    tasks: {
        type: (Array),
        required: true
    }
});
//# sourceMappingURL=users.model.js.map