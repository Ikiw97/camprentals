export function Sheet({ open, onClose, side = "right", children }) {
  if (!open) return null;

  const position =
    side === "left"
      ? "left-0"
      : side === "right"
      ? "right-0"
      : side === "top"
      ? "top-0"
      : "bottom-0";

  return (
    <div className="fixed inset-0 flex z-50">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Sheet Panel */}
      <div
        className={`absolute ${position} bg-white shadow-xl h-full w-80 p-6 transform transition-all`}
      >
        {children}
      </div>
    </div>
  );
}
