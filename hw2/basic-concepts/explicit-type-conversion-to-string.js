// Explicit type conversion: Use global function
// To String
let a = String(3); // "3"
let b = String(NaN); // "NaN"
let c = String(Infinity); // "Infinity"
let d = String(true); // "true"
let e = String(false); // "false"
let f = String({ }); // "[object Object]"
let g = String([2, 4]); // "2, 4"
let h = String([3]); // "3"
let i = String(["3"]); // "3"
let j = String([]); // ""
function func() {}
let k = String(func); // "function(){}"
let l = String(null); // "null"
let m = String(undefined); // "undefined"

