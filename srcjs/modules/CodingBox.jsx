/* eslint-disable react/prop-types */
import { useState } from "react";
import BarChart from "./BarChart";

export default function CodingBox({ data, token, fill, fillBackground }) {
  const min = 1;
  const max = data.length;
  const [currentNumber, setCurrentNumber] = useState(min);

  // Debounce effect
  function handleNext() {
    if (currentNumber < max) {
      setCurrentNumber((s) => s + 1);
    }
  }

  function handlePrevious() {
    if (currentNumber > min) {
      setCurrentNumber((s) => s - 1);
    }
  }

  function handleInput(e) {
    const newNumber = Number(e.target.value);

    if (newNumber >= min && newNumber <= max) {
      setCurrentNumber(newNumber);
    }
    if (newNumber < min) {
      setCurrentNumber(min);
    }

    if (newNumber > max) {
      setCurrentNumber(max);
    }
  }

  const {
    login_name,
    login_code,
    booklet_id,
    unit_key,
    page,
    // Falls man n nicht verwenden möchte (nicht zur Verfügung hat)
    n = 1,
  } = data[currentNumber - 1];

  const baseLink = `https://www.iqb-kodierbox.de/#/replay/${login_name}@${login_code}@${booklet_id}/${unit_key}/${page}`;

  // Für den Balken
  const totalN = data.reduce((acc, curr) => (curr.n ?? 1) + acc, 0);
  const currentN = data
    .slice(0, currentNumber)
    .reduce((acc, curr) => (curr.n ?? 1) + acc, 0);

  return (
    <div>
      {/* Menu */}
      <BarChart
        fill={fill}
        fillBackground={fillBackground}
        min={min}
        max={totalN}
        frequency={currentN}
        height={10}
        width={"100%"}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <button onClick={handlePrevious}>Zurück</button>
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <input
            type="number"
            value={currentNumber}
            onChange={handleInput}
            min={min}
            max={max}
            style={{
              textAlign: "right",
              width: "80px", // Fixed width for input
              margin: "0 10px",
            }}
          />
          <span
            style={{
              display: "inline-block",
              marginRight: "20px",
              textAlign: "left",
            }}
          >
            von <b>{max}</b>
          </span>
          <code
            style={{
              display: "inline-block",
              width: "50px",
              textAlign: "left",
            }}
          >
            {login_code}
          </code>
          <span
            style={{
              display: "inline-block",
              width: "70px",
              textAlign: "left",
            }}
          >
            {n != 1 ? (
              <>
                (<code>{n}</code> Fälle)
              </>
            ) : null}
          </span>
        </div>
        <button onClick={handleNext}>Weiter</button>
      </div>

      {/* Centered GeoGebra Element */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px", // Adds spacing between menu and GeoGebra
        }}
      >
        <div className="App">
          <a
            href={`${baseLink}?auth=${token}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <b>Kodierbox</b>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
