function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  const grade = 0; // private proparity

    this.setGrade = function (grade) { // setter method
        if (grade == 'A' || grade == 'F') {
            this.grade = grade;
        }
        else {
            console.log("Grade must be A or F.");
        }
    }
  this.getGrade= function() {  
    return this.grade;
  }
  this.introduce = function () {
   console.log(
       `Hi, my name is ${this.name}, I’m  ${
           this.age
       } years old and I’m in grade ${this.getGrade()}`
   );
  };
}

const student = new Student("Noor", 20, "F");
student.introduce();
student.setGrade("A"); //test
student.introduce();
