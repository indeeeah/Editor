'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignRight,
} from 'react-icons/md';

import ColorPicker from '../ColorPicker';
import FontSelector from '../FontSelector';
import FontWeightSelector from '../FontWeightSelector';

export default function Font() {
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [fontType, setFontType] = useState({
    size: 16,
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    align: 'left' as 'left' | 'center' | 'right',
    color: '#000000',
    opacity: 1,
  });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setColorPickerOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 pt-2">
        <div className="flex">
          <div
            className="size-5 cursor-pointer rounded-sm border border-gray-primary"
            style={{ backgroundColor: fontType.color }}
            ref={colorPickerRef}
            onClick={() => setColorPickerOpen(true)}
          />
          <div
            className="size-5 cursor-pointer rounded-sm border border-gray-primary"
            style={{ backgroundColor: fontType.color }}
            ref={colorPickerRef}
            onClick={() => setColorPickerOpen(true)}
          />
        </div>
        <div className="flex">
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm italic hover:bg-brightBlue-50 ${fontType.italic ? 'bg-brightBlue-50' : ''}`}
            onClick={() =>
              setFontType(prev => ({ ...prev, italic: !prev.italic }))
            }
          >
            I
          </button>
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm underline hover:bg-brightBlue-50 ${fontType.underline ? 'bg-brightBlue-50' : ''}`}
            onClick={() =>
              setFontType(prev => ({ ...prev, underline: !prev.underline }))
            }
          >
            U
          </button>
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm line-through hover:bg-brightBlue-50 ${fontType.strikeThrough ? 'bg-brightBlue-50' : ''}`}
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
        <div className="flex">
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontType.align === 'left' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => setFontType(prev => ({ ...prev, align: 'left' }))}
          >
            <MdOutlineFormatAlignLeft className="size-4" />
          </div>
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontType.align === 'center' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => setFontType(prev => ({ ...prev, align: 'center' }))}
          >
            <MdOutlineFormatAlignCenter className="size-4" />
          </div>
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontType.align === 'right' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => setFontType(prev => ({ ...prev, align: 'right' }))}
          >
            <MdOutlineFormatAlignRight className="size-4" />
          </div>
        </div>
        <div className="flex gap-1">
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            id="opacity"
            defaultValue={fontType.opacity * 100}
            onChange={event => {
              const opacity = Number(event.target.value) / 100;
              setFontType({ ...fontType, opacity });
            }}
          />
          <span className="text-xs text-gray-600">%</span>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-2">
        <FontSelector />
        <FontWeightSelector />
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">size</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            defaultValue={fontType.size}
            onChange={event =>
              setFontType({ ...fontType, size: Number(event.target.value) })
            }
          />
          <span className="text-xs text-gray-600">px</span>
        </div>
      </div>
      <div className="relative flex items-center gap-4 py-2">
        <div
          className={`absolute z-10 pt-2 ${colorPickerOpen ? 'block' : 'hidden'}`}
        >
          <ColorPicker
            defaultColor={fontType.color}
            onChange={color => setFontType({ ...fontType, color })}
          />
        </div>
      </div>
    </>
  );
}
