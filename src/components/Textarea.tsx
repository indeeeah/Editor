'use client';

import { ChangeEvent, forwardRef, useEffect, useState } from 'react';

type Props = {
  text?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ text = '', placeholder, autoComplete, onChange, className }, ref) => {
    const [value, setValue] = useState(text);

    useEffect(() => {
      setValue(text);
    }, [text]);

    const handleChange = (newValue: string) => {
      setValue(newValue);

      if (onChange) {
        const syntheticEvent = {
          target: {
            value: newValue,
          },
        };
        onChange(syntheticEvent as ChangeEvent<HTMLTextAreaElement>);
      }
    };

    const handleTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const inputValue = e.target.value;

      handleChange(inputValue);
    };

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          placeholder={placeholder}
          value={value}
          className={`block w-full border border-gray-secondary bg-gray-50 px-1 text-xs focus:bg-white focus:outline-none ${className}`}
          onChange={handleTextValue}
          autoComplete={autoComplete}
        />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
