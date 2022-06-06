// Using object literal
let student = {
    // properties
    id: 1,
    firstName: 'Tri',
    lastName: 'Tran',
    gender: true,
    score: 7.5,



    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

document.getElementById();


let getFullName2 = function (stu) {
    return stu.firstName + ' ' + stu.lastName;
}

function getFullName3(stu) {
    return stu.firstName + ' ' + stu.lastName;
}

getFullName2();
// console.log(student.getFullName)

let k = student.getFullName();
console.log(k);