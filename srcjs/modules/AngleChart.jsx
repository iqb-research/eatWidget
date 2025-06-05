/* eslint-disable react/prop-types */
import * as d3 from "d3";

const angleToRad = (angle) => {
  const angleCircle = angle - 90;
  const radLine = (angle * Math.PI) / 180;
  const radCircle = -(angleCircle * Math.PI) / 180;

  return [radLine, radCircle];
};

export default function AngleChart({ angle, width, height, color, fill }) {
  const [radLine, radCircle] = angleToRad(angle);

  const totalWidth = 100;
  const totalHeight = 50;

  const centerX = totalWidth / 2;
  const centerY = totalHeight;

  const lineLength = totalWidth / 2;

  // Line based on the angle
  const x2 = +lineLength * Math.cos(radLine);
  const y2 = -lineLength * Math.sin(radLine);

  const data = d3.arc()({
    innerRadius: 0,
    outerRadius: (totalWidth / 2) * 0.9,
    startAngle: Math.PI / 2,
    endAngle: radCircle,
  });

  return (
    <svg
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 50"
    >
      <g transform={`translate(${centerX},${centerY})`}>
        <path fill={fill} d={data} />
        <line
          x1={0}
          x2={totalWidth}
          y1={0}
          y2={0}
          stroke="black"
          strokeWidth={2}
        />
        <line x1={0} x2={x2} y1={0} y2={y2} stroke={color} strokeWidth={2} />
      </g>
    </svg>
  );
}
