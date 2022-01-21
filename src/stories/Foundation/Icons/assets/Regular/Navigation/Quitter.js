import * as React from "react";

function SvgQuitter(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M17 6l6 6-6 6m6-6H7m4 11H3a2 2 0 01-2-2V3a2 2 0 012-2h8"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuitter;
