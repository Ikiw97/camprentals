import React from "react";

export function Select({ options, className = "", ...props }) {
  return (
    <select className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`} {...props}>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
