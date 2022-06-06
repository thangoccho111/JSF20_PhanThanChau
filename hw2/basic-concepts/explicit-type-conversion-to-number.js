// Explicit type conversion: Use global function
// To Number
let a = Number("3"); // 3
let b = Number("a"); // NaN
let c = Number(""); // 0
let d = Number(true); // 1
let e = Number(false); // 0
let f = Number({ }); // NaN
let g = Number([2, 4]); // NaN
let h = Number([3]); // 3
let i = Number(["3"]); // 3
let j = Number([]); // 0
function func() {}
let k = Number(func); // NaN
let l = Number(null); // 0
let m = Number(undefined); // NaN

// NaN: "a", {}, [2, 4], f, undefined



