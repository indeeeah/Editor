import BackgroundColor from './BackgroundColor';
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
  return (
    <div className="flex h-full w-[350px] flex-col border-l border-gray-primary">
      <Title />
      <BackgroundColor
        background={background}
        handleBackgroundChange={handleBackgroundChange}
      />
      <Variables />
    </div>
  );
}
