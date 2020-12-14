import IUser from '../../DTOS/IUser';
import User from '../../entities/User';
import IUserRepository from '../IUserRepository';

class FakeUserRepository implements IUserRepository{
    private users:User[] = [];

    public async create({id, name, email, password}:IUser):Promise<User>{
        const user = new User(id, name, email, password);
        this.users.push(user);
        return user;
    }

    public async findByMail(email:string):Promise<User|undefined>{
        const user = this.users.find(user=>user.email === email);
        return user || undefined
    }
}

export default FakeUserRepository;