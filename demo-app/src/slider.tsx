import { useState, useEffect } from "react";

export function Slider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  useEffect(() => {
    const handler = setTimeout(function () {
      console.log("Slider stopped at:", sliderValue);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [sliderValue]);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onInput={handleSliderChange}
      />
      <p>Slider Value: {sliderValue}</p>
    </div>
  );
}
