let a = true;
let b = false;
let c = 2 > 1;
let d = 2 > 1 && 1 > 0;
let e = 2 < 1 || 1 < 0;
let f = !(2 < 1); // 2 >= 1
let g = !(2 > 1 && 1 > 0); // ?
// 2 <= 1 || 1 <= 0

let x = 5;
let k = x > 1 && x < 8; // ?
let i = !k;
let j = !(x > 1 && x < 8);
let t = x <= 1 || x >= 8;

let y = 5;
let r = y == 1 || y != 5;
let u = y != 1 && y == 5;


!(A && B)
!A || !B

!(A || B)
!A && !B
