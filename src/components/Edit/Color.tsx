import { useEffect, useRef, useState } from 'react';

import ColorPicker from '../ColorPicker';

export default function Color({
  variableStyle,
  handleVariableStyle,
  type,
}: {
  variableStyle: any;
  handleVariableStyle: (variableStyle: any) => void;
  type: 'color' | 'backgroundColor';
}) {
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setColorPickerOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const getColorByType = () => {
    switch (type) {
      case 'color':
        return variableStyle.color;
      case 'backgroundColor':
        return variableStyle.backgroundColor;
      default:
        return variableStyle.color;
    }
  };

  const handleColorByType = (color: string) => {
    switch (type) {
      case 'color':
        handleVariableStyle({ ...variableStyle, color });
        break;
      case 'backgroundColor':
        handleVariableStyle({ ...variableStyle, backgroundColor: color });
        break;
      default:
        handleVariableStyle({ ...variableStyle, color });
        break;
    }
  };

  return (
    <>
      <div className="flex items-center gap-8 py-4">
        <div
          className="flex cursor-pointer gap-4"
          ref={colorPickerRef}
          onClick={() => setColorPickerOpen(true)}
        >
          <div
            className="size-6 rounded-sm border border-gray-primary"
            style={{
              backgroundColor: getColorByType(),
            }}
          />
          <span className="text-sm text-gray-600">
            {getColorByType().toUpperCase()}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">opacity</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            id="opacity"
            defaultValue={variableStyle.opacity * 100}
            onChange={event => {
              const opacity = Number(event.target.value) / 100;
              handleVariableStyle({ ...variableStyle, opacity });
            }}
          />
          <span className="text-xs text-gray-600">%</span>
        </div>
      </div>
      <div
        className={`absolute z-10 pt-2 ${colorPickerOpen ? 'block' : 'hidden'}`}
      >
        <ColorPicker
          defaultColor={variableStyle.color}
          onChange={color => handleColorByType(color)}
        />
      </div>
    </>
  );
}
