'use client';

import { ComponentType, useRef, useState } from 'react';

import { VariableType } from '@/libs/variables';

import Box from './Box';
import Button from './Button';
import Controller from './Controller';
import Text from './Text';

const variableComponent: Record<VariableType, ComponentType<any>> = {
  [VariableType.Box]: Box,
  [VariableType.Text]: Text,
  [VariableType.Button]: Button,
};

export default function Variables() {
  const variableRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedVariable, setSelectedVariable] = useState<VariableType | null>(
    null,
  );

  const SelectedComponent = selectedVariable
    ? variableComponent[selectedVariable]
    : null;

  return (
    <div
      className={`border-b border-gray-primary p-6 transition-all ${!isOpen && '!py-2'}`}
    >
      <div
        className="flex cursor-pointer items-center justify-between gap-2"
        ref={variableRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm font-bold text-blue">variables</p>
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
      <div className={`pt-4 ${isOpen ? '' : 'hidden'}`}>
        <Controller
          selectedVariable={selectedVariable}
          handleSelectedVariable={setSelectedVariable}
        />
        {SelectedComponent && (
          <div className="mt-4 rounded-md border border-gray-primary p-4">
            <SelectedComponent closeVariables={() => setIsOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
