import React from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", uv: 0, pv: 0 },
  { name: "", uv: 5, pv: 10 },
  { name: "Fev", uv: 8, pv: 10 },
  { name: "", uv: 5, pv: 12 },
  { name: "Mar", uv: 17, pv: 19 },
  { name: "", uv: 15, pv: 10 },
  { name: "Apr", uv: 12, pv: 20 },
  { name: "", uv: 20, pv: 22 },
  { name: "May", uv: 2, pv: 10 },
];

const Chart = () => (
  <div className="w-full h-80 md:h-72 lg:h-120">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8300E3"
          fill="#E1ABFC"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#F56C23"
          fill="#F6A971"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
