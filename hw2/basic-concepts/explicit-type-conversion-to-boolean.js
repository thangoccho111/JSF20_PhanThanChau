// Explicit type conversion: Use global function
// To Boolean
let a = Boolean(3); // true
let b = Boolean(NaN); // false
let c = Boolean(Infinity); // true
let d = Boolean("0"); // true
let e = Boolean(""); // false
let f = Boolean({}); // true
let g = Boolean([2, 4]); // true
let h = Boolean([3]); // true
let i = Boolean(["3"]); // true
let j = Boolean([]); // true
function func() { }
let k = Boolean(func); // rtue
let l = Boolean(null); // false
let m = Boolean(undefined); // false

// false: NaN, "", null, undefined


