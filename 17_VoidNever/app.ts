export { }

// +-----------------+
// |   void concept  |
// +-----------------+
function printData() {  // type inferenceing void
    console.log("Hi");
}
printData();



// +-----------------+
// |  never concept  |
// +-----------------+
function apiError(msg, code): never {
    throw { msg, code }
}

console.log(apiError("server side error", 500));