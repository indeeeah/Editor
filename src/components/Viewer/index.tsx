'use client';

import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';
import { useElements } from '@/providers/ElementProvider';

import Component from './Component';

type ViewerProps = {
  background: { backgroundColor: string; opacity: number };
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
          const children = elements.filter(e => e.parentId === element.id);

          return <Component key={element.id} props={{ element, children }} />;
        })}
        {rootNewElement && <Component props={{ element: rootNewElement }} />}
      </div>
    </div>
  );
}
