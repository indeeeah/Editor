'use client';

import { useCallback, useEffect, useState } from 'react';

import { uuidv7 } from 'uuidv7';

import TextForm from '@/components/Forms/Text';
import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element, TextProps } from '@/types/element';

const defaultText: TextProps = {
  value: '',
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

export default function Text({
  closeVariables,
}: {
  closeVariables: () => void;
}) {
  const { elements, setElements, newElement, setNewElement, selectedElement } =
    useElements();

  const [isReadyToAdd, setIsReadyToAdd] = useState(false);
  const [text, setText] = useState<TextProps>(defaultText);

  const handleText = (text: TextProps) => setText(text);

  const addNewElement = useCallback(() => {
    const element: Element = {
      type: ElementType.Text,
      id: uuidv7(),
      text: `Text ${elements.length + 1}`,
      style: text.style,
      value: text.value,
    };

    if (selectedElement) element.parentId = selectedElement.id;

    setNewElement(element);
  }, [elements.length, text, selectedElement, setNewElement]);

  const onFocus = () => setIsReadyToAdd(true);

  useEffect(() => {
    if (isReadyToAdd && !newElement) addNewElement();
  }, [isReadyToAdd, newElement, addNewElement]);

  useEffect(() => {
    setNewElement(prev => {
      if (!prev) return null;
      return { ...prev, style: text.style, value: text.value };
    });
  }, [text, setNewElement]);

  const trashText = () => {
    setNewElement(null);
    setText(defaultText);
    closeVariables();
  };

  const addText = () => {
    setElements(prevElements => [...prevElements, newElement as Element]);
    setText(defaultText);
    setNewElement(null);
    closeVariables();
  };

  return (
    <>
      <TextForm text={text} setText={handleText} onFocus={onFocus} />
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
          onClick={trashText}
        >
          Trash
        </button>
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
          onClick={addText}
        >
          Add
        </button>
      </div>
    </>
  );
}
