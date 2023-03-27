import React, { useState, useEffect } from "react";
import Box from "./Box";
import boxes from "./boxes";
import "./style.css";

export default function Boxeshow() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  //fetching API calls
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);
  useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((response) => response.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return (
    <main>
      {squareElements}
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>Details numbered:{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Next
      </button>
    </main>
  );
}
