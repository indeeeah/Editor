import { useElements } from '@/providers/ElementProvider';

import BackgroundColor from './BackgroundColor';
import Section from './Section';
import Title from './Title';
import Variables from './Variables';

type EditorProps = {
  background: { color: string; opacity: number };
  handleBackgroundChange: (background: {
    color: string;
    opacity: number;
  }) => void;
};

export default function Editor({
  background,
  handleBackgroundChange,
}: EditorProps) {
  const { elements } = useElements();

  return (
    <div className="flex h-full w-[350px] flex-col border-l border-gray-primary">
      <Title />
      <BackgroundColor
        background={background}
        handleBackgroundChange={handleBackgroundChange}
      />
      <Section />
      {elements.length > 0 && <Variables />}
    </div>
  );
}
