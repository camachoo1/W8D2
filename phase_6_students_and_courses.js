// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.courses = [];
// }

// Student.prototype.name = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Student.prototype.enroll = function (course) {
//   if (!this.courses.includes(course)) {
//     this.courses.forEach((crs) => {
//       if (crs.conflictsWith(course)) {
//         throw `have a class already`;
//       }
//     });

//     this.courses.push(course);
//     course.addStudent(this);
//   }
// };

// Student.prototype.courseLoad = function () {
//   const courseLoad = {};

//   this.courses.forEach((course) => {
//     let dep = course.department;
//     courseLoad[dep] = courseLoad[dep] || 0;
//     courseLoad[dep] += course.credits;
//   });

//   return courseLoad;
// };

// function Course(courseName, department, numCredits, students = []) {
//   this.courseName = courseName;
//   this.department = department;
//   this.numCredits = numCredits;
//   this.students = students;
// }

// Course.prototype.addStudent = function (student) {
//   if (this.students.indexOf(student) === -1) {
//     this.students.push(student);
//     student.enroll(this);
//   }
// };

// Course.prototype.conflictsWith = function (other) {
//   return this.block !== other.block
//     ? false
//     : this.days.some((day) => other.days.indexOf(day) !== -1);
// };

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }
  name() {
    return `${this.firstName} ${this.lastName}`;
  }
  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.forEach((crs) => {
        if (crs.conflictsWith(course)) {
          throw `have a class already`;
        }
      });

      this.courses.push(course);
      course.addStudent(this);
    }
  }
  courseLoad() {
    const courseLoad = {};

    this.courses.forEach((course) => {
      let dep = course.department;
      courseLoad[dep] = courseLoad[dep] || 0;
      courseLoad[dep] += course.credits;
    });

    return courseLoad;
  }
}

class Course {
  constructor(courseName, department, numCredits) {
    this.courseName = courseName;
    this.department = department;
    this.numCredits = numCredits;
    this.students = [];
  }
  addStudent(student) {
    if (this.students.indexOf(student) === -1) {
      this.students.push(student);
      student.enroll(this);
    }
  }
  conflictsWith(other) {
    return this.block !== other.block
      ? false
      : this.days.some((day) => other.days.indexOf(day) !== -1);
  }
}
