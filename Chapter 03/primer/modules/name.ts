export class Name {
    constructor(public first: string, public second: string) {}
    get nameMessage() {
        return `${this.first} ${this.second}`;
    }
}