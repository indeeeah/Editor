import { forwardRef } from 'react';

import { ElementProps } from '@/types/element';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  return (
    <div ref={ref} style={props.style}>
      {props.children}
    </div>
  );
});

Section.displayName = 'Section';
export default Section;
