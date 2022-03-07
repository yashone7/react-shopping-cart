import { useState, useEffect } from "react";
import "./style.css";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState([
    { id: "1", count: 0, price: 40 },
    { id: "2", count: 0, price: 65 },
    { id: "3", count: 0, price: 50 },
  ]);

  const [netPrice, setNetPrice] = useState(0);

  useEffect(() => {
    const _counter = [...counter];
    const totalSum = _counter.reduce((acc, currVal) => {
      return acc + currVal.count * currVal.price;
    }, 0);
    setNetPrice(totalSum);
  }, [counter]);

  // const [count, setCount] = useState(1);

  // because arrays and objects are reference types
  const handleDecrement = (event, id) => {
    let _counter = [...counter]; // clone this array here
    const index = _counter.findIndex((e) => e.id === id);
    let obj = _counter[index];
    obj.count--;
    _counter[index] = obj;
    setCounter(_counter);
  };

  const handleIncrement = (event, id) => {
    let _counter = [...counter]; // clone this array here
    const index = _counter.findIndex((e) => e.id === id);
    let obj = _counter[index];
    obj.count++;
    _counter[index] = obj;
    setCounter(_counter);
  };

  console.log(counter);

  return (
    <div className="container">
      {counter.map((item) => (
        <Counter
          key={item.id}
          count={item.count}
          onIncrement={(e) => handleIncrement(e, item.id)}
          onDecrement={(e) => handleDecrement(e, item.id)}
          sum={item.count * item.price}
        />
      ))}
      <div className="m-5">net price: {netPrice}</div>
    </div>
  );
}

export default App;
