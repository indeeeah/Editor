'use client';

import { useState } from 'react';

import FontSelector from '../FontSelector';

export default function Font() {
  const [fontType, setFontType] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
  });

  return (
    <div className="flex items-center gap-4 py-2">
      <FontSelector />
      <div className="flex gap-1">
        <span className="text-xs text-gray-600">size</span>
        <input
          type="text"
          className="w-8 border border-gray-primary text-center text-xs outline-none"
        />
        <span className="text-xs text-gray-600">px</span>
      </div>
      <div className="flex">
        <button
          type="button"
          className={`flex size-5 items-center justify-center border border-gray-primary text-sm font-bold hover:bg-gray-secondary ${fontType.bold ? 'bg-gray-secondary' : ''}`}
          onClick={() => setFontType(prev => ({ ...prev, bold: !prev.bold }))}
        >
          B
        </button>
        <button
          type="button"
          className={`flex size-5 items-center justify-center border border-gray-primary text-sm italic hover:bg-gray-secondary ${fontType.italic ? 'bg-gray-secondary' : ''}`}
          onClick={() =>
            setFontType(prev => ({ ...prev, italic: !prev.italic }))
          }
        >
          I
        </button>
        <button
          type="button"
          className={`flex size-5 items-center justify-center border border-gray-primary text-sm underline hover:bg-gray-secondary ${fontType.underline ? 'bg-gray-secondary' : ''}`}
          onClick={() =>
            setFontType(prev => ({ ...prev, underline: !prev.underline }))
          }
        >
          U
        </button>
        <button
          type="button"
          className={`flex size-5 items-center justify-center border border-gray-primary text-sm line-through hover:bg-gray-secondary ${fontType.strikeThrough ? 'bg-gray-secondary' : ''}`}
          onClick={() =>
            setFontType(prev => ({
              ...prev,
              strikeThrough: !prev.strikeThrough,
            }))
          }
        >
          S
        </button>
      </div>
    </div>
  );
}
