export { }

interface User {
    name: string;
    account: number;
    getName: () => void;
}

class UserAccount {
    name: string;
    account: number;

    constructor(name: string, account: number) {
        this.name = name;
        this.account = account;
    }

    getName(): void {
        console.log(this.name);
    }
}

const user: User = new UserAccount("Amit Jaggi", 2045);
console.log(user);
user.getName()
