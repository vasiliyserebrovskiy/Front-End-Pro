import { cn } from "clsx-for-tailwind";
import { useCallback, useMemo, useState } from "react";
import AptonKid from "./AptonKid";
import Frederika from "./Frederika";

function getBall() {
  return { title: "Ball" };
}

export const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [isBlue, setIsBlue] = useState(false);
  console.log("Parent rendered!");

  // используем для сохранения результата вызова функции
  const paintGiraffe = useCallback(() => {
    console.log(`Picture of giraffe ${isBlue}`);
  }, [isBlue]);

  //Когда происходит ререндер компонента?
  // - Когда меняем стейт компонента? - да, происходит
  // - При рендере родителя вызывается рендер ребенка

  // используем useMemo - для запоминания РЕЗУЛЬТАТА выполнения функции
  const ball = useMemo(getBall, []); // функция, вызываемая для перерасчета данных. То что в [] в какой момент надо пересчитывать(как в useEffect)

  return (
    <div className="border bg-amber-200 m-4">
      <h2>Parent</h2>
      <div
        className={cn(
          "min-h-10 w-10 rounded shadow m-4",
          isBlue ? "bg-blue-400" : "bg-yellow-400"
        )}
      ></div>
      <button
        type="button"
        onClick={() => setIsBlue((prev) => !prev)}
        className="border py-2 px-4 m-4 rounded-xl"
      >
        Change box color
      </button>
      <p>Counter: {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <AptonKid toy={ball} paint={paintGiraffe} />
      <Frederika />
    </div>
  );
};
