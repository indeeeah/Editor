import { useRef } from 'react';

import { ElementType } from '@/libs/elements';

type ControllerProps = {
  selectedVariable: ElementType | null;
  handleSelectedVariable: (variable: ElementType) => void;
};

export default function Controller({
  selectedVariable,
  handleSelectedVariable,
}: ControllerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="flex overflow-hidden rounded-md bg-gray-secondary">
      <button
        type="button"
        className="p-2 text-xs hover:bg-blue hover:text-white"
        onClick={scrollLeft}
      >
        {'<'}
      </button>
      <div className="flex w-full overflow-hidden" ref={scrollContainerRef}>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === ElementType.Section ? '#2B2B2B' : '',
            color: selectedVariable === ElementType.Section ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(ElementType.Section)}
        >
          section
        </button>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === ElementType.Box ? '#2B2B2B' : '',
            color: selectedVariable === ElementType.Box ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(ElementType.Box)}
        >
          box
        </button>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === ElementType.Text ? '#2B2B2B' : '',
            color: selectedVariable === ElementType.Text ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(ElementType.Text)}
        >
          text
        </button>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === ElementType.Button ? '#2B2B2B' : '',
            color: selectedVariable === ElementType.Button ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(ElementType.Button)}
        >
          button
        </button>
      </div>
      <button
        type="button"
        className="p-2 text-xs hover:bg-blue hover:text-white"
        onClick={scrollRight}
      >
        {'>'}
      </button>
    </div>
  );
}
