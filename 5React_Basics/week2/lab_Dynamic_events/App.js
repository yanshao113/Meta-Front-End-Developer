function App() {
  function handleClick() {
    let randonNum = Math.floor(Math.random() * 3) + 1;
    console.log(randonNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randonNum}, Your guess:${userInput}`);
  }
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
