/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the 
// console.
let destination = 'Ancient Egypt';
console.log(`"Original" ${destination}`);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = 'Medieval Europe';
console.log(`"New" ${destination}`);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another 
// value and observe and explain what happens as a comment.

const travelDate = '2024-03-15';
try {
travelDate = '2024-03-16';
} catch (error) {
 console.log(error)
}
/*
 * Observations:
 * TODO: Explain here.
 * in the console a "TypeError: Assignment to constant variable" is thrown
 * constants (strings) cannot be reassigned, only things like objects and arrays can be altered)
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare 
// `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
// console.log(timeMachineModel);
console.log(timeMachineModel)
var timeMachineModel = "T-800";
// console.log(timeMachineModel)

/*
 * Observations:
 * TODO: Explain here.
The console logs "undefined as this is the value of timeMachineModel because it has not been assigned yet, js knows the variable exists it just doesnt
have a value yet " 
*/ 
