'use client';

import { useEffect, useRef, useState } from 'react';

import ColorPicker from '@/components/ColorPicker';

type BackgroundColorProps = {
  background: { color: string; opacity: number };
  handleBackgroundChange: (background: {
    color: string;
    opacity: number;
  }) => void;
};

export default function BackgroundColor({
  background,
  handleBackgroundChange,
}: BackgroundColorProps) {
  const backgroundColorPickerRef = useRef<HTMLDivElement>(null);

  const [backgroundColorPickerOpen, setBackgroundColorPickerOpen] =
    useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
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
    <div className="border-b border-gray-primary p-6">
      <p className="text-sm font-bold text-blue">background color</p>
      <div className="flex items-center gap-8 pt-4">
        <div
          className="flex gap-4"
          ref={backgroundColorPickerRef}
          onClick={() => setBackgroundColorPickerOpen(true)}
        >
          <div
            className="size-6 rounded-sm border border-gray-primary"
            style={{ backgroundColor: background.color }}
          />
          <span className="text-sm text-gray-600">
            {background.color.toUpperCase()}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">opacity</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            placeholder="Opacity"
            id="opacity"
            defaultValue={background.opacity * 100}
            onChange={event => {
              const opacity = Number(event.target.value) / 100;
              handleBackgroundChange({ ...background, opacity });
            }}
          />
          <span className="text-xs text-gray-600">%</span>
        </div>
      </div>
      <div
        className={`absolute pt-2 ${backgroundColorPickerOpen ? 'block' : 'hidden'}`}
      >
        <ColorPicker
          defaultColor={background.color}
          onChange={color => handleBackgroundChange({ ...background, color })}
        />
      </div>
    </div>
  );
}
