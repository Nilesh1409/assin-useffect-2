import React from "react";
import GroceryInput from "./GroceryInput";
import { v4 as uuidv4 } from "uuid";
import GroceryList from "./GroceryList";

let Grocery = () => {
  const [data, setData] = React.useState([]);

  let getData = () =>{
    fetch(`http://localhost:3002/list`)
    .then((res) => res.json())
    .then((res) => setData(res))
  }

  React.useEffect (( ) =>{
    getData();
   },[])

  let handleAdd = ({ inputData }) => {
    let paylode = {
      title: inputData,
      id: uuidv4()
    };

    fetch(`http://localhost:3002/list`,{
      method : "POST",
      body : JSON.stringify(paylode),
      headers : {
        "content-type" : "application/json"
    }
    })
    .then((res) => res.json())
    .then((res) => getData())
    
  };

  let handleDelete = (id) => {
    
    fetch(`http://localhost:3002/list/${id}`,{
      method : "DELETE",
      headers : {
        "content-type" : "application/json"
    }
    })
    .then((res) => res.json())
    .then((res) => getData())
  };

  return (
    <>
      <GroceryInput handleAdd={handleAdd} />
      <GroceryList data={data} handleDelete={handleDelete} />
    </>
  );
};

export default Grocery;
