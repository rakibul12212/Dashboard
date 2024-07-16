import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data01 = [{ name: "Group A", value: 500 }];

const data02 = [
  { name: "Facebook", value: 250 },
  { name: "Youtube", value: 130 },
  { name: "Direct Search", value: 55 },
];

const COLORS = ["#FF0000", "#9B59B6", "#3498DB"];
const Pies = () => (
  <ResponsiveContainer width={352} height={325}>
    <PieChart>
      <Pie
        data={data01}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={40}
        fill="#808080"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={120}
        fill="#82ca9d"
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default Pies;
