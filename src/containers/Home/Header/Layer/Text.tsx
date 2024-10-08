import { forwardRef } from 'react';
import { IoIosTrash, IoMdEye } from 'react-icons/io';

import { useElements } from '@/providers/ElementProvider';
import { LayerProps } from '@/types/layer';

const Text = forwardRef<HTMLDivElement, LayerProps>(
  ({ props, setIsLayerControllerOpen }, ref) => {
    const { setElements, setSelectedElement } = useElements();

    return (
      <div
        ref={ref}
        className="flex h-12 w-full cursor-pointer items-center border-b-2 border-gray-400"
      >
        <div
          className="flex h-full w-12 items-center justify-center bg-gray-600 text-sm"
          onClick={() =>
            setElements(prev =>
              prev.map(element =>
                element.id === props.id
                  ? {
                      ...element,
                      style: {
                        ...element.style,
                        display:
                          element.style.display === 'none' ? 'block' : 'none',
                      },
                    }
                  : element,
              ),
            )
          }
        >
          <IoMdEye
            className={`size-5 ${props.style.display === 'none' ? 'text-blue' : ''}`}
          />
        </div>
        <div
          className="flex"
          onClick={() => {
            setSelectedElement(props);
            setIsLayerControllerOpen(false);
          }}
        >
          <div className="flex h-full w-12 items-center justify-center">
            <div className="flex size-8 items-center justify-center border border-gray-400">
              T
            </div>
          </div>
          <input
            type="text"
            className="bg-transparent pl-2 text-sm underline outline-none"
            value={props.text}
            onChange={event => {
              const text = event.target.value;

              setElements(prev =>
                prev.map(element =>
                  element.id === props.id ? { ...element, text } : element,
                ),
              );
            }}
          />
        </div>
        <div
          className="flex h-full w-12 items-center justify-center text-sm"
          onClick={() =>
            setElements(prev => prev.filter(element => element.id !== props.id))
          }
        >
          <IoIosTrash className="size-5" />
        </div>
      </div>
    );
  },
);

Text.displayName = 'Text';
export default Text;
