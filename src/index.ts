// 1. Controls
export { Button } from './components/controls/button/Button';
export type { ButtonProps } from './components/controls/button/Button';

export { SegmentedControl } from './components/controls/segmented-control/SegmentedControl';
export type { SegmentedControlProps } from './components/controls/segmented-control/SegmentedControl';

export { MetricValue } from './components/controls/metric-value/MetricValue';
export type { MetricValueProps } from './components/controls/metric-value/MetricValue';

// 2. Navigation
export { NavItem } from './components/navigation/nav-item/NavItem';
export type { NavItemProps } from './components/navigation/nav-item/NavItem';

export { SidebarNav, Frame158, defaultSidebarItems } from './components/navigation/sidebar-nav/SidebarNav';
export type { SidebarNavProps, SidebarNavItemData } from './components/navigation/sidebar-nav/SidebarNav';

export { TopNavBar, TopNav } from './components/navigation/top-nav-bar/TopNavBar';
export type { TopNavBarProps } from './components/navigation/top-nav-bar/TopNavBar';

// 3. Badges & Tags
export { StatBadge } from './components/badges/stat-badge/StatBadge';
export type { StatBadgeProps } from './components/badges/stat-badge/StatBadge';

export { Status } from './components/badges/status/Status';
export type { StatusProps } from './components/badges/status/Status';

export { IconBadge } from './components/badges/icon-badge/IconBadge';
export type { IconBadgeProps } from './components/badges/icon-badge/IconBadge';

export { NumberIcon } from './components/badges/number-icon/NumberIcon';
export type { NumberIconProps } from './components/badges/number-icon/NumberIcon';

export { PercentageBadge } from './components/badges/percentage-badge/PercentageBadge';
export type { PercentageBadgeProps } from './components/badges/percentage-badge/PercentageBadge';

export { StockBadge } from './components/badges/stock-badge/StockBadge';
export type { StockBadgeProps } from './components/badges/stock-badge/StockBadge';

export { PercentageTag, Percentages } from './components/badges/percentages/PercentageTag';
export type { PercentageTagProps } from './components/badges/percentages/PercentageTag';

// 4. Cards
export { SmartInsightCard, SmartInsides } from './components/cards/smart-insight-card/SmartInsightCard';
export type { SmartInsightCardProps } from './components/cards/smart-insight-card/SmartInsightCard';

export { MetricCard, Cards } from './components/cards/metric-card/MetricCard';
export type { MetricCardProps } from './components/cards/metric-card/MetricCard';

// 5. Graphs & Data Visualizations
export { ProgressBar, Bar } from './components/graphs/progress-bar/ProgressBar';
export type { ProgressBarProps } from './components/graphs/progress-bar/ProgressBar';

export { RegionBar, Regions } from './components/graphs/region-bar/RegionBar';
export type { RegionBarProps } from './components/graphs/region-bar/RegionBar';

export { SparklineGraph, InsideGraphs } from './components/graphs/sparkline-graph/SparklineGraph';
export type { SparklineGraphProps } from './components/graphs/sparkline-graph/SparklineGraph';

export { AreaGraph, Graphs } from './components/graphs/area-graph/AreaGraph';
export type { AreaGraphProps } from './components/graphs/area-graph/AreaGraph';

// 6. Alerts
export { CautionBanner, Cautions } from './components/alerts/caution-banner/CautionBanner';
export type { CautionBannerProps } from './components/alerts/caution-banner/CautionBanner';

// 7. Icons
export { Icon } from './components/icons/Icon';
export type { IconProps, IconName } from './components/icons/Icon';

// 8. Analytics & Telemetry Utilities
export { initGA, trackEvent, trackComponentInteraction, GA_MEASUREMENT_ID } from './utils/analytics';
