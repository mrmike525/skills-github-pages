function InventoryItem(props) {
  return (
    <div>
      {props.name.map((item) => {
        // define your alert message using normal JS first
        let lowStockMessage = "";
        if (item.quantity <= 5) {
          lowStockMessage = `⚠️ Low stock: ${item.quantity} remaining.`;
        }

        return (
          <div key={item.name}>
            <h2>
              {item.name} ({item.type})
            </h2>
            <p>
              Quantity: {item.quantity} &nbsp; Price: ${item.price}
            </p>

            {/* ✅ Conditional render */}
            {lowStockMessage && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                {lowStockMessage}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// props = {
//   name: [
//     { name: "Oxygen Tank", type: "Equipment", quantity: 3, price: 150.0 }
//   ]
// };

// props.name.map((item) => {

// props = object with key named name and then array. since item is param, item becomes name of array, inside array we attach key name to item to pull that value
// props.name.item --> item.name, item.type, item.quantity, item.price

// I'm trying to understand the structure of bringing this array, with objects inside called to a component.. then i run map on it.. given the above, is my description accurate?... i'm trying to understand the flow

// Step 3: When this happens inside a component

// When you pass this in JSX:

// <InventoryItem name={inventoryItems} />

// Then inside your component:

// function InventoryItem(props) {
//   // props = { name: inventoryItems }
//   props.name.map((item) => (
//     <p>{item.name}</p>
//   ));
// }

// ✅ props.name → the array
// ✅ item → each object inside the array
// ✅ item.name → the value of that object’s name key

// 🧭 TL;DR Flow summary
// Concept	What it is
// props	An object passed into the component
// props.name	The array you passed under the key “name”
// .map()	Loops through that array
// item	The temporary variable representing each object
// item.name etc.	Accessing properties of that object

// You’ve basically got it!
// Your description — “props is an object with a key named name and then an array” — ✅ absolutely right.
// The only tweak is: .map() doesn’t attach item to props; it extracts each object in the array into a temporary variable.

// Perfect 😎 — here’s your visual flow diagram of what’s happening when your component receives props and runs .map().

// 🧩 Starting data

// You passed this to your component:

// <InventoryItem name={inventoryItems} />

// and inventoryItems is:

// [
//   { name: "Oxygen Tank", type: "Equipment", quantity: 3, price: 150.0 }
// ]

// So inside the component, React gives you:

// props
//  └── name  →  [  { name: "Oxygen Tank", type: "Equipment", quantity: 3, price: 150.0 }  ]

// 🔁 When you run .map()
// props.name.map((item) => { ... })

// Here’s the step-by-step visualization:

// props ─┐
//        │
//        └── name (array)
//             │
//             │   ┌────────────────────────────────────────┐
//             └──▶│ .map() starts looping over the array   │
//                 └────────────────────────────────────────┘
//                        │
//                        ▼
//              ┌────────────────────────────┐
//              │ item =                    │
//              │ {                         │
//              │   name: "Oxygen Tank",    │
//              │   type: "Equipment",      │
//              │   quantity: 3,            │
//              │   price: 150.0            │
//              │ }                         │
//              └────────────────────────────┘
//                        │
//                        ▼
//                You can now use:
//                item.name        → "Oxygen Tank"
//                item.type        → "Equipment"
//                item.quantity    → 3
//                item.price       → 150.0
