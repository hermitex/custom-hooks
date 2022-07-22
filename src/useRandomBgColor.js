import { useState, useEffect } from "react";
function useRandomBgColor() {
  const [color, setColor] = useState("");

  function geneteRandomColor() {
    let randomColor = "#" + Math.random().toString(16).substring(10); // eff2ef
    setColor(randomColor);
  }

  useEffect(() => {
    geneteRandomColor();
  }, []);

  return [color, geneteRandomColor];
}

export default useRandomBgColor;
