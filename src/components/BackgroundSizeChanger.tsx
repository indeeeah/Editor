'use client';

import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';

export default function BackgroundSizeChanger() {
  const { backgroundSize, setBackgroundSize } = useBackgroundSize();

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
    <div className="flex h-10 w-full items-center justify-center gap-2 bg-white">
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
