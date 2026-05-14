import { ObjectId } from "mongodb";

export interface Notification {
    _id?: ObjectId;
    title: string;
    message: string;
    userId: string;
}