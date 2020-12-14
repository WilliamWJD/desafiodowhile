import { uuid } from 'uuidv4';
import IHashProvider from "../IHashProvider";


export default class FakeHashProvider implements IHashProvider {
    public async generatedHash():Promise<string>{
        return uuid();
    }
}