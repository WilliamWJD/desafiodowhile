import User from "../entities/User";
import IUserRepository from "../repositories/IUserRepository";
import crypto from 'crypto';
import IHashProvider from "../providers/IHashProvider";

interface Request{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{
    constructor(
        private userRepository: IUserRepository,
        private hashProvider:IHashProvider
    ){}

    public async execute({ name, email, password }: Request):Promise<User>{
        const checkUser = await this.userRepository.findByMail(email);

        if(checkUser){
            throw new Error('there is already a user with that email')
        }

        const id = await this.hashProvider.generatedHash();

        const user = await this.userRepository.create({
            id, name, email, password
        })

        return user;
    }
}

export default CreateUserService;