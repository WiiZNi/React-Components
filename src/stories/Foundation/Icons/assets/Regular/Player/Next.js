import * as React from "react";

function SvgNext(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M.5 2.72a1 1 0 011.663-.749l10.49 9.28a1 1 0 010 1.5l-10.49 9.28A1 1 0 01.5 21.28V2.72z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M.5 2.72a1 1 0 011.663-.749l10.49 9.28a1 1 0 010 1.5l-10.49 9.28A1 1 0 01.5 21.28V2.72zM22.5.5h-4a1 1 0 00-1 1v21a1 1 0 001 1h4a1 1 0 001-1v-21a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5.5h-4a1 1 0 00-1 1v21a1 1 0 001 1h4a1 1 0 001-1v-21a1 1 0 00-1-1z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgNext;
