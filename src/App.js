import React, { Component } from "react";

function Food(props) {
  return <h1>I like {props.food}</h1>;
}

const foodIlike = [
  { id: 1, name: "kimchi" },
  { id: 2, name: "kimbab" },
  { id: 3, name: "ramen" },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodIlike.map((dish) => (
        <Food key={dish.id} food={dish.name} />
      ))}
    </div>
  );
}

export default App;
