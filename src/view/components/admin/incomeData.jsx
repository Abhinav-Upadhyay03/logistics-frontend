import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const IncomeChart = ({ netIncome, incomeFromOngoingTrips, avgIncomePerTrip }) => {
  const data = [
    { name: 'Net Income', value: netIncome },
    { name: 'Ongoing Trips Income', value: incomeFromOngoingTrips },
    { name: 'Avg Income per Trip', value: avgIncomePerTrip }
  ];

  return (
    <div className="h-[43%] w-full text-center bg-[#FEF9F2]">
      <p className="text-center text-2xl pt-4 font-base">Income Overview</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>

      
    </div>
  );
};

export default IncomeChart;
