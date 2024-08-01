'use client';

import { ForwardRefExoticComponent, RefObject } from 'react';

import { ElementType } from '@/libs/elements';
import { useElements } from '@/providers/ElementProvider';
import { Element } from '@/types/element';
import { LayerProps } from '@/types/layer';

import { Section } from './Layer';

const layerComponents: Record<
  Element['type'],
  ForwardRefExoticComponent<LayerProps>
> = {
  [ElementType.Section]: Section,
};

export default function LayerController({
  layerControllerRef,
  isOpen,
  setIsLayerControllerOpen,
}: {
  layerControllerRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  setIsLayerControllerOpen: (isOpen: boolean) => void;
}) {
  const { elements } = useElements();

  return (
    <div
      ref={layerControllerRef}
      className={`absolute w-72 overflow-y-scroll rounded-md border border-gray-400 bg-blue text-white opacity-60 ${isOpen ? 'h-96 max-h-96' : 'max-h-0 opacity-0'} z-10 transition-all ease-in-out`}
      onClick={e => e.stopPropagation()}
    >
      {elements.map(element => {
        const LayerComponent = layerComponents[element.type];

        return (
          <LayerComponent
            key={element.id}
            props={element}
            setIsLayerControllerOpen={setIsLayerControllerOpen}
          />
        );
      })}
    </div>
  );
}
