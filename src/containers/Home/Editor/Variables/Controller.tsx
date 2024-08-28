import { useRef } from 'react';

import { VariableType } from '@/libs/variables';
import { useElements } from '@/providers/ElementProvider';

type ControllerProps = {
  selectedVariable: VariableType | null;
  handleSelectedVariable: (variable: VariableType) => void;
};

export default function Controller({
  selectedVariable,
  handleSelectedVariable,
}: ControllerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { setNewElement } = useElements();

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
        {[...Object.values(VariableType)].map(variable => (
          <button
            key={variable}
            type="button"
            className="p-2 text-xs hover:bg-blue hover:text-white"
            style={{
              backgroundColor: selectedVariable === variable ? '#2B2B2B' : '',
              color: selectedVariable === variable ? '#fff' : '',
            }}
            onClick={() => {
              handleSelectedVariable(variable);
              setNewElement(null);
            }}
          >
            {variable.toLowerCase()}
          </button>
        ))}
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
