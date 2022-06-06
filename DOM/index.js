alert("Xin chào");
console.log("OK luôn");

let text = document.getElementById("text");
console.log(text);

let hello = document.getElementById("Hello");
console.log(hello);
let h2 = document.getElementsByTagName("h2");
console.log(h2);

let helloclass = document.getElementsByClassName("hello");
console.log(helloclass);

let classhello = document.querySelectorAll(".hello");
console.log(classhello);

// console.log(h2[1]);
// h2[1].innerHTML =
//   "<span style='color:#7ef7ef; font-size:30px'>Hẹn gặp lại bạn sau";
function thaydoi() {
  let idtext = document.getElementById("text");
  console.log(idtext.innerHTML);
  idtext.innerHTML =
    "<span style='color:#7ef7ef; font-size:30px'>Xin chào</span> tạm biệt";

  let bay = document.getElementById("Hello").nextElementSibling;
  bay.innerHTML =
    "<span style='color:#7ef7ef; font-size:30px'>Hẹn gặp lại bạn sau";
}
