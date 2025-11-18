import { useState, useRef, useEffect } from "react";

export function Dropdown({ label = "Menu", items = [] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
      >
        {label}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={item.onClick}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
