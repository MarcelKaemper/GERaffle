import { useEffect, useState } from "react";
import GeneratedText from "./GeneratedText";

export default function RaffleResult(props) {
  const [raffleResult, setRaffleResult] = useState();
  const [name, setName] = useState();
  const [prize, setPrize] = useState();
  const [text, setText] = useState();
  const [sponsors, setSponsors] = useState();

  const raffle = () => {
    console.log(setRaffleResult);
    setRaffleResult(
      Math.round(Math.random() * (props.maxVal - props.minVal) + props.minVal)
    );
  };

  useEffect(() => {
    if (name && prize && sponsors) {
      setText(
        <GeneratedText winner={name} prize={prize} sponsors={sponsors} />
      );
    }
  }, [prize, name, sponsors]);

  return (
    <>
      <br />
      <input type="button" onClick={raffle} value="Raffle" />
      <br />
      {raffleResult && (
        <>
          <span>Raffle Result: {raffleResult}</span>
          <br />
          <label htmlFor="enterName">Name:</label>
          <input
            type="text"
            id="enterName"
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label htmlFor="enterPrize">Prize:</label>
          <input
            type="number"
            id="enterPrize"
            onChange={(event) => setPrize(event.target.value)}
          />
          <br />
          <label htmlFor="enterSponsors">Sponsors:</label>
          <input
            type="text"
            id="enterSponsors"
            onChange={(event) => setSponsors(event.target.value)}
          />
          <br />
          {text && <>{text}</>}
        </>
      )}
      <br />
    </>
  );
}
