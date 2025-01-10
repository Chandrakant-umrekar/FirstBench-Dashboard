import { Brain } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

const SubjectUnderstanding = () => {
  const subjects = [
    { name: "Geography", color: "bg-emerald-500" },
    { name: "Politics", color: "bg-yellow-500" },
    { name: "Current Affairs", color: "bg-cyan-500" },
    { name: "General Studies", color: "bg-gray-500" },
    { name: "Mathematics", color: "bg-blue-500" },
    { name: "Social Studies", color: "bg-gray-400" },
    { name: "English Literature", color: "bg-red-500" },
    { name: "History", color: "bg-yellow-600" },
    { name: "Economics", color: "bg-teal-500" },
  ];

  const difficultyLevels = [
    { time: "1-12", label: "Easy", color: "success" },
    { time: "12-32", label: "Medium", color: "warning" },
    { time: "32-40", label: "Hard", color: "danger" },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-gray-700" />
          <h3 className="font-bold text-gray-900">Improvements</h3>
        </div>
        <div className="flex gap-2 mx-1">
          {difficultyLevels.map((level) => (
            <Badge
              key={level.time}
              variant={level.color}
              size="sm"
              extraClasses="sm:w-auto w-full sm:text-center text-left rounded-lg"
            >
              {`${level.time}s ${level.label}`}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {subjects.map((subject) => (
          <span
            key={subject.name}
            className={`${subject.color} text-white text-sm px-3 py-1 rounded-full`}
          >
            {subject.name}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default SubjectUnderstanding;
