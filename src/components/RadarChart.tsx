"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      pointBackgroundColor: string;
      pointBorderColor: string;
      pointHoverBackgroundColor: string;
      pointHoverBorderColor: string;
    }[];
  };
}

const RadarChart = ({ data }: RadarChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#003B75",
        bodyColor: "#666",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.parsed.r}%`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          display: false,
        },
        grid: {
          color: "rgba(0, 59, 117, 0.1)",
        },
        angleLines: {
          color: "rgba(0, 59, 117, 0.1)",
        },
        pointLabels: {
          font: {
            size: 14,
            weight: "bold" as const,
          },
          color: "#003B75",
        },
      },
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
      },
      line: {
        borderWidth: 3,
      },
    },
  };

  return (
    <div className="h-96 w-full">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
