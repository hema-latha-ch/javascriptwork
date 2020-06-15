let student = {
    firstname: 'johnson',
    lastname: 'county',
    age: 40,
    height: 170,
    weight: 180,
    education: 'graduate',
    studentInformation: function(){
        return this.firstname + '\n' + this.lastname + '\n' + this.age + '\n' + this.height + '\n' + this.weight + '\n' + this.education;
    }
};
console.log(student.studentInformation());