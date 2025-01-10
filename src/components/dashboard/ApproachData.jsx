import { Brain } from "lucide-react";
import Card from "../common/Card";

const ApproachData = () => {
  const approaches = [
    { type: "Facts", percentage: 25 },
    { type: "Analysis", percentage: 32 },
    { type: "Elimination", percentage: 19 },
    { type: "Guess", percentage: 24 },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6 text-gray-700" />
        <h3 className="text-xl font-bold text-gray-900">Approach Data</h3>
      </div>

      <div className="space-y-4">
        {approaches.map((item) => (
          <div key={item.type} className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium text-sm text-center">
              {item.percentage}%
            </div>
            <div className="text-sm text-gray-700">{`Based on ${item.type}`}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ApproachData;
