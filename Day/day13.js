let A = "Bảo Vũ;Thắng Nguyễn;Châu Phan";
let array = A.split(";");
console.log(array);

let one = array[0].split(" ");
let newOne0 = one[0].padEnd(7, " ");
let newOne1 = one[1].padStart(7, " ");
console.log(newOne0, newOne1);
let two = array[1].split(" ");
let newTwo0 = two[0].padEnd(7, " ");
let newTwo1 = two[1].padStart(7, " ");
console.log(newTwo0, newTwo1);
let three = array[2].split(" ");
let newThree0 = three[0].padEnd(7, " ");
let newThree1 = three[1].padStart(7, " ");
console.log(newThree0, newThree1);

for (let i = 0; i < array.length; i++) {
  let item = array[i].split(" ");
  let phanTen = item[0].padEnd(7, " ");
  let phanHo = item[1].padStart(7, " ");
  console.log(phanTen + phanHo);
}
