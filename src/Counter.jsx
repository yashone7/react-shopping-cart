import React from "react";

function Counter({ count, onDecrement, onIncrement, sum }) {
  //   const { myCount } = props;
  return (
    <div className="counter-container is-flex is-justify-content-space-evenly is-align-items-center mt-5">
      <button
        className="button is-light is-danger"
        disabled={count < 1}
        onClick={onDecrement}
      >
        <p className="is-size-3 has-text-weight-bold">-</p>
      </button>

      <p>{count}</p>
      <button className="button is-light is-info" onClick={onIncrement}>
        <p className="is-size-3 has-text-weight-bold">+</p>
      </button>
      <p>total sum: {sum}</p>
    </div>
  );
}

export default Counter;
