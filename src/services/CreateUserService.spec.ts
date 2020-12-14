import FakeHashProvider from "../providers/fakes/HashGenerator";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository";
import CreateUserService from "./CreateUserService"

let createUserService:CreateUserService;
let fakeUserRepository:FakeUserRepository;
let fakeHashProvider:FakeHashProvider;

describe('Create User',()=>{
    beforeEach(()=>{
        fakeUserRepository = new FakeUserRepository();
        fakeHashProvider = new FakeHashProvider();
        createUserService = new CreateUserService(
            fakeUserRepository,
            fakeHashProvider
        )
    })

    it('should be able to create a new user', async()=>{
        const user = await createUserService.execute({
            name:'fulano',
            email:'fulano@fulano.com.br',
            password:'123456'
        })

        console.log(user)

        expect(user).toHaveProperty('id')
    })

    it('should not be able to create an user with email duplicated', async()=>{
        await createUserService.execute({
            name:'fulano',
            email:'fulano@fulano.com.br',
            password:'123456' 
        })

        await expect(createUserService.execute({
            name:'fulano2',
            email:'fulano@fulano.com.br',
            password:'123456' 
        })).rejects.toBeInstanceOf(Error)
    })
})