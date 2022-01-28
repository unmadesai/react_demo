import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Mon",
    //format for sleep duration = (24-sleep time, 12-wake time)
    //here eg slept at 11pm and woke up at 7am
    sd: [(24-11),(12-7)],
  },
  {
    name: "Tues",
    sd: [(24-10),(12-8)],
  },
  {
    name: "Wed",
    sd: [(24-12),(12-5)],
  },
  {
    name: "Thu",
    sd: [(24-10),(12-7)],
  },
  {
    name: "Fri",
    sd: [(24-11),(12-9)],
  },
  {
    name: "Sat",
    sd: [(24-12),(12-7)],
  },
  {
    name: "Sun",
    sd: [(24-10),(12-8)],
  }
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 24]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="sd" fill="#8884d8" />
    </BarChart>
  );
}
