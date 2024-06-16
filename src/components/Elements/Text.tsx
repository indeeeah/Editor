import { forwardRef } from 'react';

import { ElementProps } from '@/types/element';

const Text = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  return (
    <div ref={ref} style={props.style} onClick={props.onClick}>
      {props.text}
    </div>
  );
});

Text.displayName = 'Text';
export default Text;
