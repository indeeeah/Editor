import { useState } from 'react';

import { uuidv7 } from 'uuidv7';

import Color from '@/components/Edit/Color';
import Direction from '@/components/Edit/Direction';
import Size from '@/components/Edit/Size';
import { ElementType } from '@/libs/elements';
import { DirectionType, convertDirection, convertSize } from '@/libs/style';
import { useElements } from '@/providers/ElementProvider';

export default function SectionVariable() {
  const { elements, setElements } = useElements();

  const [section, setSection] = useState({
    color: '#FFFFFF',
    opacity: 1,
    direction: 'horizontal',
    width: '100%',
    height: 50,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  });

  const addSection = () => {
    const style = {
      backgroundColor: section.color,
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
      ...convertDirection(section.direction as DirectionType),
    };

    setElements([
      ...elements,
      {
        type: ElementType.Section,
        id: uuidv7(),
        style,
      },
    ]);
  };

  return (
    <div className="flex flex-col">
      <p className="text-sm font-bold text-blue">color</p>
      <Color variableStyle={section} handleVariableStyle={setSection} />
      <p className="text-sm font-bold text-blue">direction</p>
      <Direction variableStyle={section} handleVariableStyle={setSection} />
      <p className="text-sm font-bold text-blue">size</p>
      <Size variableStyle={section} handleVariableStyle={setSection} />
      <button
        type="button"
        className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
        onClick={addSection}
      >
        Add
      </button>
    </div>
  );
}
