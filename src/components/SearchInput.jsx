import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchInput = ({
  type = 'text',
  id,
  placeholder,
  iconColor,
  value,
  onChange,
  width,
  suggestions = [],
  className = 'w-full border-2 flex items-center bg-customGray rounded-lg px-2 focus-within:border-customBlue',
  tailwindEffect = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

 
  const handleSelectSuggestion = (suggestion) => {
    onChange(suggestion)
    setIsFocused(false)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 1000);
  };

  return (
    <div className="relative bg-transparent sm:bg-customGray" style={{width: `${width}`}}>
      <div
        className={`bg-[#E8F0FE] ${className} ${tailwindEffect} ${
          isFocused ? 'border-customBlue' : ''
        }`}
      >
        <Search size={20} color={iconColor} className="flex-shrink-0" />
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          className="input border-none bg-inherit rounded-none focus:outline-none w-full"
        />
        {value && isFocused && (
          <X size={20} className="flex-shrink-0 cursor-pointer" onClick={handleClear} />
        )}
      </div>
      {isFocused && suggestions.length > 0 && (
        <ul className="absolute panel top-full left-0 right-0 bg-[#E5F0FD] z-10 border border-gray-300 rounded-lg shadow-md py-2">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
