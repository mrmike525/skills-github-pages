const App = () => (
  <div>
    <Animal emoji="🐔" name="Stevie Chicks" species="Silkie Chicken" />
    <Animal emoji="🦊" name="Patrick" species="Red Fox" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
