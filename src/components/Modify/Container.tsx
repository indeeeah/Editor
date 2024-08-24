import { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useElements } from '@/providers/ElementProvider';

export default function Container({ children }: { children: ReactNode }) {
  const { setSelectedElement, setIsModifying } = useElements();

  return (
    <div className="absolute -right-96 z-10 rounded-md bg-white p-4 shadow-md">
      <div className="flex h-6 justify-end">
        <IoMdClose
          className="size-5 cursor-pointer text-blue"
          onClick={() => {
            setIsModifying(false);
            setSelectedElement(null);
          }}
        />
      </div>
      {children}
    </div>
  );
}
