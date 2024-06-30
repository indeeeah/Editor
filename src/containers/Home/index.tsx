'use client';

import { useState } from 'react';

import Viewer from '@/components/Viewer';
import { useElements } from '@/providers/ElementProvider';

import Editor from './Editor';
import Controller from './Header/Controller';

export default function Home() {
  const { elements, setElements } = useElements();

  const [background, setBackground] = useState({
    color: '#FFFFFF',
    opacity: 1,
  });
  const [selectedElement, setSelectedElement] = useState(null);

  const handleAddDiv = () => {
    setElements([
      ...elements,
      {
        id: elements.length,
        type: 'div',
        style: {
          backgroundColor: '#2B2B2B',
          width: '50%',
          height: '30px',
        },
        text: '디브',
        onClick: () => {
          setSelectedElement(elements.length);
        },
      },
    ]);
  };

  const handleAddButton = () => {
    setElements([
      ...elements,
      {
        id: elements.length,
        type: 'button',
        style: {
          backgroundColor: '#2B2B2B',
          width: '100%',
          height: '30px',
        },
        text: '버튼',
        onClick: () => {
          setSelectedElement(elements.length);
        },
      },
    ]);
  };

  const handleStyle = () => {
    const color = (document.getElementById('color') as HTMLInputElement).value;

    if (selectedElement === null) return;

    const newElements = elements.map(element => {
      if (element.id === selectedElement) {
        return {
          ...element,
          style: {
            ...element.style,
            backgroundColor: color,
          },
        };
      }
      return element;
    });

    setElements(newElements);
  };

  return (
    <>
      <div className="flex h-full grow flex-col bg-gray-primary">
        <Controller />
        <div className="flex h-full items-center justify-center">
          <Viewer background={background} />
        </div>
      </div>
      <Editor background={background} handleBackgroundChange={setBackground} />
    </>
  );
}
