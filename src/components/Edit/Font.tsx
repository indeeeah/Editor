'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignRight,
} from 'react-icons/md';

import { StyleProps } from '@/types/element';

import ColorPicker from '../ColorPicker';
import FontSelector from '../FontSelector';
import FontWeightSelector from '../FontWeightSelector';

type FontProps = {
  fontStyle: StyleProps;
  handleFontStyle: (fontStyle: StyleProps) => void;
};

export default function Font({ fontStyle, handleFontStyle }: FontProps) {
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const backgroundColorPickerRef = useRef<HTMLDivElement>(null);

  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [backgroundColorPickerOpen, setBackgroundColorPickerOpen] =
    useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setColorPickerOpen(false);
      }
      if (
        backgroundColorPickerRef.current &&
        !backgroundColorPickerRef.current.contains(event.target as Node)
      ) {
        setBackgroundColorPickerOpen(false);
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
            style={{ backgroundColor: fontStyle.color }}
            ref={colorPickerRef}
            onClick={() => setColorPickerOpen(true)}
          />
          <div
            className="size-5 cursor-pointer rounded-sm border border-gray-primary"
            style={{
              backgroundColor: fontStyle.backgroundColor,
              backgroundImage:
                fontStyle.backgroundColor === 'transparent'
                  ? 'linear-gradient(135deg, transparent 47%, red 47%, red 53%, transparent 53%)'
                  : 'none',
              backgroundSize: '100% 100%',
              backgroundPosition: 'top left',
            }}
            ref={backgroundColorPickerRef}
            onClick={() => setBackgroundColorPickerOpen(true)}
          />
        </div>
        <div className="flex">
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm italic hover:bg-brightBlue-50 ${fontStyle.italic ? 'bg-brightBlue-50' : ''}`}
            onClick={() =>
              handleFontStyle({ ...fontStyle, italic: !fontStyle.italic })
            }
          >
            I
          </button>
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm underline hover:bg-brightBlue-50 ${fontStyle.underline ? 'bg-brightBlue-50' : ''}`}
            onClick={() =>
              handleFontStyle({ ...fontStyle, underline: !fontStyle.underline })
            }
          >
            U
          </button>
          <button
            type="button"
            className={`flex size-5 items-center justify-center border border-gray-primary text-sm line-through hover:bg-brightBlue-50 ${fontStyle.strikeThrough ? 'bg-brightBlue-50' : ''}`}
            onClick={() =>
              handleFontStyle({
                ...fontStyle,
                strikeThrough: !fontStyle.strikeThrough,
              })
            }
          >
            S
          </button>
        </div>
        <div className="flex">
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontStyle.align === 'left' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => handleFontStyle({ ...fontStyle, align: 'left' })}
          >
            <MdOutlineFormatAlignLeft className="size-4" />
          </div>
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontStyle.align === 'center' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => handleFontStyle({ ...fontStyle, align: 'center' })}
          >
            <MdOutlineFormatAlignCenter className="size-4" />
          </div>
          <div
            className={`flex size-5 cursor-pointer items-center justify-center border border-gray-primary hover:bg-brightBlue-50 ${fontStyle.align === 'right' ? 'bg-brightBlue-50' : ''}`}
            onClick={() => handleFontStyle({ ...fontStyle, align: 'right' })}
          >
            <MdOutlineFormatAlignRight className="size-4" />
          </div>
        </div>
        <div className="flex gap-1">
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            id="opacity"
            defaultValue={fontStyle.opacity! * 100}
            onChange={event => {
              const opacity = Number(event.target.value) / 100;
              handleFontStyle({ ...fontStyle, opacity });
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
            defaultValue={fontStyle.fontSize}
            onChange={event =>
              handleFontStyle({
                ...fontStyle,
                fontSize: Number(event.target.value),
              })
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
            defaultColor={fontStyle.color!}
            onChange={color => handleFontStyle({ ...fontStyle, color })}
          />
        </div>
        <div
          className={`absolute z-10 pt-2 ${backgroundColorPickerOpen ? 'block' : 'hidden'}`}
        >
          <ColorPicker
            defaultColor={fontStyle.backgroundColor!}
            onChange={color =>
              handleFontStyle({ ...fontStyle, backgroundColor: color })
            }
          />
        </div>
      </div>
    </>
  );
}
