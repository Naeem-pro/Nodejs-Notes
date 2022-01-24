//************************** OS MODULE **************************
// The os module provides operating system-related utility methods and properties. It can be accessed using:
// This module is used to get information about current operating system
// let's try some functions of os module.

const os = require("os");
var totalMemory = os.totalmem(); //totalmem() returns total memory of current system
var freeMemory = os.freemem(); //freemem() returns the free memory of current system
console.log(`Total memory of current os: ${totalMemory}`);
console.log(`Free memory of current os: ${freeMemory}`);

console.log(os.arch()); //arch() returns the operating system architecture for which node was compiled.
