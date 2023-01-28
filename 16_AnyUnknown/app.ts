export { }

// +-----------------+
// |   any concept   |
// +-----------------+
let case1: any;
case1 = 20;
case1 = true;
case1 = 'anything';

let item1: string;
item1 = case1;


// +-----------------+
// | unknown concept |
// +-----------------+
let case2: unknown;
case2 = 20;
case2 = true;
case2 = 'anything';

let item2: string;
if (typeof case2 === 'string') {
    item2 = case2;
    console.log(item2);
}