import React from "react";

export default function Plust({ count, setCounter }) {
  function handlePlust() {
    console.log(count);
    if (!count.find((input) => input.id == 3)) {
      let result = count[0].value + count[1].value;
      count.push({ id: 3, result: result })
      setCounter([...count]);
    } else {
      let only_inputs = count.filter((input) => input.id != 3);
      console.log(only_inputs);
      let result = only_inputs[0].value + only_inputs[1].value;
      console.log(result);
      setCounter([...only_inputs, { id: 3, result: result }]);
      console.log(count);
    }
  }
  return (
    <>
      <button onClick={handlePlust}>Plust</button>
    </>
  );
}
