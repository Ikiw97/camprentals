export function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-300 text-gray-900",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-black",
    danger: "bg-red-600 text-white",
  };

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
