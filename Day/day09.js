// Cấu trúc vòng lập

let x = true;
if (x) {
  console.log("Hôm nay học vòng lập");
}

// let dem = 0;
// while (dem < 5) {
//   console.log("moi nguoi lam bai tap nhe");
//   dem++;
//   console.log("Dem: ", dem);
// }

///Hãy in ra màng hình các số tự nhiên từ [13;21]

let bien = 13;

while (bien >= 13 && bien <= 21) {
  console.log("Giá trị:", bien);
  bien++;
}

//in ra man hình các số tự nhiên từ 35-27

let X = 35;
while (X >= 27) {
  console.log("Giá trị:", X);
  X--;
}

//in ra số chẵn

let chan = 50;
while (chan <= 60) {
  if (chan % 2 === 0) {
    // let data = [chan];
    console.log("Các giá trị chẵn:", chan);
  }
  chan++;
}

//for (Giá trị ban đầu; điều kiện; giá trị cập nhật)

for (dem = 0; dem <= 10; dem++) {
  console.log("Giá trị:", dem);
}

let A = ["Châu", "Huy", "Thắng", "Trúc", "Trí", "Phúc"];
for (a = 0; a < A.length; a++) {
  console.log("Tên các thành viên:", A[a]);
}

let array = [20, 59, 74, 2208, 984];
for (index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0)
    console.log("Những giá trị chẵn có trong mảng:", array[index]);
}
