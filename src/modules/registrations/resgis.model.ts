import { ObjectId } from "mongodb";

export interface Registration {
    _id?: ObjectId;
    userId: string;
    eventId: string;
}