import { useRef } from 'react';

import { VariableType } from '@/libs/variables';

type ControllerProps = {
  selectedVariable: VariableType | null;
  handleSelectedVariable: (variable: VariableType) => void;
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
              selectedVariable === VariableType.Box ? '#2B2B2B' : '',
            color: selectedVariable === VariableType.Box ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(VariableType.Box)}
        >
          box
        </button>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === VariableType.Text ? '#2B2B2B' : '',
            color: selectedVariable === VariableType.Text ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(VariableType.Text)}
        >
          text
        </button>
        <button
          type="button"
          className="p-2 text-xs hover:bg-blue hover:text-white"
          style={{
            backgroundColor:
              selectedVariable === VariableType.Button ? '#2B2B2B' : '',
            color: selectedVariable === VariableType.Button ? '#fff' : '',
          }}
          onClick={() => handleSelectedVariable(VariableType.Button)}
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
