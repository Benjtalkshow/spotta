import React from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

const Input = ({
  type = "text",
  id,
  placeholder,
  value,
  onChange,
  disable,
  showPassword,
  setShowPassword,
  className = "shadow input bg-customGray appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10",
  icon: Icon = null,
  error = "",
}) => {
  const handleIconClick = (e) => {
    e.stopPropagation();
    if (Icon === LockKeyhole) {
      e.preventDefault(); 
    }
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        id={id}
        className={`${className} ${error ? "border-red-500 focus:border-red-500" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {(type === "password" || Icon) && (
        <div className="absolute inset-y-0 right-0 top-4 bottom-5 pr-3 flex items-center">
          {Icon && (
            <button className="focus:outline-none" onClick={handleIconClick} disabled={disable}>
              <Icon color="gray" />
            </button>
          )}
          {type === "password" && Icon ? (
            <></>
          ) : (
            <span
              className="focus:outline-none cursor-pointer"
              onClick={handleIconClick}
              disabled={disable}
            >
              {showPassword ? <Eye color="gray" /> : <EyeOff color="gray" />}
            </span>
          )}
        </div>
      )}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
