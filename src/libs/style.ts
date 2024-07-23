export type DirectionType = 'horizontal' | 'vertical';

export function convertSize(size: number | string) {
  if (!size) return '0';
  if (typeof size === 'number') return `${size}px`;
  if (!Number.isNaN(Number(size))) return `${size}px`;

  return size;
}

export function convertGrid(grid: number) {
  if (!grid) return {};

  return { gridTemplateColumns: `repeat(${grid}, 1fr)` };
}

export function convertDirection(direction: DirectionType) {
  if (direction === 'horizontal')
    return { display: 'flex', flexDirection: 'row' };
  if (direction === 'vertical')
    return { display: 'flex', flexDirection: 'column' };

  return {};
}
