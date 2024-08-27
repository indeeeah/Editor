import Color from '@/components/Edit/Color';
import Direction from '@/components/Edit/Direction';
import Size from '@/components/Edit/Size';
import { SectionStyleProps } from '@/types/element';

export default function SectionForm({
  section,
  setSection,
}: {
  section: SectionStyleProps;
  setSection: (section: SectionStyleProps) => void;
}) {
  return (
    <>
      <p className="text-sm font-bold text-blue">color</p>
      <Color variableStyle={section} handleVariableStyle={setSection} />
      <p className="text-sm font-bold text-blue">direction</p>
      <Direction variableStyle={section} handleVariableStyle={setSection} />
      <p className="text-sm font-bold text-blue">size</p>
      <Size variableStyle={section} handleVariableStyle={setSection} />
    </>
  );
}
