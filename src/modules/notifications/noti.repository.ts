import { getDb } from "../../config/database.js";
import type { Notification } from "./noti.model.js";
import { ObjectId } from "mongodb";

export class NotificationsRepository {

    private collection() {
        return getDb().collection<Notification>('notifications');
    }

    async create(data: Notification) {
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }

    async findByUser(userId: string) {
        return this.collection().find({ userId }).toArray();
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