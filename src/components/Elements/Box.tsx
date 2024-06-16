import { forwardRef } from 'react';

import { ElementProps } from '@/types/element';

const Box = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  return (
    <div ref={ref} style={props.style} onClick={props.onClick}>
      {props.children}
    </div>
  );
});

Box.displayName = 'Box';
export default Box;
