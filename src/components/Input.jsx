import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  showPassword,
  setShowPassword,
  className = "shadow input bg-customGray appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10",
}) => {
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "password" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye color="gray" /> : <EyeOff color="gray" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
