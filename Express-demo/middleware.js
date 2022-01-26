const express = require("express");
const app = express();

//******************** Application Level Middleware**********************
// Application level middleware will be applicable to each and every route in our application
// Let's create an application level middleware
//In middleware function, we are confirming that user has provide age and his age is greater than 18.
//Then user will be able to access the pages else not. These conditions will be applicable to every route/request in application

const FilterReq = (req, res, next) => {
  //this is middle ware function
  if (!req.query.age) {
    //build certain logic so that user can access the desired page
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};

app.use(FilterReq); //Now use the middleware function

app.get("/", (req, res) => {
  res.send("This is home page");
  res.end();
});

app.get("/users", (req, res) => {
  res.send("This is users page");
});

app.listen(3000, () => console.log(`Listening on port 3000....`));
