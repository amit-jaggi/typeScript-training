export { }

/*
    OBJECT SYNTAX:
    let/var/const object_name = {
        property_key/name: value,
        method: function
    }
*/

interface IUsers {
    name: string,
    age: number,
    isLogged: boolean,
    email: string
}

let users: IUsers = {
    name: 'Amit',
    age: 28,
    isLogged: false,
    email: 'email@example.com'
}

// +--------------------+
// | CANNOT BE MODIFIED |
// +--------------------+
// users.name = 200;            // Type 'number' is not assignable to type 'string'.

// users.age = '28';            // Type 'string' is not assignable to type 'number'.

// users.isLogged = 'logged';   // Type 'string' is not assignable to type 'boolean'.

users.email = 'typescript.support@example.com';
console.log(users.email);

