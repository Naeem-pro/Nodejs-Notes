/*The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.
 */
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from database");
    callback({ id: id, name: "naeem" });
  }, 2000);
}

function user(user) {
  console.log("User", user); //here user parameter is a refrence to the user() function
}

console.log("Before");
getUser(1, user);
console.log("After");
