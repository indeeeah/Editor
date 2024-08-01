'use client';

import { useState } from 'react';

import Viewer from '@/components/Viewer';

import Editor from './Editor';
import Controller from './Header/Controller';

export default function Home() {
  const [background, setBackground] = useState({
    color: '#FFFFFF',
    opacity: 1,
  });

  return (
    <>
      <div className="flex h-full grow flex-col bg-gray-primary">
        <Controller />
        <div className="flex h-full items-center justify-center">
          <Viewer background={background} />
        </div>
      </div>
      <Editor background={background} handleBackgroundChange={setBackground} />
    </>
  );
}
