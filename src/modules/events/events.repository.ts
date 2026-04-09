import { getDb } from "../../config/database.js";
import type { Event } from "./events.model.js";

export class EventsRepository {
    private collection() {
        return getDb().collection<Event>('events');
    }

    async create(data: Event) {
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }

    async findAll() {
        return this.collection().find().toArray();
    }
}