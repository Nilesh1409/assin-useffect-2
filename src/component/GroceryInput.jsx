import React from "react";

let Input = ({ handleAdd }) => {
  let [inputData, setInputData] = React.useState("");
  console.log(inputData);
  return (
    <>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => handleAdd({ inputData })}>ADD</button>
    </>
  );
};

export default Input;
