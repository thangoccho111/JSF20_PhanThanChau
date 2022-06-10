function init() {
  let ul = document.getElementById("myUL");
  let theLis = ul.children;
  for (let i = 0; i < theLis.length; i++) {
    let theliDangXet = theLis[i];
    theliDangXet.innerHTML += "<span class='close'>X</span>";
    theliDangXet.addEventListener("click", function () {
      if (theliDangXet.className === "") {
        theliDangXet.className = "checked";
      } else {
        theliDangXet.className = "";
      }
    });
    // nhấn vào nút X thì xóa phần tử
    theliDangXet.children[0].addEventListener("click", function () {
      theliDangXet.remove();
    });
  }
}
function newElement() {
  let theInput = document.getElementById("myInput").value;
  let ul = document.getElementById("myUL");
  let theLiMoi = document.createElement("li");
  theLiMoi.innerHTML = theInput;
  theLiMoi.addEventListener("click", function () {
    theLiMoi.classList.toggle("checked");
  });
  ul.appendChild(theLiMoi);
  let nutX = document.createElement("span");
  nutX.innerHTML = "X";
  nutX.classList = "close";
  nutX.addEventListener("click", function () {
    theLiMoi.remove();
  });
  theLiMoi.appendChild(nutX);
}

init();
