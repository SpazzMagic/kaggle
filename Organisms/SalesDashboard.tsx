import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
export const SalesDashboard = ({ data }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
