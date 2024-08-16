'use client';

import { useState } from 'react';

import DraggableCanvas from '@/components/Layout/DraggableCanvas';
import Viewer from '@/components/Viewer';

import Editor from './Editor';
import Controller from './Header/Controller';

export default function Home() {
  const [background, setBackground] = useState({
    color: '#FFFFFF',
    opacity: 1,
  });
  const [workSheetSize, setWorkSheetSize] = useState({
    width: 1000,
    height: 1000,
  });

  return (
    <>
      <div className="flex h-full grow flex-col bg-gray-300">
        <Controller />
        <div className="relative flex h-full overflow-scroll">
          <div
            className="absolute flex bg-gray-primary"
            style={{
              width: `${workSheetSize.width}px`,
              height: `${workSheetSize.height}px`,
            }}
          >
            <DraggableCanvas type="viewer" setWorkSheetSize={setWorkSheetSize}>
              <Viewer background={background} />
            </DraggableCanvas>
          </div>
        </div>
      </div>
      <Editor background={background} handleBackgroundChange={setBackground} />
    </>
  );
}
