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

  return (
    <div
      className="overflow-hidden rounded-md"
      style={{
        width: backgroundSize.width,
        height: backgroundSize.height,
        backgroundColor: background.color,
        opacity: background.opacity,
      }}
      id="content"
    >
      {elements.map(element => {
        const ElementComponent = elementComponents[element.type];

        return <ElementComponent key={element.id} props={element} />;
      })}
    </div>
  );
}
