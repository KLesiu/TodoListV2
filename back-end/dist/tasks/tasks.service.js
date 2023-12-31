"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TasksService = class TasksService {
    constructor(taskModel, userModel) {
        this.taskModel = taskModel;
        this.userModel = userModel;
    }
    async getTasks(user) {
        const userSearch = await this.userModel.findById(user._id);
        return userSearch["tasks"];
    }
    async postTask(user, body) {
        const searchUser = await this.userModel.findById(user._id);
        let taskData = {
            name: body.name,
            done: body.done,
            createdAt: body.createdAt
        };
        const task = await this.taskModel.create(taskData);
        if (!task)
            return 'We couldnt create your task!';
        await searchUser.updateOne({ tasks: [...searchUser['tasks'], task] });
        return JSON.stringify({
            msg: "ADDED"
        });
    }
    async updateTask(user, id, body) {
        const searchUser = await this.userModel.findById(user._id);
        const allTasks = await searchUser['tasks'];
        const updatedTasks = allTasks.map((ele) => {
            if (`${ele._id}` === id)
                ele.name = body.name;
            return ele;
        });
        const updatedUser = await searchUser.updateOne({ tasks: updatedTasks });
        await this.taskModel.findByIdAndUpdate(id, { "name": body.name });
        return updatedUser;
    }
    async deleteTask(user, id, body) {
        const searchUser = await this.userModel.findById(user._id);
        const allTasks = await searchUser['tasks'];
        const updatedTasks = allTasks.filter((ele) => {
            if (`${ele._id}` !== id)
                return ele;
        });
        const updatedUser = await searchUser.updateOne({ tasks: updatedTasks });
        await this.taskModel.findByIdAndRemove(id);
        return updatedUser;
    }
    async changeDone(user, id, body) {
        const searchUser = await this.userModel.findById(user._id);
        const allTasks = await searchUser['tasks'];
        const updatedTasks = allTasks.map((ele) => {
            if (`${ele._id}` === id)
                ele.done = !ele.done;
            return ele;
        });
        const updatedUser = await searchUser.updateOne({ tasks: updatedTasks });
        await this.taskModel.findByIdAndUpdate(id, { "done": JSON.parse(body.done) });
        return updatedUser;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Task')),
    __param(1, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model, mongoose_1.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map