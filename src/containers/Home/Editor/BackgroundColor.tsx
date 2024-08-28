'use client';

import Color from '@/components/Edit/Color';

type BackgroundColorProps = {
  background: { backgroundColor: string; opacity: number };
  handleBackgroundChange: (background: {
    backgroundColor: string;
    opacity: number;
  }) => void;
};

export default function BackgroundColor({
  background,
  handleBackgroundChange,
}: BackgroundColorProps) {
  return (
    <div className="border-b border-gray-primary p-6">
      <p className="text-sm font-bold text-blue">background color</p>
      <Color
        variableStyle={background}
        handleVariableStyle={handleBackgroundChange}
        type="backgroundColor"
      />
    </div>
  );
}
