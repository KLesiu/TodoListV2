"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    done: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Number,
        required: [true, 'Date is required']
    }
});
//# sourceMappingURL=tasks.model.js.map