import { ForwardRefExoticComponent } from 'react';

import { ElementType } from '@/libs/elements';
import { Element, ElementProps } from '@/types/element';

import { Box, Button, Section, Text } from '../Elements';

type ComponentProps = {
  props: { element: Element; children?: Element[] };
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

export default function Component({ props }: ComponentProps) {
  const { element, children } = props;

  const ElementComponent = elementComponents[element.type];

  return (
    <ElementComponent props={{ ...element, children: children || undefined }} />
  );
}
