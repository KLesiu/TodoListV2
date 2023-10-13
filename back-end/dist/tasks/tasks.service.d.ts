/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Task } from "./tasks.model";
import { Model } from 'mongoose';
import { User } from "src/users/users.model";
export declare class TasksService {
    private readonly taskModel;
    private readonly userModel;
    constructor(taskModel: Model<Task>, userModel: Model<User>);
    getTasks(user: {
        name: string;
        _id: string;
        tasks: [];
    }): Promise<any>;
    postTask(user: {
        name: string;
        _id: string;
        tasks: [];
    }, body: {
        done: boolean;
        name: string;
        createdAt: number;
    }): Promise<String>;
    updateTask(user: {
        name: string;
        _id: string;
        tasks: Array<Task | null>[];
    }, id: string, body: {
        name: string;
    }): Promise<import("mongoose").UpdateWriteOpResult>;
    deleteTask(user: {
        name: string;
        _id: string;
        tasks: Array<Task | null>[];
    }, id: string, body: {
        name: string;
    }): Promise<import("mongoose").UpdateWriteOpResult>;
    changeDone(user: {
        name: string;
        _id: string;
        tasks: Array<Task | null>[];
    }, id: string, body: {
        done: string;
    }): Promise<import("mongoose").UpdateWriteOpResult>;
}
