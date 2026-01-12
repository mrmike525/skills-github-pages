const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "yellow"]} />
    <Animal
      emoji="🐔"
      name="Stevie Chicks"
      species="Silkie Chicken"
      age={17000}
      isFriendly={true}
      obj={{ age: 4 }}
    />
    <Animal emoji="🦊" name="Patrick" species="Red Fox" />
    <TodoList todos={["walk chickens", "feed chickens", "eat chickens"]} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
