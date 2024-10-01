'use client';

import { useCallback, useEffect, useState } from 'react';

import { uuidv7 } from 'uuidv7';

import TextForm from '@/components/Forms/Text';
import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element, StyleProps } from '@/types/element';

const defaultStyle: StyleProps = {
  color: '#000000',
  backgroundColor: 'transparent',
  font: 'Arial',
  fontSize: 16,
  fontWeight: 400,
  italic: false,
  underline: false,
  strikeThrough: false,
  align: 'left',
  opacity: 1,
};

export default function Text({
  closeVariables,
}: {
  closeVariables: () => void;
}) {
  const {
    elements,
    setElements,
    newElement,
    setNewElement,
    selectedElement,
    setSelectedElement,
  } = useElements();

  const [isReadyToAdd, setIsReadyToAdd] = useState(false);
  const [text, setText] = useState<string>('');
  const [fontStyle, setFontStyle] = useState<StyleProps>(defaultStyle);

  const handleText = (text: string) => setText(text);

  const addNewElement = useCallback(() => {
    const element: Element = {
      type: ElementType.Text,
      id: uuidv7(),
      text: `Text ${elements.length + 1}`,
      style: fontStyle,
      value: text,
    };

    const isDendent = () => selectedElement?.type === ElementType.Section;
    if (isDendent()) element.parentId = selectedElement?.id;

    setNewElement(element);
  }, [elements.length, text, fontStyle, selectedElement, setNewElement]);

  const onFocus = () => setIsReadyToAdd(true);

  useEffect(() => {
    if (isReadyToAdd && !newElement) addNewElement();
  }, [isReadyToAdd, newElement, addNewElement]);

  useEffect(() => {
    setNewElement(prev => {
      if (!prev) return null;
      return { ...prev, style: fontStyle, value: text };
    });
  }, [text, fontStyle, setNewElement]);

  const trashText = () => {
    setNewElement(null);
    setText('');
    setFontStyle(defaultStyle);
    closeVariables();
  };

  const addText = () => {
    setElements(prevElements => [...prevElements, newElement as Element]);
    setText('');
    setFontStyle(defaultStyle);
    setNewElement(null);
    setSelectedElement(null);
    closeVariables();
  };

  return (
    <>
      <TextForm
        text={text}
        setText={handleText}
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        onFocus={onFocus}
      />
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
