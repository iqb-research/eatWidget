/* eslint-disable react/prop-types */
import * as d3 from "d3";

export default function RangeChart({
  estimate,
  estimateMin,
  estimateMax,
  globalEstimate,
  globalEstimateMin,
  globalEstimateMax,
  width = 400,
  height = 50,
  color = "#64748b",
  colorLine = "#64748b",
  globalColor = "#94a3b8",
  globalColorLine = "#94a3b8",
  fill = "#f1f5f9",
  globalFill = "#f1f5f9",
  min = -3,
  max = 3,
  scale = 1,
}) {
  const totalHeight = 20;
  const totalWidth = 400;
  const y = totalHeight / 2;

  const estScale = d3
    .scaleLinear()
    .domain([min, max])
    .range([50, totalWidth - 50]);

  const est = estScale(estimate);
  const estMin = estScale(estimateMin);
  const estMax = estScale(estimateMax);

  const globalEst =
    globalEstimate != undefined ? estScale(globalEstimate) : null;
  const globalEstMin =
    globalEstimateMin != undefined ? estScale(globalEstimateMin) : null;
  const globalEstMax =
    globalEstimateMax != undefined ? estScale(globalEstimateMax) : null;

  const ticks = estScale
    .ticks(Math.max(1, Math.floor((totalWidth - 100) / 40)))
    .map((value) => ({
      value,
      xOffset: estScale(value),
    }));

  const renderErrorLine = (
    curEstimate,
    curEst,
    curMin,
    curMax,
    curStroke = 3,
    curColorLine = "black"
  ) =>
    curEstimate >= min && curEstimate <= max ? (
      <line
        x1={curMin}
        x2={curMax}
        y1={y}
        y2={y}
        strokeWidth={curStroke * scale}
        stroke={curColorLine}
      />
    ) : null;

  const renderCircle = (
    curEstimate,
    curEst,
    curSize = 6,
    curColor = color,
    curFill = fill
  ) => {
    const commonProps = {
      r: curSize * scale,
      stroke: curColor,
      strokeWidth: 2 * scale,
      cy: y,
    };

    if (curEstimate > max) {
      return <circle {...commonProps} cx={365} fill={curFill} />;
    }
    if (curEstimate < min) {
      return <circle {...commonProps} cx={35} fill={curFill} />;
    }
    return <circle {...commonProps} cx={curEst} fill={curColor} />;
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 400 ${totalHeight}`}
      preserveAspectRatio="xMidYMid"
    >
      {/* Axis */}
      <line
        x1={50}
        x2={350}
        y1={y}
        y2={y}
        stroke="black"
        strokeWidth={1 * scale}
        strokeLinecap="round"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${y})`}>
          <line y2="4" stroke="black" strokeLinecap="round" />
        </g>
      ))}

      {globalEst != undefined &&
      (globalEstMin != undefined || globalEstMin != undefined)
        ? renderErrorLine(
            globalEstimate,
            globalEst,
            globalEstMin,
            globalEstMax,
            5,
            globalColorLine
          )
        : null}
      {renderErrorLine(estimate, est, estMin, estMax, 3, colorLine)}

      {globalEst != undefined
        ? renderCircle(globalEstimate, globalEst, 8, globalColor, globalFill)
        : null}
      {renderCircle(estimate, est)}
    </svg>
  );
}
