import { useState } from "react";

export function Tabs({ tabs = [], defaultTab }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.value);

  const activeTab = tabs.find((t) => t.value === active);

  return (
    <div>
      {/* Headers */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-4 py-2 -mb-px border-b-2 text-sm font-medium
              ${
                active === tab.value
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{activeTab?.content}</div>
    </div>
  );
}
