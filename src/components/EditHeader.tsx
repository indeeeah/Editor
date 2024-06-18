'use client';

import { useEffect, useRef, useState } from 'react';

import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';
import { useElements } from '@/providers/ElementProvider';

export default function EditHeader() {
  const { selectedElement } = useElements();
  const { backgroundSize, setBackgroundSize } = useBackgroundSize();

  const layerControllerRef = useRef<HTMLDivElement>(null);

  const [isLayerControllerOpen, setIsLayerControllerOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        layerControllerRef.current &&
        !layerControllerRef.current.contains(event.target as Node)
      ) {
        setIsLayerControllerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSizeChange = () => {
    const width = Number(
      (document.getElementById('width') as HTMLInputElement).value,
    );
    const height = Number(
      (document.getElementById('height') as HTMLInputElement).value,
    );

    setBackgroundSize({ width, height });
  };

  return (
    <div className="relative flex h-10 w-full items-center justify-center gap-2 bg-white">
      <div
        className="absolute left-0 top-0 flex h-9 cursor-pointer items-center justify-center gap-2"
        ref={layerControllerRef}
        onClick={() => setIsLayerControllerOpen(!isLayerControllerOpen)}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isLayerControllerOpen ? 'rotate-180' : ''} ml-2 transition-all`}
        >
          <path d="M10 13.5C9.87 13.5 9.74 13.45 9.65 13.35L4.65 8.34999C4.45 8.14999 4.45 7.83999 4.65 7.63999C4.85 7.43999 5.16 7.43999 5.36 7.63999L10.01 12.29L14.66 7.63999C14.86 7.43999 15.17 7.43999 15.37 7.63999C15.57 7.83999 15.57 8.14999 15.37 8.34999L10.37 13.35C10.27 13.45 10.14 13.5 10.02 13.5H10Z" />
        </svg>
        <span className="text-xs text-blue">
          {selectedElement?.type || 'background'}
        </span>
      </div>
      <div>
        <input
          type="text"
          id="width"
          className="w-12 border-b border-gray-primary text-center text-xs outline-none"
          placeholder="Width"
          defaultValue={backgroundSize.width}
        />
        <span className="text-xs">px</span>
      </div>
      <div>
        <input
          type="text"
          id="height"
          className="w-12 border-b border-gray-primary text-center text-xs outline-none"
          placeholder="Height"
          defaultValue={backgroundSize.height}
        />
        <span className="text-xs">px</span>
      </div>
      <button
        type="button"
        className="rounded-md border border-gray-primary bg-blue p-1 text-xs text-white"
        onClick={handleSizeChange}
      >
        Set
      </button>
    </div>
  );
}
