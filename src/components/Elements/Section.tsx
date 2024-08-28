import { CSSProperties, forwardRef } from 'react';

import {
  convertDirection,
  convertGrid,
  convertSize,
  DirectionType,
} from '@/libs/style';
import { useElements } from '@/providers/ElementProvider';
import { ElementProps } from '@/types/element';

import Selected from './Selected';

const Section = forwardRef<HTMLDivElement, ElementProps>(({ props }, ref) => {
  const {
    elements,
    selectedElement,
    setSelectedElement,
    isModifying,
    setIsModifying,
  } = useElements();

  const convertStyle = (): CSSProperties => {
    const section = props.style;

    return {
      display: 'block',
      backgroundColor: section.backgroundColor,
      opacity: section.opacity,
      width: convertSize(section.width),
      height: convertSize(section.height),
      paddingTop: convertSize(section.paddingTop),
      paddingRight: convertSize(section.paddingRight),
      paddingBottom: convertSize(section.paddingBottom),
      paddingLeft: convertSize(section.paddingLeft),
      marginTop: convertSize(section.marginTop),
      marginRight: convertSize(section.marginRight),
      marginBottom: convertSize(section.marginBottom),
      marginLeft: convertSize(section.marginLeft),
      gap: convertSize(section.gap),
      ...convertGrid(section.grid),
      ...convertDirection(section.direction as DirectionType),
    };
  };

  return (
    <>
      <div
        ref={ref}
        style={{
          ...convertStyle(),
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
          <Selected style={convertStyle()} />
          <button
            type="button"
            className={`absolute bottom-0.5 right-0.5 hidden h-4 w-12 items-center justify-center rounded-tl-sm border-l border-t border-brightBlue-500 bg-brightBlue-100 text-xs font-bold text-gray-700 opacity-60 ${isModifying ? 'hidden' : 'group-hover:flex'}`}
            onClick={() => setIsModifying(true)}
          >
            modify
          </button>
        </div>
        {props.children}
      </div>
    </>
  );
});

Section.displayName = 'Section';
export default Section;
