let danhSachKhoaHoc = [
  { Ten: "JSK20", time: 24, siSo: 10, linhVuc: "front-end" },
  { Ten: "Note", time: 30, siSo: 5, linhVuc: "data" },
  { Ten: "C#", time: 16, siSo: 8, linhVuc: "databay" },
  { Ten: "ReactJS", time: 20, siSo: 20, linhVuc: "front-end" },
  { Ten: "NextJS", time: 16, siSo: 6, linhVuc: "front-end" },
];

let S = 0;
let Dem = 0;
let siSoLonNhat = 0;
for (let i = 0; i < danhSachKhoaHoc.length; i++) {
  if (danhSachKhoaHoc[i].linhVuc == "front-end")
    console.log(danhSachKhoaHoc[i]);
  if (danhSachKhoaHoc[i].siSo > siSoLonNhat) {
    siSoLonNhat = danhSachKhoaHoc[i].siSo;
  }
  Dem++;
  S = S + danhSachKhoaHoc[i].siSo;
  console.log(S);
}
console.log("Si so lon nhat:", siSoLonNhat);
