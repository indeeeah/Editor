import { ElementType } from '@/libs/elements';

export type Element = {
  type: ElementType;
  [key: string]: any;
};

export type ElementProps = {
  props: Element;
};

export type SectionStyleProps = {
  color: string;
  opacity: number;
  direction: 'horizontal' | 'vertical';
  width: string;
  height: number;
  grid: number;
  gap: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export type TextProps = {
  text: string;
  color: string;
  font: string;
  fontSize: number;
  fontWeight: number;
  italic: boolean;
  underline: boolean;
  strikeThrough: boolean;
  align: 'left' | 'center' | 'right';
  focus: boolean;
};
