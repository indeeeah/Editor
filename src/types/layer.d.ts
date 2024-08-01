import { ElementProps } from './element';

export type LayerProps = {
  setIsLayerControllerOpen: (isOpen: boolean) => void;
} & ElementProps;
