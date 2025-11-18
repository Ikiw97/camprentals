import React from "react";

// Wrapper utama Card
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

// Header Card
export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-2 ${className}`}>
      {children}
    </div>
  );
}

// Title Card
export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-lg font-semibold ${className}`}>
      {children}
    </h2>
  );
}

// Description Card
export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`}>
      {children}
    </p>
  );
}

// Content Card
export function CardContent({ children, className = "" }) {
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
}
