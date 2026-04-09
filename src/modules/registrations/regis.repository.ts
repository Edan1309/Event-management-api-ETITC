import { getDb } from "../../config/database.js";

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
}