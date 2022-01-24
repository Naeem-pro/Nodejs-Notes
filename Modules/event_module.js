//***********************************  Event Module **********************************************
const EventEmitter = require("events"); //EventEmitter is class
const event = new EventEmitter(); //event is on object of EventEmitter class

event.on("myName", () => {
  //Register a listener before the emit function is called
  //Register a listener
  //Listen that event
  console.log("My name is Abc");
});

event.emit("myName"); //emit is used to raise an event. emit means making noise or produce something. Produce signal in app

event.on("logging", (argument) => {
  console.log(argument.message);
});

event.emit("logging", { message: "welcome to my website" }); //passing arguments to events in object form
