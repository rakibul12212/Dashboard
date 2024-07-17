import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data01 = [{ name: "Group A", value: 500 }];

const data02 = [
  { name: "Facebook", value: 250 },
  { name: "Youtube", value: 130 },
  { name: "Direct Search", value: 55 },
];

const COLORS = ["#DB2424", "#9B59B6", "#3498DB"];

const Pies = () => (
  <div className="w-full h-full">
    <ResponsiveContainer width="100%" height={265}>
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={40}
          fill="#808080"
          stroke="none"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          stroke="none"
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default Pies;
