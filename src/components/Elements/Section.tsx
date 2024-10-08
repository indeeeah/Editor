import { forwardRef } from 'react';

import { convertStyle } from '@/libs/style';
import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

import Component from '../Viewer/Component';

import Selected from './Selected';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  const {
    elements,
    selectedElement,
    setSelectedElement,
    isModifying,
    setIsModifying,
    newElement,
  } = useElements();

  const childNewElement =
    newElement?.parentId === props.id ? newElement : undefined;

  return (
    <>
      <div
        ref={ref}
        style={{
          ...convertStyle(props.style),
          position: 'relative',
        }}
        className={`${selectedElement?.id !== props.id ? 'hover:border-2 hover:border-brightBlue-400' : ''}`}
        onClick={() => {
          const element = elements.find(e => e.id === props.id);
          if (!element) return;
          setSelectedElement(props);
        }}
      >
        <div
          className={`${selectedElement?.id !== props.id ? 'hidden' : ''} group`}
          onClick={e => e.stopPropagation()}
        >
          <Selected style={convertStyle(props.style)} />
          <button
            type="button"
            className={`absolute bottom-0.5 right-0.5 hidden h-4 w-12 items-center justify-center rounded-tl-sm border-l border-t border-brightBlue-500 bg-brightBlue-100 text-xs font-bold text-gray-700 opacity-60 ${isModifying ? 'hidden' : 'group-hover:flex'}`}
            onClick={() => setIsModifying(true)}
          >
            modify
          </button>
        </div>
        {props.children?.map(child => {
          const children = elements.filter(e => e.parentId === child.id);

          return (
            <Component key={child.id} props={{ element: child, children }} />
          );
        })}
        {childNewElement && <Component props={{ element: childNewElement }} />}
      </div>
    </>
  );
});

Section.displayName = 'Section';
export default Section;
