import { ObjectId } from "mongodb";
import { getDb } from "../../config/database.js";
import type { Feedback } from "./feed.model.js";

export class FeedbackRepository {

    private collection() {
        return getDb().collection<Feedback>('feedback');
    }

    async create(data: Feedback) {

        const result = await this.collection().insertOne(data);

        return {
            _id: result.insertedId,
            ...data
        };
    }

    async findAll() {
        return this.collection().find().toArray();
    }

    async update(id: string, data: any) {

        await this.collection().updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );

        return this.collection().findOne({
            _id: new ObjectId(id)
        });
    }

    async delete(id: string) {

        return this.collection().deleteOne({
            _id: new ObjectId(id)
        });
    }
}