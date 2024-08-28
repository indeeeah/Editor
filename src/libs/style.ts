import { CSSProperties } from 'react';

import { StyleProps } from '@/types/element';

export type DirectionType = 'horizontal' | 'vertical';

export function convertSize(size: number | string) {
  if (!size) return '0';
  if (typeof size === 'number') return `${size}px`;
  if (!Number.isNaN(Number(size))) return `${size}px`;

  return size;
}

export function convertGrid(grid: number) {
  if (!grid) return {};

  return { display: 'grid', gridTemplateColumns: grid };
}

export function convertDirection(direction: DirectionType): {
  display?: 'flex';
  flexDirection?: 'row' | 'column';
} {
  if (direction === 'horizontal')
    return { display: 'flex', flexDirection: 'row' };
  if (direction === 'vertical')
    return { display: 'flex', flexDirection: 'column' };

  return {};
}

export function convertStyle(style: StyleProps): CSSProperties {
  return {
    display: 'block',
    backgroundColor: style.backgroundColor,
    opacity: style.opacity,
    width: style.width ? convertSize(style.width) : undefined,
    height: style.height ? convertSize(style.height) : undefined,
    paddingTop: style.paddingTop ? convertSize(style.paddingTop) : undefined,
    paddingRight: style.paddingRight
      ? convertSize(style.paddingRight)
      : undefined,
    paddingBottom: style.paddingBottom
      ? convertSize(style.paddingBottom)
      : undefined,
    paddingLeft: style.paddingLeft ? convertSize(style.paddingLeft) : undefined,
    marginTop: style.marginTop ? convertSize(style.marginTop) : undefined,
    marginRight: style.marginRight ? convertSize(style.marginRight) : undefined,
    marginBottom: style.marginBottom
      ? convertSize(style.marginBottom)
      : undefined,
    marginLeft: style.marginLeft ? convertSize(style.marginLeft) : undefined,
    gap: style.gap ? convertSize(style.gap) : undefined,
    ...(style.grid ? convertGrid(style.grid) : {}),
    ...(style.direction
      ? convertDirection(style.direction as DirectionType)
      : {}),
  };
}
