import { SketchPicker } from 'react-color';

export default function ColorPicker({
  defaultColor,
  onChange,
}: {
  defaultColor: string;
  onChange: (color: string) => void;
}) {
  return (
    <SketchPicker
      color={defaultColor}
      onChangeComplete={color => onChange(color.hex)}
    />
  );
}
