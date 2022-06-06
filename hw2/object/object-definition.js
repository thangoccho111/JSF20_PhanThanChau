// Using object literal
let student = {
    // properties
    id: 1,
    firstName: 'Bao',
    lastName: 'Vu',
    gender: true,
    score: 7.5,



    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log(student.id)