'use client';

import { ForwardRefExoticComponent } from 'react';

import { ElementType } from '@/libs/elements';
import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';
import { useElements } from '@/providers/ElementProvider';
import { Element, ElementProps } from '@/types/element';

import { Box, Button, Section, Text } from './Elements';

type ViewerProps = {
  background: { backgroundColor: string; opacity: number };
};

const elementComponents: Record<
  Element['type'],
  ForwardRefExoticComponent<ElementProps>
> = {
  [ElementType.Section]: Section,
  [ElementType.Box]: Box,
  [ElementType.Text]: Text,
  [ElementType.Button]: Button,
};

export default function Viewer({ background }: ViewerProps) {
  const { backgroundSize } = useBackgroundSize();
  const { newElement, elements } = useElements();

  const rootElements = elements.filter(element => !element.parentId);
  const rootNewElement = newElement && !newElement.parentId ? newElement : null;

  return (
    <div
      className="overflow-scroll"
      style={{
        width: backgroundSize.width,
        height: backgroundSize.height,
        backgroundColor: background.backgroundColor,
        opacity: background.opacity,
      }}
      id="content"
    >
      <div className="size-full">
        {rootElements.map(element => {
          const ElementComponent = elementComponents[element.type];

          return <ElementComponent key={element.id} props={element} />;
        })}
        {rootNewElement && (
          <>
            {(() => {
              const ElementComponent = elementComponents[rootNewElement.type];

              return (
                <ElementComponent
                  key={rootNewElement.id}
                  props={rootNewElement}
                />
              );
            })()}
          </>
        )}
      </div>
    </div>
  );
}
