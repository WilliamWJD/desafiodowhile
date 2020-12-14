import IUser from "../DTOS/IUser";
import User from "../entities/User";

export default interface IUserRepository{
    create({ id, name, email, password }:IUser):Promise<User>
    findByMail(email:string):Promise<User|undefined>
}