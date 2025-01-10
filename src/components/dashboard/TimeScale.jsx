const TimeScale = ({
  value,
  maxValue,
  labels,
  showOverlay = false,
  overlayColor = "red",
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="relative w-full">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            overlayColor === "red" ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {showOverlay && (
        <div
          className={`absolute left-0 top-0 h-8 ${
            overlayColor === "red" ? "bg-red-500" : "bg-green-500"
          } opacity-20`}
          style={{ width: `${percentage}%` }}
        />
      )}

      <div className="flex justify-between mt-2">
        {labels.map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-3 w-px bg-gray-300" />
            <span className="text-xs text-gray-500 mt-1">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque animi
        porro suscipit eaque qui, nobis praesentium rerum natus placeat vitae
        non.
      </p>
    </div>
  );
};

export default TimeScale;
