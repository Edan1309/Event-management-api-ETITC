import { ObjectId } from "mongodb";

export interface Feedback {
    _id?: ObjectId;
    userId: string;
    comment: string;
    rating: number;
}