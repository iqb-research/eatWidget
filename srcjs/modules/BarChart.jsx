/* eslint-disable react/prop-types */
import * as d3 from "d3";

export default function BarChart({
  frequency,
  min = 0,
  max = 1,
  fill,
  fillBackground,
  width = 400,
  height = 20,
}) {
  const totalWidth = 400;
  const totalHeight = 20;

  const freqScale = d3.scaleLinear().domain([min, max]).range([0, totalWidth]);
  const freq = freqScale(frequency);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
    >
      <rect width={totalWidth} height={totalHeight} fill={fillBackground} />
      <rect width={freq} height={totalHeight} fill={fill} />
    </svg>
  );
}
