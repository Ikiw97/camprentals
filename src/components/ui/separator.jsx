import React from "react";

export default function Separator({ className = "" }) {
  return <hr className={`border-gray-200 dark:border-gray-700 ${className}`} />;
}
