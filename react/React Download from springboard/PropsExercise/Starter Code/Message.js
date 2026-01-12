function Message(props) {
  return (
    <div>
      {props.quantity.map((item) => (
        <p>
          {"Quantity" + " " + item.quantity} {"Price" + " $" + item.price}
        </p>
      ))}
    </div>
  );
}
