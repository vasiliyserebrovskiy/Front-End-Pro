import { useState } from "react";
import PlanetOption from "./option";

export const SpaceMissionForm = () => {
  // const [fullName, setFullName] = useState<string | undefined>(undefined);
  const [fullName, setFullName] = useState<string>("");
  const [planet, setPlanet] = useState<string>(PlanetOption.MARS);

  return (
    <div>
      <h2>Space Mission</h2>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />

      <select
        name=""
        id=""
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value={PlanetOption.MARS}>{PlanetOption.MARS}</option>
        <option value={PlanetOption.VENUS}>{PlanetOption.VENUS}</option>
        <option value={PlanetOption.JUPITER}>{PlanetOption.JUPITER}</option>
        <option value={PlanetOption.SATURN}>{PlanetOption.SATURN}</option>
      </select>

      {fullName ? (
        <p>
          🧑‍🚀 Astronaut {fullName} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
};
