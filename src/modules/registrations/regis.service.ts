import { RegistrationsRepository } from "./regis.repository.js";

export class RegistrationsService {
    private repository = new RegistrationsRepository();

    register(data: any) {
        return this.repository.register(data);
    }

    findByEvent(eventId: string) {
        return this.repository.findByEvent(eventId);
    }
}