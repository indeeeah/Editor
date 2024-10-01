import { forwardRef } from 'react';

import { convertAlign, convertStyle } from '@/libs/style';
import { ElementProps } from '@/types/element';

const Text = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  return (
    <div className="w-full" style={convertAlign(props.style)}>
      <div ref={ref} onClick={props.onClick}>
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
