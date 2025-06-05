/* eslint-disable react/prop-types */
import "./Calculation.css"; // Optional: Für Styling, kannst du es anpassen

export default function Calculation({
  data,
  fill = "#f1f5f9",
  fillEditable = "#fef3c7",
}) {
  let calculationData;
  if (typeof data === "string") {
    calculationData = JSON.parse(data);
  } else {
    calculationData = data;
  }

  return (
    <div className="calculation-grid">
      {calculationData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`calculation-row ${row.rowType} ${
            row.isHelperRow ? "calculation-helper-row" : ""
          }`}
        >
          {row.cells.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="calculation-cell"
              style={
                !cell.isEditable
                  ? { backgroundColor: fill }
                  : { backgroundColor: fillEditable }
              }
            >
              {cell.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
