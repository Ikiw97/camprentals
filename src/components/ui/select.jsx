import { useState } from "react";

export function Select({ options = [], value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);

  const selected =
    options.find((opt) => opt.value === value) || options[0] || {};

  return (
    <div className={`relative w-full ${className}`}>
      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-left
                   hover:border-gray-400 transition"
      >
        {selected.label || "Select..."}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute mt-1 left-0 w-full bg-white shadow-lg rounded-xl border border-gray-200 max-h-60 overflow-auto z-20"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
