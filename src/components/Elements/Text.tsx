import { forwardRef } from 'react';

import { convertAlign, convertStyle } from '@/libs/style';
import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

const Text = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  const { elements, setSelectedElement } = useElements();

  return (
    <div className="w-full" style={convertAlign(props.style)}>
      <div
        ref={ref}
        onClick={() => {
          const element = elements.find(e => e.id === props.id);
          if (!element) return;
          setSelectedElement(element);
        }}
      >
        {props.value!.split('\n').map((line: string, index: number) => (
          <p key={index} style={{ ...convertStyle(props.style) }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
});

Text.displayName = 'Text';
export default Text;
