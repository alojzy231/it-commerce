import React from 'react';

interface ICrosshairIcon {
  className?: string;
}

export default function CrosshairIcon({ className }: ICrosshairIcon): JSX.Element {
  return (
    <svg
      className={className}
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3.06066" y1="1.93934" x2="32.0607" y2="30.9393" stroke="white" strokeWidth="3" />
      <line
        y1="-1.5"
        x2="41.0122"
        y2="-1.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 31.617 3)"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}

CrosshairIcon.defaultProps = {
  className: '',
};
