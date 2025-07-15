import { useEffect, useState } from "react";

export const AgePredictor = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [errMessage, setErrorMessage] = useState<string>("");

  const validate = (name: string): boolean => {
    if (name.length >= 3) {
      setNameErrorMessage("");
      return true;
    }
    setNameErrorMessage("Name should be at least 3 symbols long!");
    return false;
  };

  async function fetchAge(name: string) {
    try {
      const res = await fetch(`https://api.agify.io/?name=${name}`);
      if (res.status == 429) {
        throw Error("To many request.Please wait");
      }
      const obj = await res.json();
      setAge(obj.age);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  }

  useEffect(() => {
    if (validate(name)) {
      fetchAge(name);
    }
  }, [name]);

  return (
    <section>
      <h2>Age Predictor</h2>
      <p style={{ color: "red" }}>{nameErrorMessage}</p>
      {errMessage ? <p>{errMessage}</p> : null}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErrorMessage ? null : (
        <div>
          Estimated age is {age} for name {name}
        </div>
      )}
    </section>
  );
};
