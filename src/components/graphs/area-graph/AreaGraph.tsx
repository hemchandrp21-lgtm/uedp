import React from 'react';
import './AreaGraph.css';

export interface AreaGraphProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color theme variant matching Figma GRAPHS component (node-id 106-1020) */
  variant?: 'success' | 'danger' | 'warning' | 'slate';
  /** Primary curve data points */
  data?: number[];
  /** Secondary dashed baseline curve data points */
  baselineData?: number[];
  /** Show node dots along primary curve */
  showDots?: boolean;
  /** Show dashed baseline comparison line */
  showBaseline?: boolean;
  /** Height in px */
  height?: number;
}

const defaultPrimaryData: Record<string, number[]> = {
  success: [40, 55, 42, 72, 60, 88, 72, 95, 82],
  danger: [75, 90, 58, 82, 48, 62, 32, 48, 38],
  warning: [68, 84, 52, 76, 42, 56, 28, 42, 32],
  slate: [72, 88, 56, 80, 46, 60, 30, 45, 35],
};

export const AreaGraph: React.FC<AreaGraphProps> = ({
  variant = 'success',
  data,
  baselineData,
  showDots = true,
  showBaseline = true,
  height = 120,
  className = '',
  ...props
}) => {
  const primaryPoints = data || defaultPrimaryData[variant] || defaultPrimaryData.success;
  const secondaryPoints = baselineData || primaryPoints.map((v) => Math.max(10, v - 12));

  const width = 400;

  const getCoordinates = (points: number[]) => {
    const min = Math.min(...points, ...secondaryPoints);
    const max = Math.max(...points, ...secondaryPoints);
    const range = max - min || 1;

    return points.map((val, idx) => ({
      x: (idx / (points.length - 1)) * width,
      y: height - ((val - min) / range) * (height - 24) - 12,
    }));
  };

  const primaryCoords = getCoordinates(primaryPoints);
  const secondaryCoords = getCoordinates(secondaryPoints);

  const buildPath = (coords: { x: number; y: number }[]) => {
    let d = `M ${coords[0].x},${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const curr = coords[i];
      const next = coords[i + 1];
      const cp1x = curr.x + (next.x - curr.x) / 2;
      const cp1y = curr.y;
      const cp2x = curr.x + (next.x - curr.x) / 2;
      const cp2y = next.y;
      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
    }
    return d;
  };

  const primaryPath = buildPath(primaryCoords);
  const secondaryPath = buildPath(secondaryCoords);
  const areaPath = `${primaryPath} L ${width},${height} L 0,${height} Z`;

  return (
    <div
      className={`uedp-area-graph uedp-area-graph--${variant} ${className}`}
      style={{ height: `${height}px` }}
      {...props}
    >
      <svg
        className="uedp-area-graph__svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`gradient-area-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={
                variant === 'success'
                  ? '#0d2d26'
                  : variant === 'danger'
                  ? '#3d1217'
                  : variant === 'warning'
                  ? '#3a1b09'
                  : '#1e293b'
              }
              stopOpacity="0.95"
            />
            <stop
              offset="100%"
              stopColor={
                variant === 'success'
                  ? '#061713'
                  : variant === 'danger'
                  ? '#1c080a'
                  : '#180a03'
              }
              stopOpacity="0.8"
            />
          </linearGradient>
        </defs>

        {/* 1. Translucent Dark Gradient Area */}
        <path className="uedp-area-graph__area" d={areaPath} fill={`url(#gradient-area-${variant})`} />

        {/* 2. Secondary Dashed Baseline Curve */}
        {showBaseline && (
          <path className="uedp-area-graph__dashed-line" d={secondaryPath} />
        )}

        {/* 3. Primary Solid Curve */}
        <path className="uedp-area-graph__solid-line" d={primaryPath} />

        {/* 4. Glowing Node Dots */}
        {showDots &&
          primaryCoords.map((pt, idx) => (
            <circle
              key={idx}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              className="uedp-area-graph__dot"
            />
          ))}
      </svg>
    </div>
  );
};

export const Graphs = AreaGraph;
export default AreaGraph;
