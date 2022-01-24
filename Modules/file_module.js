//************************** FILE MODULE **************************
// File module helps to work with the file system. Create a file, write in file, read from file etc.
// let's load the file module.

const fs = require("fs");
// //synchronious approch is not so good. Hence asynchronius approach is used to meet the request. First parameter is file name and second parameter is data which we want to write in that file
// fs.writeFileSync(
//   "read.text", //name of file
//   "writeFileSync writes in file. If file is not found then firstly it creates a file and then writes into that file" //data
// );

// fs.writeFileSync("read.text", "new data"); //Again fire the same line of code, now the text of read.text file is override.

// //Inoder to avoid the text overriding, append function is used.
// fs.appendFileSync("read.text", " Hello world"); //now the existing data will not overwrite

// const data = fs.readFileSync("read.text"); // Read data from read.text file
// console.log("Buffer data :", data); //whenever we read from a file, we get a buffer data
// console.log("Data in string  :", data.toString()); //to convert buffer data into strig, toString() function is used

//************************************ Asynchronus File System ***************************************
//callback function is necessary

// fs.writeFile("async.text", "Asynchronus file system", (err) => {
//   //create the file and add text in that file
//   console.log("file has been created");
// });

fs.readFile("async.text", "utf8", (err, data) => {
  //read data from file. uft8 is used to avoid buffer. At one time, either the value of err or data is null.
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
