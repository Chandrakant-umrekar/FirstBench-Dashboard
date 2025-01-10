import { TrendingUp } from "lucide-react";
import Card from "../common/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const AccuracyChart = () => {
  const accuracyData = [
    { slot: 1, accuracy: 85 },
    { slot: 2, accuracy: 45 },
    { slot: 3, accuracy: 35 },
    { slot: 4, accuracy: 65 },
    { slot: 5, accuracy: 55 },
    { slot: 6, accuracy: 45 },
    { slot: 7, accuracy: 60 },
  ];

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-900">Compare Accuracy</h3>
        </div>
        <span className="text-sm text-gray-500">Last 7 Slots</span>
      </div>

      {/* Chart */}
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={accuracyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="slot"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              cursor={{ fill: "rgba(156, 163, 175, 0.1)" }}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "6px",
                border: "1px solid #E5E7EB",
                fontSize: "12px",
                color: "#374151",
              }}
            />
            <Bar
              dataKey="accuracy"
              fill="#7C3AED"
              radius={[4, 4, 0, 0]}
              maxBarSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default AccuracyChart;
