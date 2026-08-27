import React, { useState } from 'react';
import './SegmentedControl.css';

export interface SegmentedControlProps {
  /** Array of option labels */
  options?: string[];
  /** Currently selected option value */
  value?: string;
  /** Callback when option changes */
  onChange?: (value: string) => void;
  /** Additional CSS class name */
  className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options = ['daily', 'Weakly', 'Monthly'],
  value,
  onChange,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState<string>(options[0] || 'daily');
  const activeValue = value !== undefined ? value : internalValue;

  const handleSelect = (option: string) => {
    if (value === undefined) {
      setInternalValue(option);
    }
    onChange?.(option);
  };

  return (
    <div className={`uedp-segmented-control ${className}`}>
      {options.map((option) => {
        const isSelected = activeValue.toLowerCase() === option.toLowerCase();
        return (
          <button
            key={option}
            type="button"
            className={`uedp-segmented-control__tab ${
              isSelected ? 'uedp-segmented-control__tab--active' : ''
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
