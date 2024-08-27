'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  onSelect?: (option: number) => void;
};

export default function FontWeightSelector({ onSelect }: Props) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(400);

  const fontWeightList = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const onSelectOption = (option: number) => {
    setSelectedOption(option);
    setOpen(false);

    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div
      className={`${open ? 'bg-white' : 'bg-gray-50'} relative flex w-16 items-center justify-between border border-gray-secondary text-xs`}
      ref={dropdownRef}
    >
      <button
        type="button"
        data-value={selectedOption}
        className="flex size-full items-center justify-between gap-1"
        onClick={() => setOpen(prev => !prev)}
        onKeyDown={() => setOpen(prev => !prev)}
      >
        <span
          className="max-w-10 truncate px-1"
          style={{ fontWeight: selectedOption }}
        >
          {selectedOption}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={`${open ? 'rotate-180' : ''} transition-all`}
        >
          <path d="M10 13.5C9.87 13.5 9.74 13.45 9.65 13.35L4.65 8.34999C4.45 8.14999 4.45 7.83999 4.65 7.63999C4.85 7.43999 5.16 7.43999 5.36 7.63999L10.01 12.29L14.66 7.63999C14.86 7.43999 15.17 7.43999 15.37 7.63999C15.57 7.83999 15.57 8.14999 15.37 8.34999L10.37 13.35C10.27 13.45 10.14 13.5 10.02 13.5H10Z" />
        </svg>
      </button>
      <div
        className={`absolute left-0 top-[110%] z-10 flex ${open ? 'max-h-[365px]' : 'max-h-0 opacity-0'} w-full flex-col overflow-auto border border-gray-primary bg-gray-secondary transition-all ease-in-out`}
      >
        {fontWeightList.map(weight => (
          <li
            key={weight}
            className={`cursor-pointer list-none p-1 hover:bg-gray-50 ${selectedOption === weight ? 'font-bold' : ''}`}
          >
            <span
              role="button"
              tabIndex={0}
              onClick={() => onSelectOption(weight)}
              onKeyDown={() => onSelectOption(weight)}
              className="block w-full"
              style={{
                fontWeight: weight,
              }}
            >
              {weight}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}
