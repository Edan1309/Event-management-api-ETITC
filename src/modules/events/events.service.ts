import { EventsRepository } from "./events.repository.js";

export class EventsService {
    private repository = new EventsRepository();

    create(data: any) {
        return this.repository.create(data);
    }

    findAll() {
        return this.repository.findAll();
    }

    update(id: string, data: any) {

    return this.repository.update(id, data);
    }

    delete(id: string) {

    return this.repository.delete(id);
    }
}