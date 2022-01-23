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
  { name: "Naeem1", profession: "student" },
];
// console.log(students[0].name); //Access the name of first object of array means of zero index

// for (let index = 0; index < students.length; index++) {
//   console.log(students[index].name + " " + students[index].profession);
// }

function enrollStudents() {
  setTimeout(() => {
    console.log("enroll functions");
  }, 2000);
}

enrollStudents();
