function DiemTB() {
  let Toan = document.getElementById("Toan");
  console.log(Number(Toan.value));
  let Ly = document.getElementById("Ly");
  console.log(Number(Ly.value));
  let Hoa = document.getElementById("Hoa");
  console.log(Number(Hoa.value));
  let dtb =
    Math.round(
      ((Number(Toan.value) + Number(Ly.value) + Number(Hoa.value)) / 3) * 100
    ) / 100;
  console.log(dtb);
  let DiemTB = document.getElementById("diemTB");
  DiemTB.innerHTML = dtb;
  if (dtb < 5) DiemTB.style.color = "red";
  else DiemTB.style.color = "green";
}
let btnDiemTB = document.getElementById("btn");
btnDiemTB.addEventListener("click", DiemTB);
