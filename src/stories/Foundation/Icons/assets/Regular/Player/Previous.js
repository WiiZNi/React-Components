import * as React from "react";

function SvgPrevious(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M23.5 21.28a1 1 0 01-1.663.749l-10.49-9.28a1 1 0 010-1.5l10.49-9.28a1 1 0 011.663.751v18.56z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 21.28a1 1 0 01-1.663.749l-10.49-9.28a1 1 0 010-1.5l10.49-9.28a1 1 0 011.663.751v18.56zM5.5.5h-4a1 1 0 00-1 1v21a1 1 0 001 1h4a1 1 0 001-1v-21a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5.5h-4a1 1 0 00-1 1v21a1 1 0 001 1h4a1 1 0 001-1v-21a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPrevious;
