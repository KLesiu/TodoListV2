import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    password: string;
    tasks: any[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    password: string;
    tasks: any[];
}>> & mongoose.FlatRecord<{
    name: string;
    password: string;
    tasks: any[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface User extends mongoose.Document {
    id: string;
    name: string;
    password: string;
}
