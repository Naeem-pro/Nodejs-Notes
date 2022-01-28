const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi"); //joi is used in javascipt for data validations
const { parse } = require("dotenv");
const express = require("express"); //require function returns a function, call express
const app = express(); //express() function will return an object of type express, store in app ,now app has become a function and has certain method

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));
app.set("view engine", "pug");
app.set("views", "./views");

const courses = [
  //Array of courses to practice express.
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.render("index", { title: "My Express-App", message: "Hello" });
  // res.send("Hello world !!!!");
}); //Parameters names in callback functions can be changed. Run below commented code.

// app.get("/", (clientRequest, clientResponse) => {
//   clientResponse.send("hello world");
// });

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id)); //check whether course with given id exist or not, return boolean value
  if (!course) {
    return res
      .status(404)
      .send(`The course with id ${req.params.id} does node exit`); //if course not exist show errors
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  //create a new course
  const { error } = validateCourse(req.body);
  if (error) {
    //400 means bad request
    res.status(400).send(error.details[0].message);
    return;
  }
  const course = {
    //create a new course object
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course); //add newly created course into courses array
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //update the existing course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res
      .status(404)
      .send(`The course with id ${req.params.id} does node exit`);
  }
  const { error } = validateCourse(req.body);
  if (error) {
    //400 means bad request
    return res.status(400).send(error.details[0].message);
  }
  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res
      .status(404)
      .send(`The course with id ${req.params.id} does node exit`);
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateCourse(course) {
  //function to validate the input
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));

