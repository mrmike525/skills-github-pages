const message = (message) => {
  console.log(message);
};

const JokesMap = () => {
  const jokes = [
    {
      id: 1,
      text: "How do you comfort a JavaScript bug? You console it!",
    },
    {
      id: 2,
      text: "Why did the developer quit? Because he did't get arrays",
    },
  ];
  return jokes.map((j) => j.text);
};
