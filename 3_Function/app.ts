export { }

/*
    FUNCTION DEFINITION SYNTAX:
    function function_name (): data_type {
        // statement
    }
*/

// +----------+
// |  CASE 1  |
// +----------+
function getUser(): string {
    return 'Amit Jaggi';
    // return 400;      // Type 'number' is not assignable to type 'string'.
    // return true;     // Type 'boolean' is not assignable to type 'string'.
}
console.log(getUser());


// +----------+
// |  CASE 2  | OPTIONAL PARAMETER
// +----------+
function addition(param1: number, param2?: number): number {
    return param2 ? param1 + param2 : param1;
}
console.log(addition(100));
console.log(addition(100, 50));
// console.log(addition(false, 50));    // Argument of type 'boolean' is not assignable to parameter of type 'number'.
// console.log(addition("100", 50));    // Argument of type 'string' is not assignable to parameter of type 'number'.


// +----------+
// |  CASE 3  |
// +----------+
function deleteUser(id: number): void {    // [NOTE] Not returning anything
    id && console.log('User deleted...');
}

// deleteUser();                // An argument for 'id' was not provided.
deleteUser(56);
// deleteUser("Amit Jaggi");    // Argument of type 'string' is not assignable to parameter of type 'number'.
// deleteUser(true);            // Argument of type 'boolean' is not assignable to parameter of type 'number'.


// +----------+
// |  CASE 4  |
// +----------+
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Amit Jaggi", new Date());