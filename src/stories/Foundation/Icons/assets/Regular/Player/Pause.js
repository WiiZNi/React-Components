import * as React from "react";

function SvgPause(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M9 3H5a1 1 0 00-1 1v17a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3H5a1 1 0 00-1 1v17a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1zm10 0h-4a1 1 0 00-1 1v17a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 3h-4a1 1 0 00-1 1v17a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPause;
