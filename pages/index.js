import { useState } from "react";
import RaffleResult from "../components/RaffleResult";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();

  return (
    <div id="contentWrapper">
      <h1>GE Raffle Generator</h1>
      <label htmlFor="minNum">Min: </label>
      <input
        type="text"
        onChange={(event) => setMinVal(event.target.value)}
        id="minNum"
      />
      <br />
      <label htmlFor="maxNum">Max: </label>
      <input
        type="text"
        onChange={(event) => setMaxVal(event.target.value)}
        id="maxNum"
      />
      <br />
      <RaffleResult minVal={minVal} maxVal={maxVal} />
      <br />
      <RaffleResult minVal={minVal} maxVal={maxVal} />
      <br />
      <RaffleResult minVal={minVal} maxVal={maxVal} />
      <br />
    </div>
  );
}
