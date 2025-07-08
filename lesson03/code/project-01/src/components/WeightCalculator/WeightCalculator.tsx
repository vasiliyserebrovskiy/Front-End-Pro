import { useState } from "react";

export default function WeightCalculator() {
  //   type Gender = "male" | "female";
  const [weight, setWeight] = useState<string>("60");
  const [height, setHeight] = useState<string>("170");
  const [gender, setGender] = useState<string>("female");
  const [message, setMessage] = useState<string>("");

  const calculateIdealWeight = () => {
    let idealWeight = 0;
    if (gender === "female") {
      idealWeight = (Number(height) - 110) * 1.15;
    } else {
      idealWeight = (Number(height) - 100) * 1.15;
    }
    setMessage(
      `Your ideal weight is ${idealWeight}. And you actual weight is: ${weight}`
    );
  };
  return (
    <div>
      <h2>WeightCalculator</h2>
      <label htmlFor="">
        Weight:
        <input
          type="text"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </label>

      <label htmlFor="">
        Height:
        <input
          type="text"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>
      <label htmlFor="">
        Gender:
        <select
          name="gender"
          onChange={(event) => setGender(event.target.value)}
          value={gender}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>

      <button type="button" onClick={calculateIdealWeight}>
        Calculate ideal weight
      </button>
      <div>{message}</div>
    </div>
  );
}
