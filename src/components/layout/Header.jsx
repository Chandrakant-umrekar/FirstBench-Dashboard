import { useState } from "react";
import { Bell } from "lucide-react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Mock Test");

  const navigation = [
    { name: "Dashboard", href: "#" },
    { name: "FirstGuru", href: "#" },
    { name: "TownHall", href: "#" },
    { name: "AI Evaluation", href: "#" },
    { name: "Performance", href: "#" },
    { name: "Mock Test", href: "#" },
  ];

  return (
    <header className="bg-[#1E1E2D] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img
                src="data:image/jpeg;base64,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"
                alt="FirstBench"
                className="w-12 h-12 object-cover rounded-full"
              />
              <span className="text-lg font-bold">FirstBench</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === item.name
                      ? "bg-cyan-500/20 text-cyan-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-700">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeI_rU7enS60mt1Z6swQ_G2pNW-S9ozXd4g&s"
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-cyan-500"
              />
              <span className="text-sm font-medium">Harry</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
