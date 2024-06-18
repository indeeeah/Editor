'use client';

import { ForwardRefExoticComponent } from 'react';

import { ElementType } from '@/libs/elements';
import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';
import { useElements } from '@/providers/ElementProvider';
import { Element, ElementProps } from '@/types/element';

import { Box, Button, Section, Text } from './Elements';

type ViewerProps = {
  background: { color: string; opacity: number };
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
  const { elements } = useElements();
  console.log(elements);

  return (
    <div
      className="overflow-scroll rounded-md"
      style={{
        width: backgroundSize.width,
        height: backgroundSize.height,
        backgroundColor: background.color,
        opacity: background.opacity,
      }}
      id="content"
    >
      <div className="size-full">
        {elements.map(element => {
          const ElementComponent = elementComponents[element.type];

          return <ElementComponent key={element.id} props={element} />;
        })}
      </div>
    </div>
  );
}
