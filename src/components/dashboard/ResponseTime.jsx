import { Clock, ChevronUp } from "lucide-react";
import Card from "../common/Card";
import TimeScale from "./TimeScale";

const ResponseTime = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-gray-700" />
        <h3 className="text-xl font-bold text-gray-900">Response Time</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-4xl font-bold text-green-500">60</div>
          <div className="text-sm text-gray-500">
            % Ans took
            <div className="flex items-center text-red-500">
              <ChevronUp className="w-4 h-4" />
              2min
            </div>
          </div>
        </div>
        <div className="text-red-500 text-sm mb-4">You are slow!</div>
        <TimeScale value={20} maxValue={45} labels={["0", "15", "30", "45"]} />
      </div>
    </Card>
  );
};

export default ResponseTime;
