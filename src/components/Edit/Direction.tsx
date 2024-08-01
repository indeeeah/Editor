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

  const handleGrid = (grid: number) => {
    handleVariableStyle({ ...variableStyle, grid });
  };

  const handleGap = (gap: number) => {
    handleVariableStyle({ ...variableStyle, gap });
  };

  return (
    <div className="flex items-center gap-4 py-4">
      <div
        className="group flex cursor-pointer items-center gap-2"
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
        className="group flex cursor-pointer items-center gap-2"
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
      <div className="flex flex-col items-end gap-1">
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">grid</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            id="grid"
            defaultValue="1"
            onChange={event => {
              const grid = Number(event.target.value);
              handleGrid(grid);
            }}
          />
        </div>
        <div className="flex gap-1">
          <span className="text-xs text-gray-600">gap</span>
          <input
            type="text"
            className="w-8 border border-gray-primary text-center text-xs outline-none"
            id="gap"
            defaultValue="0"
            onChange={event => {
              const gap = Number(event.target.value);
              handleGap(gap);
            }}
          />
        </div>
      </div>
    </div>
  );
}
