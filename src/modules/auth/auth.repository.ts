import { getDb } from "../../config/database.js";
import type { User } from "../users/user.model.js";
import { ObjectId } from "mongodb";



export class  authRepository {
private collection(){
    return getDb().collection<User>('users');


}

async findByEmail(email: string): Promise<User | null>{
    return this.collection().findOne({email});
}
async create(user: User): Promise<User> {
    const result = await this.collection().insertOne(user);
    return {_id: result.insertedId, ...user};
}

async findById(id: string) {

    return this.collection().findOne({
        _id: new ObjectId(id)
    });
}

async update(id: string, data: any) {

    await this.collection().updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );

    return this.findById(id);
}

async delete(id: string) {

    return this.collection().deleteOne({
        _id: new ObjectId(id)
    });
}

}