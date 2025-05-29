import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Input() {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  return (
    <div className="w-[20vh] ">
      <div className="relative flex items-center justify-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-0 py-1 text-lg text-gray-900 border-0 border-b-1  border-black focus:outline-none duration-200 placeholder:text-gray-600 placeholder:text-sm"
          placeholder=" Input"
        />
    
        
          <button
            onClick={handleClear}
            className="absolute right-0 top-3 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-150"
            type="button"
          >
            <X size={15} />
          </button>
        
      </div>
    </div>
  );
}