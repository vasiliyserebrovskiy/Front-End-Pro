import { useEffect, useState } from "react";

export default function Demo() {
  const [counter, setCounter] = useState<number>(0);
  const [age, setAge] = useState<number>(30);

  useEffect(() => {
    console.log("Use effect 1 c пустым массивом зависимостей ");
    //Вызывается один раз при вызове компонента
  }, []);

  useEffect(() => {
    console.log("Use effect 2 без массива зависимостей");
    // При первом рендере компонента
    //При любом изменении на сайте, любой ререндер будет вызывать этот метод
  });

  useEffect(() => {
    console.log("Use effect 3 c указанием зависимостей");
    // При первом рендере компонента
    //При любом изменении age
  }, [age]);

  //Функция очистки в useEffect сработает при размонтировании компонента
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Click");
    }, 6000);
    // функция указанная в return вызовется в момент закрытия компонента
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Use effect</h2>
      <p>Counter : {counter}</p>
      <p>Age: {age}</p>
      <button
        type="button"
        value={counter}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +1
      </button>

      <button
        type="button"
        value={age}
        onClick={() => setAge((prev) => prev + 1)}
      >
        Age +1
      </button>
      <ul>
        <li>Для фетчинга данных</li>
        <li>Для таймеров</li>
        <li>Для статистических данных - маркетинг или аналитика</li>
      </ul>
    </div>
  );
}
