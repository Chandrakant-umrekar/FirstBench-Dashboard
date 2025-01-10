import Card from "../common/Card";
import Badge from "../common/Badge";
import { FileSymlinkIcon } from "lucide-react";

const ResultCard = () => {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-40 h-40 mb-2">
          <img
            src="/2126916.jpg"
            alt="Result illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-purple-600 mb-2">
          Your Result!
        </h2>
        <p className="text-gray-500 mb-6">
          All your insights & details in one place
        </p>

        <Card className="px-8 py-4 my-2">
          <div className="w-full flex items-center justify-between bg-purple-50 rounded-lg p-4 mb-6 shadow-md">
            <div>
              <img
                src="/web_16718531.png"
                alt="illustration img"
                className="w-12 h-12"
              />
            </div>
            <div className="flex flex-col items-center justify-between mb-2">
              <Badge variant="primary" size="sm">
                YOU'VE PASSED!
              </Badge>
              <div className="text-3xl font-bold text-center">
                136<span className="text-gray-400 text-lg">/240</span>
              </div>
            </div>
            <span className="text-md font-bold text-teal-500 text-center">
              76% <br />
              <span className="text-xs font-semibold"> ACCURACY</span>
            </span>
          </div>

          {/* Top Score */}
          <div className="w-full flex items-center gap-4 mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2yaox2cALIq_yyd-9qEyovEsficJr7X9QQ&s"
              alt="Top scorer"
              className="rounded-full object-cover w-12 h-12"
            />
            <div>
              <div className="text-2xl font-bold">
                230<span className="text-gray-400 text-lg">/240</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">By Parth Akotkar</span>
                <Badge variant="success" size="sm">
                  92% ACCURACY
                </Badge>
              </div>
            </div>
          </div>

          {/* Actions */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg mb-4 font-medium transition-colors">
            Practice more
          </button>
        </Card>

        {/* Revisit Paper */}
        <div className="w-full border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Revisit Paper</h3>
          <p className="text-sm text-gray-600 mb-4">
            Challenge your friends by simply sharing a link to this test
          </p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
            <FileSymlinkIcon className="w-5 h-5 mr-2 " />
            Visit
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
