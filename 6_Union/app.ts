// +----------+
// |  CASE 1  |
// +----------+

let case1 = 'Amit';
// case1 = 50;
// // or;
// case1 = true;
console.log(case1);

// +----------+
// |  CASE 2  |
// +----------+
let case2 = 50;
// case2 = 'Amit';
// // or;
// case2 = true;
console.log(case2);

// +----------+
// |  CASE 3 |
// +----------+
let case3 = true;
// case3 = 50;
// // or;
// case3 = 'akhil';
console.log(case3);

// +----------+
// |  CASE 4 |
// +----------+
let case4: string | number = 'Akhil';
case4 = 600;
// case4 = true;        // Type 'boolean' is not assignable to type 'string | number'.
console.log(case4);

// +----------+
// |  CASE 5 |
// +----------+
let case5: string | boolean = 'Akhil';
case5 = true;
// case5 = 600;         // Type '600' is not assignable to type 'string | boolean'.
console.log(case5);

// +----------+
// |  CASE 6 |
// +----------+
let case6: boolean | number = 21;
case6 = true;
// case6 = "600";       // Type '"600"' is not assignable to type 'number | boolean'.
console.log(case6);

