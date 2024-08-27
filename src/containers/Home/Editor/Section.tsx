'use client';

import { useEffect, useRef, useState } from 'react';

import { uuidv7 } from 'uuidv7';

import SectionForm from '@/components/Forms/Section';
import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element, SectionStyleProps } from '@/types/element';

const defaultStyle: SectionStyleProps = {
  color: '#FFFFFF',
  opacity: 1,
  direction: 'horizontal',
  width: '100%',
  height: 50,
  grid: 1,
  gap: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
};

export default function Section() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    newElement,
    setNewElement,
    elements,
    setElements,
    setSelectedElement,
  } = useElements();

  const [isOpen, setIsOpen] = useState(false);
  const [section, setSection] = useState<SectionStyleProps>(defaultStyle);

  const addNewElement = () => {
    setNewElement({
      type: ElementType.Section,
      id: uuidv7(),
      text: `Section ${elements.length + 1}`,
      style: section,
    });
  };

  useEffect(() => {
    setNewElement(prev => {
      if (!prev) return null;
      return { ...prev, style: section };
    });
  }, [section, setNewElement]);

  const trashSection = () => {
    setNewElement(null);
    setSection(defaultStyle);
    setIsOpen(false);
  };

  const addSection = () => {
    setElements(prevElements => [...prevElements, newElement as Element]);
    setSelectedElement(newElement);
    setSection(defaultStyle);
    setNewElement(null);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative border-b border-gray-primary p-6 transition-all ${!isOpen && '!py-2'}`}
    >
      <div
        className="flex cursor-pointer items-center justify-between gap-2"
        ref={sectionRef}
        onClick={() => {
          if (isOpen) trashSection();
          else addNewElement();
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-sm font-bold text-blue">section</p>
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? 'rotate-180' : ''} ml-2 transition-all`}
        >
          <path d="M10 13.5C9.87 13.5 9.74 13.45 9.65 13.35L4.65 8.34999C4.45 8.14999 4.45 7.83999 4.65 7.63999C4.85 7.43999 5.16 7.43999 5.36 7.63999L10.01 12.29L14.66 7.63999C14.86 7.43999 15.17 7.43999 15.37 7.63999C15.57 7.83999 15.57 8.14999 15.37 8.34999L10.37 13.35C10.27 13.45 10.14 13.5 10.02 13.5H10Z" />
        </svg>
      </div>
      <div className={`flex flex-col pt-4 ${isOpen ? '' : 'hidden'}`}>
        <SectionForm section={section} setSection={setSection} />
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
            onClick={trashSection}
          >
            Trash
          </button>
          <button
            type="button"
            className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
            onClick={addSection}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
