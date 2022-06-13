import React from "react";

let GroceryList = ({ data, handleDelete }) => {
  return (
    <>
      {data.map((item) => {
        if (item.status != true) {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>

              <button onClick={() => handleDelete(item.id)}>Detele</button>
            </div>
          );
        }
      })}
    </>
  );
};
export default GroceryList;
