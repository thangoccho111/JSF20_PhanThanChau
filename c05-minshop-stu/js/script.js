// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];

function init() {
  for (let i = 0; i < books.length; i++) {
    let danhSach = document.getElementById("list");

    let sach = document.createElement("div");
    sach.className = "item";

    let hinh = document.createElement("img");
    hinh.src = "./images/0" + books[i].id + ".jpg";
    sach.appendChild(hinh);

    let tenSach = document.createElement("h2");
    tenSach.innerHTML = books[i].name;
    sach.appendChild(tenSach);

    let giaSach = document.createElement("p");
    giaSach.innerHTML = books[i].price;
    sach.appendChild(giaSach);

    danhSach.appendChild(sach);
  }
}

function fromGia(min, max) {
  console.log(min.max);
  for (let i = 0; i < books.length; i++) {
    let sachHienTai = books[i];
    if (min <= sachHienTai.price && sachHienTai.price <= max) {
      let danhSach = document.getElementById("list");
      let sach = document.createElement("div");
      sach.className = "item";
      let hinh = document.createElement("img");
      hinh.src = "./images/0" + sachHienTai.id + ".jpg";
      sach.appendChild(hinh);
      let tenSach = document.createElement("h2");
      tenSach.innerHTML = sachHienTai.name;
      sach.appendChild(tenSach);
      let giaSach = document.createElement("p");
      giaSach.innerHTML = sachHienTai.price;
      sach.appendChild(giaSach);
      danhSach.appendChild(sach);
    }
    console.log(sachHienTai);
  }
}

let xetGia = document.getElementById("apply-price-filter");
xetGia.addEventListener("click", function () {
  let minGia = document.getElementById("min-price");
  let maxGia = document.getElementById("max-price");
  fromGia(Number(minGia.value), Number(maxGia.value));
});

init();
