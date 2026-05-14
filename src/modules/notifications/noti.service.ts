import { NotificationsRepository } from "./noti.repository.js";

export class NotificationsService {

    private repository = new NotificationsRepository();

    create(data: any) {
        return this.repository.create(data);
    }

    findByUser(userId: string) {
        return this.repository.findByUser(userId);
    }

    update(id: string, data: any) {
    return this.repository.update(id, data);
        }
    delete(id: string) {
    return this.repository.delete(id);
}
}