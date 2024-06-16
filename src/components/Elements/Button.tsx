import { forwardRef } from 'react';

import { ElementProps } from '@/types/element';

const Button = forwardRef<HTMLButtonElement, ElementProps>(({ props }, ref) => {
  return (
    <button ref={ref} style={props.style} onClick={props.onClick}>
      {props.text}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
