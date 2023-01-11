import { useState } from "react";
import Values from "values.js";
import SingleColor from "./Components/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#F1C40F").all(5));

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container" onSubmit={handleSubmit}>
        <h3>Color Generator</h3>
        <form action="#">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ff3092"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((colorList, index) => (
          <SingleColor
            key={index}
            {...colorList}
            index={index}
            hex={colorList.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
