import { ElementType } from '@/libs/elements';

export type Element = {
  type: ElementType;
  [key: string]: any;
};

export type ElementProps = {
  props: Element;
};
