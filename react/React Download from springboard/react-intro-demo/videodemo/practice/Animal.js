const Animal = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Emoji: {props.emoji}</h1>
      <h3>Name: {props.name}</h3>
      <h3>Species: {props.species}</h3>
    </div>
  );
};
