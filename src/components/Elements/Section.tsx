import { forwardRef } from 'react';

import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

import Selected from './Selected';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  const { selectedElement } = useElements();

  return (
    <div
      ref={ref}
      style={{
        ...props.style,
        position: 'relative',
      }}
    >
      <div className={`${selectedElement?.id !== props.id ? 'hidden' : ''}`}>
        <Selected style={props.style} />
      </div>
      {props.children}
    </div>
  );
});

Section.displayName = 'Section';
export default Section;
