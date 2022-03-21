import React from "react";

import "../chart/Chart.css";

import ChartBar from "../chartBar/ChartBar";

export default function Chart(props) {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
