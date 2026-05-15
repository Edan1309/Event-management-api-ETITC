import { getDb } from "../../config/database.js";
import { ObjectId } from "mongodb";

export class RegistrationsRepository {
    private collection() {
        return getDb().collection('registrations');
    }

    async register(data: any) {
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }

    async findByEvent(eventId: string) {
        return this.collection().find({ eventId }).toArray();
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