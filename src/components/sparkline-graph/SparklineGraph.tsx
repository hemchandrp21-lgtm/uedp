import React from 'react';
import './SparklineGraph.css';

export interface SparklineGraphProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant matching Figma INSIDE GRAPHS component (node-id 78-265) */
  variant?: 'danger' | 'success' | 'warning' | 'purple' | 'slate';
  /** Custom data array of numbers */
  data?: number[];
  /** Height of the graph in px */
  height?: number;
}

const defaultData: Record<string, number[]> = {
  danger: [90, 75, 85, 65, 70, 50, 60, 35, 45, 20, 30, 15],
  success: [15, 25, 20, 35, 30, 50, 60, 55, 70, 75, 80, 95],
  warning: [85, 70, 80, 60, 72, 52, 60, 40, 50, 25, 35, 18],
  purple: [88, 72, 82, 62, 70, 55, 62, 42, 52, 28, 38, 20],
  slate: [86, 70, 80, 60, 68, 52, 60, 40, 48, 26, 36, 18],
};

export const SparklineGraph: React.FC<SparklineGraphProps> = ({
  variant = 'danger',
  data,
  height = 48,
  className = '',
  ...props
}) => {
  const chartData = data || defaultData[variant] || defaultData.danger;
  const viewWidth = 300;
  const viewHeight = height;

  const min = Math.min(...chartData);
  const max = Math.max(...chartData);
  const range = max - min || 1;

  const normalized = chartData.map((val, idx) => ({
    x: (idx / (chartData.length - 1)) * viewWidth,
    y: viewHeight - ((val - min) / range) * (viewHeight - 10) - 5,
  }));

  let pathD = `M ${normalized[0].x},${normalized[0].y}`;
  for (let i = 0; i < normalized.length - 1; i++) {
    const curr = normalized[i];
    const next = normalized[i + 1];
    const cp1x = curr.x + (next.x - curr.x) / 2;
    const cp1y = curr.y;
    const cp2x = curr.x + (next.x - curr.x) / 2;
    const cp2y = next.y;
    pathD += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
  }

  const areaD = `${pathD} L ${viewWidth},${viewHeight} L 0,${viewHeight} Z`;

  return (
    <div
      className={`uedp-sparkline-graph uedp-sparkline-graph--${variant} ${className}`}
      style={{ height: `${height}px` }}
      {...props}
    >
      <svg
        className="uedp-sparkline-graph__svg"
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        preserveAspectRatio="none"
      >
        <path className="uedp-sparkline-graph__area" d={areaD} />
        <path className="uedp-sparkline-graph__line" d={pathD} />
      </svg>
    </div>
  );
};

export const InsideGraphs = SparklineGraph;
export default SparklineGraph;
