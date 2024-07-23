'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { Element } from '@/types/element';

type ElementContextType = {
  newElement: Element | null;
  setNewElement: Dispatch<SetStateAction<Element | null>>;
  elements: Element[];
  setElements: Dispatch<SetStateAction<Element[]>>;
  selectedElement: Element;
  setSelectedElement: Dispatch<SetStateAction<Element>>;
};

const ElementContext = createContext<ElementContextType>({
  newElement: null,
  setNewElement: () => {},
  elements: [],
  setElements: () => {},
  selectedElement: {} as Element,
  setSelectedElement: () => {},
});

export const useElements = () => {
  const context = useContext(ElementContext);

  if (!context) {
    throw new Error('useElements must be used within a ElementProvider');
  }

  return context;
};

export const ElementProvider = ({ children }: { children: ReactNode }) => {
  const [newElement, setNewElement] = useState<Element | null>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<Element>(elements[0]);

  const value = useMemo(
    () => ({
      newElement,
      setNewElement,
      elements,
      setElements,
      selectedElement,
      setSelectedElement,
    }),
    [newElement, elements, selectedElement],
  );

  return (
    <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
  );
};
