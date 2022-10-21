import React, { useState } from "react";
import data from "./Data/Data.json";
function App() {
  const [values, setvalues] = useState(data["Indian"]);
  let val = Object.keys(data);

  function setdata(id) {
    let mummy = data[id];

    setvalues(mummy);
    console.log(mummy);
  }

  return (
    <>
      <nav>
        <div className="nav_head">🍽️ Recipes</div>
      </nav>

      <div className="Container">
        {val.map((e, i) => {
          return (
            <button
              onClick={() => setdata(e)}
              key={i}
              className="glassmorphism"
            >
              {" "}
              {e}{" "}
            </button>
          );
        })}

        <div className="data-container">
          {values.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  return (
    <div className="glassmorphism">
      <h3> {data.name} </h3>
      <p> {data.ingredients} </p>
    </div>
  );
}

export default App;
