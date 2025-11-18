import React from "react";

export default function Switch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300
        dark:bg-gray-700 peer-checked:bg-blue-600 transition-all duration-200`}
      />
      <span
        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow transform
        transition-transform duration-200 ${checked ? "translate-x-5" : "translate-x-0"}`}
      />
    </label>
  );
}
