//************************** PATH MODULE **************************
//Path module is used for working with files and path modules.

const path = require("path");
var pathObj = path.parse(__filename); //This method accepts single parameter path which holds the file path that would be parsed by the method. This method returns an object with the details of the path.
console.log(pathObj); //printing the whole object on console window
console.log(pathObj.root); //accessing the properties of the returning object
console.log(pathObj.name);
console.log(pathObj.ext);

//The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.
console.log(path.extname("index.html"));
// console.log(path.extname(12121)); throws a typerror if the path is not a string
