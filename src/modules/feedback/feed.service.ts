import { FeedbackRepository } from "./feed.repository.js";

export class FeedbackService {

    private repository = new FeedbackRepository();

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