import { DirectionType } from '@/libs/style';

export default function Direction({
  variableStyle,
  handleVariableStyle,
}: {
  variableStyle: any;
  handleVariableStyle: (variableStyle: any) => void;
}) {
  const handleDirection = (direction: DirectionType) => {
    handleVariableStyle({ ...variableStyle, direction });
  };

  return (
    <div className="grid grid-cols-2 items-center gap-4 py-4">
      <div
        className="group flex cursor-pointer items-center gap-4"
        onClick={() => handleDirection('horizontal')}
      >
        <div className="flex gap-[4px]">
          <div
            className={`h-8 w-[12px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'horizontal' ? '!bg-gray-600' : ''}`}
          />
          <div
            className={`h-8 w-[12px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'horizontal' ? '!bg-gray-600' : ''}`}
          />
          <div
            className={`h-8 w-[12px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'horizontal' ? '!bg-gray-600' : ''}`}
          />
        </div>
        <span className="text-xs text-gray-600">Horizontal</span>
      </div>
      <div
        className="group flex cursor-pointer items-center gap-4"
        onClick={() => handleDirection('vertical')}
      >
        <div className="flex flex-col gap-[4px]">
          <div
            className={`h-[8px] w-[44px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'vertical' ? '!bg-gray-600' : ''}`}
          />
          <div
            className={`h-[8px] w-[44px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'vertical' ? '!bg-gray-600' : ''}`}
          />
          <div
            className={`h-[8px] w-[44px] bg-gray-400 transition-colors duration-300 group-hover:bg-gray-600 ${variableStyle.direction === 'vertical' ? '!bg-gray-600' : ''}`}
          />
        </div>
        <span className="text-xs text-gray-600">Vertical</span>
      </div>
    </div>
  );
}
