import DashboardLayout from "./components/layout/DashboardLayout";
import ResultCard from "./components/dashboard/ResultCard";
import SubjectUnderstanding from "./components/dashboard/SubjectUnderstanding";
import ResponseTime from "./components/dashboard/ResponseTime";
import ApproachData from "./components/dashboard/ApproachData";
import AccuracyChart from "./components/dashboard/AccuracyChart";
import TimeScale from "./components/dashboard/TimeScale";
import Card from "./components/common/Card";
import { Clock } from "lucide-react";
import EmptyBox from "./components/dashboard/EmptyBox";

const App = () => {
  return (
    <DashboardLayout>
      {/* First Row */}

      <ResultCard />
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EmptyBox />
        <EmptyBox />
        <SubjectUnderstanding />
        <ResponseTime />
      </div>

      {/* Second Row */}
      <ApproachData />
      <div className="col-span-1 lg:col-span-2">
        <AccuracyChart />
      </div>

      {/* Time Taken (Full Width) */}
      <Card className="col-span-1 lg:col-span-3">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Time Taken</h3>
          </div>

          <div className="space-y-8">
            <TimeScale
              value={60}
              maxValue={90}
              labels={[10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => `${v}`)}
              showOverlay
              overlayColor="red"
            />

            <TimeScale
              value={2}
              maxValue={4}
              labels={[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((v) => `${v}`)}
              showOverlay
              overlayColor="green"
            />
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};
export default App;
