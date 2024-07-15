

import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const data01 = [{ name: 'Group A', value: 500 }];

const data02 = [
  { name: 'A', value: 250 },
  { name: 'B', value: 130 },
  { name: 'C', value: 55 },
];

const COLORS = ['#FF5733', '#9B59B6', '#3498DB'];
const Pies = () => (
  <div style={{ width: '500px', height: '500px' }}>
    <ResponsiveContainer>
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
  </div>
);

export default Pies;
