/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of 
// animal names.

function animalSightings(...rest){
// console.log(one);

rest.forEach(animal => {
	console.log(animal);
});
}

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats]

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in 
// population or a change in habitat.
const newRhinoStatus = {
	...rhinoStatus,
	population: 480
};



/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. 
// Observe and explain how changes to nested properties affect both the original and the copied object.
let lionProfileCopy = {
	...lionProfile,
	genetics: "Large Feline"
}
console.log(lionProfile, lionProfileCopy);
/*
 * Observations:
 * TODO: Explain here.
 * The original object is unaffected because the copy is a shallow copy and therefore
 * the copy is assigned a new reference in memory
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the 
// ecosystem's health, including water quality and food supply. Perform a 
// shallow copy and modify a nested property. Observe and explain how 
// changes to nested properties affect both the original and the copied object.

let ecosystemHealthModified = {
	...ecosystemHealth,
	foodSupply: {...ecosystemHealth.foodSupply, carnivores: "More Needed"}};
	console.log(ecosystemHealth)
	console.log(ecosystemHealthModified)

// const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plentiful"}};
// console.log("Original Ecosystem Health:", ecosystemHealth);
// console.log("Updated Ecosystem Health:", updatedEcosystemHealth);

/*
* Observations:
 * TODO: Explain here.
The nested object is updated in the orignal object and the new object, this is because
the nested part of the object, from the shallow copy contains the same reference 
in memory as the original, and therefore any changes are also reflected in the orignal; 
*/
