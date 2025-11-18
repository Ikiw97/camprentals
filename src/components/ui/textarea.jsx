export function Textarea({ value, onChange, placeholder, className = "" }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 bg-white border border-gray-300 rounded-xl 
                  focus:outline-none focus:ring-2 focus:ring-blue-300 
                  transition resize-none ${className}`}
      rows={4}
    />
  );
}
