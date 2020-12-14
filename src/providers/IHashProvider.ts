export default interface IHashProvider{
    generatedHash():Promise<string>
}