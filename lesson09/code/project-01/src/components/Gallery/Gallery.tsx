import { cn } from "clsx-for-tailwind";
import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [isRed, setIsRed] = useState(false);

  function handleColorChange() {
    setIsRed((prev) => !prev);
  }
  return (
    <div>
      <div className="grid grid-cols-3 bg-amber-500 p-4 gap-4">
        <div className="h-24 bg-amber-50 col-span-1 rounded-2xl">1</div>
        <div className="h-24 bg-amber-50 col-span-2 opacity-70 rounded-4xl">
          2
        </div>
        <div className="h-24 bg-amber-50 col-span-2">3</div>
        <div className="h-24 bg-amber-50 col-span-1">4</div>
      </div>

      <div
        className={cn("h-24 w-24", styles.roundedCustom, {
          "bg-red-400": isRed,
          "bg-green-300": !isRed,
        })}
      >
        Box
      </div>
      <button type="button" onClick={handleColorChange}>
        Change color of box
      </button>
    </div>
  );
}
