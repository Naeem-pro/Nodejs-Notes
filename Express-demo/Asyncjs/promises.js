//callback results in callback hell. nested functions call . Inorder to avoid this problem we use the promises

const p = new Promise((resolve, reject) => {
  resolve(1);
});

p.then((result) => console.log(`Result : ${result}`));

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log("Your task has been completed/resolved");
        resolve();
      } else {
        console.log("Sorry,your task has not been resolved");
        reject("Sorry,not fullfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("Thanks for resolving");
  })
  .catch(function () {
    console.log("very bad....");
  });

//promises are used to avoid callback hells, let's replace callback with promises

function number(number) {
  let error;
  return new Promise((resolve, reject) => {
    if (number > 0) {
      if (number % 2 == 0) {
        error = false;
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}

function message() {
  console.log("The number you enter is positive and even");
}

number(4)
  .then(() => {
    message();
  })
  .catch(() => {
    console.log("Sorry");
  });

const students = [
  { name: "student1", marks: 10 },
  { name: "student2", marks: 11 },
];

function enrollStudents(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      students.push(student);
      console.log("New student has been added successfully");
      let error = false;
      if (!error) {
        resolve("yes");
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudents() {
  setTimeout(() => {
    students.forEach((student) => {
      console.log(`${student.name} ${student.marks}`);
    });
  }, 5000);
}

console.log("Using promises");
let student = { name: "student3", marks: 12 };
enrollStudents(student)
  .then(function (message) {
    getStudents();
  })
  .catch(function () {
    console.log("There is an error, student data is not stored in database");
  });
