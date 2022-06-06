function test() {
    console.log(this);
}
let student = {
    firstName: 'Bao',
    lastName: 'Vu',

    // methods
    demo: function () {
        console.log(this);
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    getInfo: function (math, english) {
        return this.firstName + ' ' + this.lastName + ', ' + math + ', ' + english;
    }
};

let student2 = {
    firstName: 'Ngoc',
    lastName: 'Nguyen',
}

let student3 = {
    firstName: 'Gao',
    lastName: 'Vu',
}

