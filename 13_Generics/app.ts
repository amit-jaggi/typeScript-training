export { }

function users<GenericsType>(data: GenericsType): GenericsType {
    console.log(typeof data);
    
    return data;
}

console.log(users({
    name: "ABC",
    age: 30
}));

console.log(users('Typescript'));
console.log(users(100));
