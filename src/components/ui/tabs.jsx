import React, { useState } from "react";

export function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex space-x-2 mb-2">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${active === i ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
