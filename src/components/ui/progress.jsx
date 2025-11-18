export function Progress({ value = 0, className = "" }) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 overflow-hidden ${className}`}>
      <div
        className="h-full bg-blue-500 transition-all duration-300"
        style={{ width: `${safeValue}%` }}
      ></div>
    </div>
  );
}
