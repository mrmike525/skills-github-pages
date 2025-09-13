/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let name = "Michael Lange";
let age = 42;
let studyField = "Front-End Software Developer";

const participant = {
    name,
    age,
    studyField
};
/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const displayInfo = {...participant,
    display(){
        return `${this.name}, ${this.age}, ${this.studyField}`
    }
}
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const displayInfoArrow = {
    ...participant,
    
    displayInfoArrow: () => 
        {
            console.log(`${this.name}, ${this.age}, ${this.studyField}`)
}
}

displayInfoArrow.displayInfoArrow();
/*
 * Observations:
 * TODO: Explain here.
The arrow function does not have it's own this context, so it cannot access
the participant object properties using this. 
it inherits this from the enclosing scope, which would be global, leading to undefined values
*/

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object 
// and returns a new object with that property dynamically set.

function updateParticipantInfo(participant, key, value){
    return {
        ...participant,
        [key]: value
    };
}

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Quantum Computing Study");
console.log(updatedParticipant);