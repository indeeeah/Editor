import Color from '@/components/Edit/Color';
import Direction from '@/components/Edit/Direction';
import Size from '@/components/Edit/Size';
import { StyleProps } from '@/types/element';

export default function SectionForm({
  sectionStyle,
  setSectionStyle,
}: {
  sectionStyle: StyleProps;
  setSectionStyle: (sectionStyle: StyleProps) => void;
}) {
  return (
    <>
      <p className="text-sm font-bold text-blue">color</p>
      <Color
        variableStyle={sectionStyle}
        handleVariableStyle={setSectionStyle}
        type="backgroundColor"
      />
      <p className="text-sm font-bold text-blue">direction</p>
      <Direction
        variableStyle={sectionStyle}
        handleVariableStyle={setSectionStyle}
      />
      <p className="text-sm font-bold text-blue">size</p>
      <Size
        variableStyle={sectionStyle}
        handleVariableStyle={setSectionStyle}
      />
    </>
  );
}
