import { useEffect, useRef, useState } from 'react';

import ColorPicker from '@/components/ColorPicker';

export default function SectionVariable() {
  const backgroundColorPickerRef = useRef<HTMLDivElement>(null);

  const [backgroundColorPickerOpen, setBackgroundColorPickerOpen] =
    useState(false);
  const [section, setSection] = useState({
    backgroundColor: '#FFFFFF',
    opacity: 1,
  });

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
    <div className="flex flex-col">
      <p className="text-sm font-bold text-blue">color</p>
      <div className="flex items-center gap-8 pt-4">
        <div
          className="flex gap-4"
          ref={backgroundColorPickerRef}
          onClick={() => setBackgroundColorPickerOpen(true)}
        >
          <div
            className="size-6 rounded-sm border border-gray-primary"
            style={{ backgroundColor: section.backgroundColor }}
          />
          <span className="text-sm text-gray-600">
            {section.backgroundColor.toUpperCase()}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">opacity</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            placeholder="Opacity"
            id="opacity"
            defaultValue={section.opacity * 100}
            onChange={event => {
              const opacity = Number(event.target.value) / 100;
              setSection({ ...section, opacity });
            }}
          />
          <span className="text-xs text-gray-600">%</span>
        </div>
      </div>
      <div
        className={`absolute pt-2 ${backgroundColorPickerOpen ? 'block' : 'hidden'}`}
      >
        <ColorPicker
          defaultColor={section.backgroundColor}
          onChange={color => setSection({ ...section, backgroundColor: color })}
        />
      </div>
      <button
        type="button"
        className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
      >
        Add
      </button>
    </div>
  );
}
