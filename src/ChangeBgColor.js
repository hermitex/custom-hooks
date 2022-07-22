import useRandomBgColor from "./useRandomBgColor";

function ChangeBgColor() {
  const [color, geneteRandomColor] = useRandomBgColor();

  function handleClick(){
    geneteRandomColor()
  }

  return (
    <div
      style={{ width: 100 + "vw", height: 100 + "vh", background: color }}
    >

        <button onClick={handleClick}>Change Bg Color</button>
    </div>
  );
}

export default ChangeBgColor;
