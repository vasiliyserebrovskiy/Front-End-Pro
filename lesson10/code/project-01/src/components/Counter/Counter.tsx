import styles from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <div className={styles.mainDiv}>
      <h2>Counter: {counter}</h2>

      <button type="button" onClick={decrement} className={styles.handleMinus}>
        -1
      </button>

      <button type="button" onClick={reset} className={styles.handleReset}>
        Reset
      </button>

      <button type="button" onClick={increment} className={styles.handlePlus}>
        +1
      </button>
    </div>
  );
};
