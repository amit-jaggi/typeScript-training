export { }

/*
    SYNTAX:
    var/let/const variable-name/identifier: [data-types...] = [values...];
*/

let role: [string, string, number, boolean] = ['admin', 'manager', 10, true];
console.log(typeof role);
console.log(role);

for (let i=0; i<role.length; i++) {
    console.log(`${role[i]} : ${typeof role[i]}`);
}

