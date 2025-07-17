import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export const ToggleCard = () => {
  const [isBlue, setIsBlue] = useState(false);
  return (
    <div className="border bg-amber-200 m-4">
      <h2>Toggle Card</h2>
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
    </div>
  );
};
