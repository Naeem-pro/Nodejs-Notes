//************************************* Functions in node js ************************************
//Calling the functions is called fire the function

// function intro() {
//   console.log("intro function is being fired");
//   console.log("Hello world");
// }

// intro(); //fire the function. In node js calling the function is called fire the function

// var arrowFunction = () => {
//   console.log("Arrow function is being fired");
//   console.log("Arrow functions");
// };
// arrowFunction();

//******************************************Callback functions*************************************

const students = [
  { name: "Naeem", profession: "stundent" },
  { name: "Naeem1", profession: "student1" },
];

// function enrollStudents(student) {
//   setTimeout(() => {
//     students.push(student); //This line of code will execute after 2 seconds
//     console.log("New student has been added successfully");
//   }, 2000);
// }

// function getStudents() {
//   setTimeout(() => {
//     students.forEach((student, index) => {
//       //This block of code will execute after 1 seconds
//       console.log(student.name);
//     });
//   }, 1000);
// }

// enrollStudents({ name: "Naeem3", profession: "student" });
// getStudents();

//Before using callback function, getStudents() was executed earlier than enrollStudents() beacuse the time to get execute for getStudents() is 1 second and and for enrollStudents() 2 seconds. As a result the data of existing students printed first and new student enroll later. So the name of new enrolled student is not accessible. Uncomment the above code(functions) and check result
//Inorder to solve this problem we use callback fuctions();
//Let's use callback function, above code will look like

function enrollStudents(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log("New student has been added successfully");
    callback(); //In this case we are saying that after adding new student, fire the callback functions and execute that function
  }, 3000);
}

function getStudents() {
  setTimeout(() => {
    students.forEach((student, index) => {
      //This block of code will execute after 1 seconds
      console.log(student.name + " " + student.profession);
    });
  }, 1000);
}

console.log("Using callback function");
enrollStudents({ name: "Naeem2", profession: "student2" }, getStudents);
