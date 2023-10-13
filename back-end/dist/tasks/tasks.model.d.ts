import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    done: boolean;
    createdAt: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    done: boolean;
    createdAt: number;
}>> & mongoose.FlatRecord<{
    name: string;
    done: boolean;
    createdAt: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Task extends mongoose.Document {
    name: string;
    done: boolean;
    createdAt: number;
}
