
class person{
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        let FullName = `${this.firstName} ${this.lastName}`;
        //this it the same as; this.firstName + " " + this.lastName

        return FullName

    }
}
//student inherits, or extends, the person class
class Student extends person{
    constructor(firstName, lastName, grade) {
    super(firstName, lastName);
     this.grade = grade;   
    }
}

let p1 = new person("kai", "lucas")
let s1 = new Student ("noah", "king")

p1.firstName = "joe";
console.log(p1.getFullName());
console.log(s1.getFullName());
