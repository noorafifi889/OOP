function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  const _grade = ""; // private proparity

  this.setGrade = function (grade) {
    // setter method
    if (grade == "A" || grade == "F") {
      this._grade = grade;
    } else {
      console.log("Grade must be A or F.");
    }
  };
  this.getGrade = function () {
    return this._grade;
  };
  this.setGrade(grade); // add value to setter method
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m  ${
      this.age
    } years old and I’m in grade ${this.getGrade()}`
  );
};

const student = new Student("Noor", 20, "F");
student.introduce();
student.setGrade("A"); //test
student.introduce();
// this.setGrade('F');
