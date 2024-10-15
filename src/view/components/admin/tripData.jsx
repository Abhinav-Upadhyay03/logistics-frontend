import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const TripData = ({ tripsCompleted, ongoingTrips, cancelledTrips }) => {
  const data = [
    { name: 'Completed Trips', value: tripsCompleted },
    { name: 'Ongoing Trips', value: ongoingTrips },
    { name: 'Cancelled Trips', value: cancelledTrips },
  ];
  const COLORS = ['#4CAF50', '#FF9800', '#F44336']; 

  return (
    <div className="h-[43%] w-full text-center bg-[#FEF9F2] border-b-2">
      <p className="text-center text-2xl mt-7 pt-4 font-base">Trips Data</p>
      <div className="flex justify-center">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default TripData;
