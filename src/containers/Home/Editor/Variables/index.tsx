'use client';

import { ComponentType, useState } from 'react';

import { ElementType } from '@/libs/elements';

import Controller from './Controller';
import SectionVariable from './SectionVariable';

const variableComponent: Record<ElementType, ComponentType<any>> = {
  [ElementType.Section]: SectionVariable,
};

export default function Variables() {
  const [selectedVariable, setSelectedVariable] = useState<ElementType | null>(
    null,
  );

  const SelectedComponent = selectedVariable
    ? variableComponent[selectedVariable]
    : null;

  return (
    <div className="border-b border-gray-primary p-6">
      <p className="text-sm font-bold text-blue">variables</p>
      <div className="pt-4">
        <Controller
          selectedVariable={selectedVariable}
          handleSelectedVariable={setSelectedVariable}
        />
        {SelectedComponent && (
          <div className="mt-4 rounded-md border border-gray-primary p-4">
            <SelectedComponent />
          </div>
        )}
      </div>
    </div>
  );
}
