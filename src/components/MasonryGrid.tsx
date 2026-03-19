import React from 'react';

interface MasonryGridProps {
  children: React.ReactNode[];
  columns?: number;
  gap?: number;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({
  children,
  columns = 3,
  gap = 16
}) => {
  // Create arrays for each column
  const columnWrapper: Record<string, React.ReactNode[]> = {};
  const result: React.ReactNode[] = [];

  // Calculate responsive columns based on viewport
  const actualColumns = Math.min(children.length, columns);

  // Create column arrays
  for (let i = 0; i < actualColumns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // Distribute children among columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % actualColumns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${gap}px` }}>
        {children[i]}
      </div>
    );
  }

  // Prepare the columns for rendering
  for (let i = 0; i < actualColumns; i++) {
    result.push(
      <div
        key={i}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: i > 0 ? `${gap}px` : 0
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%'
      }}
    >
      {result}
    </div>
  );
};

export default MasonryGrid;