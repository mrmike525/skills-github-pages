const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];


let x = mythicalCreatures.find(function(water){
    return water.type === 'Water';
	
});
console.log(`The ${x.name} is the first Creature in the Array that is of the Water type. `)


const griffinIndex = mythicalCreatures.findIndex(function(griffin){
    return griffin.name === 'Griffin'
})
console.log(`The Griffin is at Index ${griffinIndex}`)

let enchantedForest = mythicalCreatures.find(function(enchantedForest){
	return enchantedForest.lastSeen === 'Enchanted Forest';
})

console.log(`The ${enchantedForest.name} was last seen in the Enchanted Forest` )