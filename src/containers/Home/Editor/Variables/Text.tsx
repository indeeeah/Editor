'use client';

import { useState } from 'react';

import TextForm from '@/components/Forms/Text';
import { useElements } from '@/providers/ElementProvider';
import { TextProps } from '@/types/element';

const defaultText: TextProps = {
  text: '',
  focus: false,
  style: {
    color: '#000000',
    font: 'Arial',
    fontSize: 16,
    fontWeight: 400,
    italic: false,
    underline: false,
    strikeThrough: false,
    align: 'left',
  },
};

export default function Text() {
  const { setNewElement } = useElements();

  const [text, setText] = useState<TextProps>(defaultText);

  const handleText = (text: TextProps) => setText(text);

  return (
    <>
      <TextForm text={text} setText={handleText} />
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
        >
          Trash
        </button>
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
        >
          Add
        </button>
      </div>
    </>
  );
}
