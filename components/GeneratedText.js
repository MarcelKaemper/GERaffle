import styles from "./GeneratedText.module.css";

export default function GeneratedText(props) {
  return (
    <div className={styles.textWrapper}>
      <p>Congratulations 🥳🥳🥳 to {props.winner}</p>
      <p>
        Because you completed 64 stones in GE you were entered into our GE
        raffle and you have been selected by a random name picking software to
        receive {props.prize} Fps!!! 🥰🤗.
      </p>
      <p>Your GE raffle Sponsors are the {props.sponsors}.</p>
      <p>
        Please post your Arc below to receive your reward. Sponsors, after you
        have paid the BIG winner, please leave the thread.
      </p>
      <p>Congratulations again and keep up the good work! 👏👏👏</p>
    </div>
  );
}
