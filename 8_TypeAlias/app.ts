export { }

type varType = string | number | undefined;

let a: varType = 10;
let b: varType = "Hi";
let c: varType = undefined;

// +---------------------------------------------------------------+

type userType = {
    name: string,
    age: number,
    isLogged: boolean,
    totalComments: number
}

// type userType = {}   // two types will not merge as a type cannot be changed after being created

let users: userType = {
    name: 'Amit',
    age: 28,
    isLogged: false,
    totalComments: 100,
}

console.log(users);