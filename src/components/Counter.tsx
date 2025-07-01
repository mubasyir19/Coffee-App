"use client";
import React, { useEffect, useState } from "react";

interface CounterProps {
  onValueChange: (newValue: number) => void;
}

export default function Counter({ onValueChange }: CounterProps) {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  const onCount = (type: string) => {
    let result = value;
    if (type === "plus") {
      result = value + 1;
    }
    if (type === "minus") {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={() => onCount("minus")}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium"
      >
        -
      </button>
      <p className="text-sm font-medium text-black">{value}</p>
      <button
        onClick={() => onCount("plus")}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-lg font-medium"
      >
        +
      </button>
    </div>
  );
}
