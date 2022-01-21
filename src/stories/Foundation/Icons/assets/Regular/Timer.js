import * as React from "react";

function SvgTimer(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 12.746L4.404 2.534M15 3.731A9.5 9.5 0 113.92 7.746m7.58-2.992a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTimer;
