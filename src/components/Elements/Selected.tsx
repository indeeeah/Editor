export default function Selected({ style }: { style: any }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.4,
        width: style.width,
        height: style.height,
      }}
    >
      <div
        style={{
          display: style.display,
          gridTemplateColumns: style.gridTemplateColumns,
          gap: style.gap,
          width: style.width,
          height: style.height,
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
          paddingLeft: style.paddingLeft,
          paddingRight: style.paddingRight,
          backgroundColor: '#FFD0A3',
          border: '1px solid red',
          boxSizing: 'border-box',
        }}
      >
        {Array.from({ length: style.gridTemplateColumns }).map((_, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#A3BBFF',
              border: '1px solid blue',
              boxSizing: 'border-box',
            }}
          />
        ))}
      </div>
    </div>
  );
}
