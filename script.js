// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log("hellow", i);
// }

// let arg = process.argv;
// for (let i = 2; i < arg.length; i++) {
//   console.log("hellow to ",arg[i]);
// }

const mat = require("./math");
console.log("your value is ",mat);
console.log("sum  of two no ",mat.sum(2, 2));

const fruits = require("../second-git"); 
console.log(fruits);