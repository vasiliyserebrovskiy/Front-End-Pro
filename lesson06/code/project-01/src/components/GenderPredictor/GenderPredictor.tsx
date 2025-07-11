import { useState } from "react";

interface NameInfo {
  name: string;
  gender: string;
  country: string;
  probability: number;
  remaining_credits: number;
}

// сonst key = import.meta.env.VITE_NAME_OF_THE_VARIABLE;

export const GenderPredictor = () => {
  const [name, setName] = useState<string>("Fred");
  const [nameInfo, setNameInfo] = useState<NameInfo | undefined>(undefined);

  function handleRevealGender() {
    fetchGender(name);
  }

  async function fetchGender(name: string) {
    const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
    // const res = await fetch(`https://api.genderapi.io/api/?key=${key}&name=${name}`);
    const resObj = await res.json();
    setNameInfo(resObj);
  }

  return (
    <div>
      <h2>Gender Predictor</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="button" onClick={handleRevealGender}>
        Reveal gender
      </button>

      {nameInfo ? (
        <div>
          <span>Name: {nameInfo.name}</span>
          <span>Gender: {nameInfo.gender}</span>
          <span>Country: {nameInfo.country}</span>
          <span>Probability: {nameInfo.probability}</span>
          <span>Remaining credits: {nameInfo.remaining_credits}</span>
        </div>
      ) : null}
    </div>
  );
};
