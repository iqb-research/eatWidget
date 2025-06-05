/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import Geogebra from "react-geogebra";

export default function GeoGebra({
  data,
  ggbWidth = 800,
  ggbHeight = 800,
  fill,
  fillBackground,
  id = "ggb",
}) {
  const min = 1;
  const max = data.length;
  const [currentNumber, setCurrentNumber] = useState(min);
  const [debouncedNumber, setDebouncedNumber] = useState(min);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedNumber(currentNumber);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [currentNumber]);

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

  return (
    <div>
      {/* Menu */}
      <BarChart
        fill={fill}
        fillBackground={fillBackground}
        min={min}
        max={max}
        frequency={currentNumber}
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
            {data[currentNumber - 1].id}
          </code>
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
        <Geogebra
          id={id}
          width={ggbWidth}
          // Die -58 entfernen die Höhe für den Zurückknopf
          height={ggbHeight}
          algebraInputPosition={false}
          allowStyleBar={false}
          allowUpscale={false}
          customToolBar={false}
          showToolBar={false}
          reloadOnPropChange={true} // Leverages prop changes
          showAlgebraInput={false}
          showAnimationButton={false}
          showFullscreenButton={false}
          showZoomButtons={false}
          showToolBarHelp={false}
          showLogging={false}
          showMenuBar={false}
          enableLabelDrags={false}
          enable3d={false}
          enableCAS={false}
          enableFileFeatures={false}
          enableRightClick={false}
          enableShiftDragZoom={false}
          showResetIcon={false}
          showStartTooltip={false}
          showSuggestionButtons={false}
          ggbBase64={data[debouncedNumber - 1].value}
        />
      </div>
    </div>
  );
}
