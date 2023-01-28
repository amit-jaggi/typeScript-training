export { }

// +----------+
// |  CASE 1  |
// +----------+
let case1: string[] = ['abc', 'joe', 'mario'];
// case1.push(true);            // Argument of type 'boolean' is not assignable to parameter of type 'string'.
// // or;
// case1.push(100);             // Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(case1[2]);

// +----------+
// |  CASE 2  |
// +----------+
let case2: number[] = [3, 5.7, 205];
// case2.push('joy');           // Argument of type 'string' is not assignable to parameter of type 'number'.
// // or;
// case2.push(true);            // Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log(case2);

// +----------+
// |  CASE 3  |
// +----------+
let case3: boolean[] = [true];
// case3.push('kunal');         // Argument of type 'string' is not assignable to parameter of type 'boolean'.
// // or;
// case3.push(100);             // Argument of type 'number' is not assignable to parameter of type 'boolean'.
console.log(case3);

// +----------+
// |  CASE 4  |
// +----------+
let case4: (string | boolean)[] = ['abc', 'joe', 'mario', false];
// case4.push(10);              // Argument of type '10' is not assignable to parameter of type 'string | boolean'.
console.log(case4);

// +----------+
// |  CASE 5  |
// +----------+
let case5: (number | boolean)[] = [3, 5.7, 205, true];
// case5.push('Isac');          // Argument of type '"Isac"' is not assignable to parameter of type 'number | boolean'.
console.log(case5);

// +----------+
// |  CASE 6  |
// +----------+
let case6: (string | number)[] = ['abc', 'joe', 'mario', 86];
// case6.push(true);            // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(case6);

// +----------+
// |  CASE 7  |
// +----------+
let case7: (string | number | boolean)[] = ['abc', false, 'joe', 2902439, 'mario'];
// case7.push({id: 100})        // Argument of type '{ id: number; }' is not assignable to parameter of type 'string | number | boolean'.
// // origin;
// case7.push(['qiwi']);        //Argument of type 'string[]' is not assignable to parameter of type 'string | number | boolean'.
console.log(case7);


// +----------------------------------------------------------------+

let case7_Extended = Array.isArray(case7);  // using method
console.log("case7_Extended", ":", case7_Extended);