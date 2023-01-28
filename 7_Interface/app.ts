export { }

/*
    INTERFACE (Template) SYNTAX:
    interface interface_name {
        property_key/name: data_type;
    }
*/

interface IUsers {
    name: string;
    age: number;
    isLogged: boolean;
    getName: () => string;
}

let users: IUsers = {
    name: 'Amit Jaggi',
    age: 28,
    isLogged: false,
    getName: function () {
        return this.name;
    }
};

console.log(users);
console.log(users.getName());

// +------------------------------------------------+

interface IEmployee {
    id: number
}

interface IEmployee {
    name: string
    salary: number
}

// [NOTE] Two interfaces having same name can get merged to form a single interface with the same name

let employee: IEmployee = {
    name: "Amit Jaggi",
    id: 1,
    salary: 5000
};

console.log(employee);