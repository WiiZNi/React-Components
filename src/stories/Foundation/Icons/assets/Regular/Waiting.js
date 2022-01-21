import * as React from "react";

function SvgWaiting(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M7 11.998a3 3 0 11-6 0 3 3 0 016 0zm9 0a2 2 0 11-4 0 2 2 0 014 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgWaiting;
