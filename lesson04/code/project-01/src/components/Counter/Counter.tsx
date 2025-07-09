import { useState } from "react";
import styles from "./Counter.module.css";
export const Counter = () => {
  const initialValue = 0;
  const [counter, setCounter] = useState<number>(initialValue);
  // Хук для для работы с состоянием. Можем создавать состояние, менять его и позволяет ререндерить компонент, при изменении его состояния.
  // Возвращает кортеж.
  // state == local State - состояние
  //  setter fucntion - функция сеттер
  function handlePLus() {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
  }
  function handleReset() {
    setCounter(initialValue);
  }
  return (
    <div className={styles.mainDiv}>
      <h2>Counter: {counter}</h2>

      <button
        type="button"
        onClick={handleMinus}
        className={styles.handleMinus}
      >
        -1
      </button>

      <button
        type="button"
        onClick={handleReset}
        className={styles.handleReset}
      >
        Reset
      </button>

      <button type="button" onClick={handlePLus} className={styles.handlePlus}>
        +1
      </button>
    </div>
  );
};
