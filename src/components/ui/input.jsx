export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-900 outline-none 
      focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
      {...props}
    />
  );
}
