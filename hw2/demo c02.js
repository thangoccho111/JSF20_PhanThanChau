function xuat(stu) {
    console.log("+ ID: ", stu.id);
    console.log("+ Họ tên: ", stu.firstName + " " + stu.lastName);
    console.log(`+ Giới tính:  ${stu.gender ? "Nam" : "Nữ"}`);
    console.log(`+ Điểm:  ${stu.score}`);
}
function nhap(stu) {
    stu.id = Number(prompt("Nhập ID: "));
    stu.firstName = prompt("Nhập tên: ");
    stu.score = Number(prompt("Nhập điểm: "));
}
function congDiem(stu, k) {
    stu.score += k;
}
let studentA = {
    // properties
    id: 1,
    firstName: 'Tri',
    lastName: 'Tran',
    gender: true,
    score: 7.5,
};
let studentB = {
    // properties
    id: 2,
    firstName: 'Chau',
    lastName: 'Phan',
    gender: true,
    score: 7.5,
};
nhap(studentB);
congDiem(studentB, 1);
xuat(studentB);