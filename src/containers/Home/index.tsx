'use client';

import { ForwardRefExoticComponent, useState } from 'react';

import DraggableCanvas from '@/components/Layout/DraggableCanvas';
import { Section } from '@/components/Modify';
import Viewer from '@/components/Viewer';
import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element, ElementProps } from '@/types/element';

import Editor from './Editor';
import Controller from './Header/Controller';

const modifyingComponents: Record<
  Element['type'],
  ForwardRefExoticComponent<ElementProps>
> = {
  [ElementType.Section]: Section,
};

export default function Home() {
  const { selectedElement, setSelectedElement, isModifying, setIsModifying } =
    useElements();

  const [background, setBackground] = useState({
    color: '#FFFFFF',
    opacity: 1,
  });
  const [workSheetSize, setWorkSheetSize] = useState({
    width: 1000,
    height: 1000,
  });

  return (
    <>
      <div className="flex h-full grow flex-col bg-gray-300">
        <Controller />
        <div
          className="relative flex h-full overflow-scroll"
          onClick={() => {
            setSelectedElement(null);
            setIsModifying(false);
          }}
        >
          <div
            className="absolute flex bg-gray-primary"
            style={{
              width: `${workSheetSize.width}px`,
              height: `${workSheetSize.height}px`,
            }}
          >
            <div onClick={e => e.stopPropagation()}>
              <DraggableCanvas
                type="viewer"
                setWorkSheetSize={setWorkSheetSize}
              >
                {selectedElement &&
                  isModifying &&
                  (() => {
                    const ModifyingComponent =
                      modifyingComponents[selectedElement.type];

                    return (
                      <ModifyingComponent
                        key={selectedElement.id}
                        props={selectedElement}
                      />
                    );
                  })()}
                <Viewer background={background} />
              </DraggableCanvas>
            </div>
          </div>
        </div>
      </div>
      <Editor background={background} handleBackgroundChange={setBackground} />
    </>
  );
}
