export { }

// Explicit type assignment
/*
    SYNTAX:
    var/let/const <variable/identifier>: <type-annotation> = value;
*/
let numerical: number = 10;

let condition: boolean = true;

let title: string = "Explicit type assignment";

console.log(title);
console.log(numerical);
console.log(condition);



let variableName: any;
console.log(variableName, ":", typeof variableName);

variableName = 200;
console.log(variableName, ":", typeof variableName);

variableName = "Changing value on same variable";
console.log(variableName, ":", typeof variableName);

variableName = true
console.log(variableName, ":", typeof variableName);

