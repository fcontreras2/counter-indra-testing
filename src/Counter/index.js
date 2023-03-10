import { useState } from "react";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>App Counter</h1>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter+1)}>Incrementar</button>
      <button onClick={() => setCounter(counter-1)}>Decrementar</button>
      <button onClick={() => setCounter(0)}>Reiniciar</button>
    </>
  );
}

export default Counter;