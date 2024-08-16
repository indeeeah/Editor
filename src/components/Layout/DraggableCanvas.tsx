'use client';

import {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useBackgroundSize } from '@/providers/BackgroundSizeProvider';

export default function DraggableCanvas({
  type,
  setWorkSheetSize,
  children,
}: {
  type: 'viewer';
  setWorkSheetSize?: Dispatch<
    SetStateAction<{ width: number; height: number }>
  >;
  children: ReactNode;
}) {
  const { backgroundSize } = useBackgroundSize();

  const canvasRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const canvasStyle = () => {
    switch (type) {
      case 'viewer':
        return {
          width: backgroundSize.width,
          height: backgroundSize.height,
        };
      default:
        break;
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDragging(true);
    setStartPos({
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop,
    });

    canvas.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDragging) return;

    const x = e.clientX - startPos.x;
    const y = e.clientY - startPos.y;
    canvas.style.left = `${x}px`;
    canvas.style.top = `${y}px`;

    if (!setWorkSheetSize || typeof setWorkSheetSize !== 'function') return;

    setWorkSheetSize(prev => ({
      width: Math.max(prev.width, x + canvas.offsetWidth),
      height: Math.max(prev.height, y + canvas.offsetHeight),
    }));
  };

  useEffect(() => {
    const handleWindowMouseUp = () => {
      setIsDragging(false);
      if (canvasRef.current) {
        canvasRef.current.style.cursor = 'grab';
      }
    };

    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute flex items-center justify-center"
      style={{
        width: `${canvasStyle()?.width}px`,
        height: `${canvasStyle()?.height}px`,
        cursor: 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
