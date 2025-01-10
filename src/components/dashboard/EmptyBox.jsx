import React from "react";
import Card from "../common/Card";
import { ArrowDownSquare } from "lucide-react";

const EmptyBox = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex gap-2 pb-40">
          <ArrowDownSquare className="w-6 h-6 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-600">
            Compare accuracy
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default EmptyBox;