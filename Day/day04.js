// const là hằng số không thay đổi
const PI = 3.14;
console.log(PI);

let x = 15;
let y = 9;
let z = x < y ? "Yes" : x < 20 ? "Yes" : "No";
console.log(z);

//if else

let A = 24;
// kiểm tra âm dương
if (A > 0) {
  console.log("A là một số dương");
} else {
  console.log("A là một số âm");
}
// kiểm tra số lẽ và số chẵn
if (A % 2 === 0) {
  console.log("A là số chẵn");
} else {
  console.log("A là số lẽ");
}
// xếp loại học lực
let Diem = 7.5;
if (8 <= Diem && Diem <= 10) {
  console.log("Học lực giỏi");
} else if (6.5 <= Diem && Diem < 8) {
  console.log("Học lực khá");
} else if (5 <= Diem && Diem < 6.5) {
  console.log("Học lực Trung Bình");
} else {
  console.log("Học lực yêu");
}
