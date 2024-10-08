import { useElements } from '@/providers/ElementProvider';

import BackgroundColor from './BackgroundColor';
import Section from './Section';
import Title from './Title';
import Variables from './Variables';

type EditorProps = {
  background: { backgroundColor: string; opacity: number };
  handleBackgroundChange: (background: {
    backgroundColor: string;
    opacity: number;
  }) => void;
};

export default function Editor({
  background,
  handleBackgroundChange,
}: EditorProps) {
  const { selectedElement } = useElements();

  return (
    <div className="flex h-full w-[350px] flex-col border-l border-gray-primary">
      <Title />
      <BackgroundColor
        background={background}
        handleBackgroundChange={handleBackgroundChange}
      />
      <Section />
      {selectedElement && <Variables />}
    </div>
  );
}
