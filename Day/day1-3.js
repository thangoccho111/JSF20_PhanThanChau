// let a = 2;
// var b = 20;
// const c = {
//   id: "1",
//   name: "Phan Thân Châu",
//   sinhngay: "12/09/2000",
//   diachi: "Ấp Bình Minh xã Bình Châu huyện Xuyên Mộc tỉnh Bà Rịa Vũng Tàu",
// };
// const d = [
//   {
//     id: 1,
//     name: "Phan Thân Châu",
//     sinhngay: "12/09/2000",
//     diachi: "Ấp Bình Minh xã Bình Châu huyện Xuyên Mộc tỉnh Bà Rịa Vũng Tàu",
//   },
//   {
//     id: 2,
//     name: "Phan Thân Châu",
//     sinhngay: "12/09/2000",
//     diachi: "Ấp Bình Minh xã Bình Châu huyện Xuyên Mộc tỉnh Bà Rịa Vũng Tàu",
//   },
// ];
// console.log("Xin chào");
// console.log(a);
// console.log(b);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(c);
// console.log(d);
// console.log(b ** a);
// console.log(Math.sqrt(9));
// console.log(Math.abs(-9));

// const x = "2";
// const y = 2;
// console.log(x + y);

//////Tính điểm trung bình
let Toan = 8;
let Ly = 9;
let Hoa = 10;
let S = (Toan + Ly + Hoa) / 3;
console.log(S);

// Tính biểu thức
let x = 2;
let y = -8;
let z = 4;
let D = (-y + Math.sqrt(Math.pow(y, 2) - 4 * x * z)) / (2 * x);
console.log(D);

// Tính tiền
let A1 = 3;
let A2 = 1;
let B1 = 2;
let B2 = 3;
let d = Math.sqrt(Math.pow(A1 - B1, 2) + Math.pow(A2 - B2, 2));
let s = d * 8000;
console.log(s);

//True/False

//buổi 3
let obj = {
  name: "chau",
  age: 20,
  toan: 8,
  ly: 7,
  hoa: 6,
};
console.log(obj.name);
let trungbinh = (obj.toan + obj.ly + obj.hoa) / 3;
console.log("Điển trung bình là :", trungbinh + "đ");

let arr = ["ăn tối", "đi học", "đi ngủ"];
console.log("tôi sẽ " + arr[0] + " sau đó " + arr[1] + " và " + arr[2]);
let diem = [7, 5, 7];
let dtt = (diem[0] + diem[1] + diem[2]) / 3;
console.log("Điển trung bình là :", Math.round(dtt) + "đ\n");

function Chaohoi(ten) {
  console.log("chao", ten);
  console.log(ten, "lam bai tam het chua?");
  console.log(ten, "nho di hoc day du nha\n");
}
Chaohoi("Chau");

function tinhDTT(toan, ly, hoa) {
  let diemTB = (toan + ly + hoa) / 3;
  console.log("ĐTB là:", diemTB);
  return diemTB;
}
// tinhDTT(9, 8, 7);

let diemNaoDo = tinhDTT(9, 8, 5.5);
function lamTron(diem) {
  let ketQua = Math.round(diem);
  console.log("Ket qua lam tron la:", ketQua);
}
lamTron(diemNaoDo);

function tinhDTHCM(dai, rong) {
  let ketQua = dai * rong;
  return ketQua;
}

let ketQuaHCM = tinhDTHCM(5, 6.5);
console.log(ketQuaHCM);
function lamTronketqua(dientich) {
  let ketquaLamTron = Math.round(dientich);
  return ketquaLamTron;
}

let ketquaLen = lamTronketqua(ketQuaHCM);
console.log("ket qua lam tron hinh chu nhat la:", ketquaLen);
