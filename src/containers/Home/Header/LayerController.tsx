'use client';

import { ForwardRefExoticComponent, RefObject } from 'react';

import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element, ElementProps } from '@/types/element';

import { Section } from './Layer';

const layerComponents: Record<
  Element['type'],
  ForwardRefExoticComponent<ElementProps>
> = {
  [ElementType.Section]: Section,
};

export default function LayerController({
  isOpen,
  layerControllerRef,
}: {
  isOpen: boolean;
  layerControllerRef: RefObject<HTMLDivElement>;
}) {
  const { elements } = useElements();

  return (
    <div
      ref={layerControllerRef}
      className={`absolute w-72 overflow-y-scroll rounded-md border border-gray-400 bg-blue text-white opacity-60 ${isOpen ? 'h-96 max-h-96' : 'max-h-0 opacity-0'} transition-all ease-in-out`}
      onClick={e => e.stopPropagation()}
    >
      {elements.map(element => {
        const LayerComponent = layerComponents[element.type];

        return <LayerComponent key={element.id} props={element} />;
      })}
    </div>
  );
}
