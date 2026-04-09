import { ObjectId } from "mongodb";

export interface Event {
    _id?: ObjectId;
    title: string;
    description: string;
    date: string;
    userId: string;
}