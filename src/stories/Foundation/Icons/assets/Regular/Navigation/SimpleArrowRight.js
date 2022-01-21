import * as React from "react";

function SvgSimpleArrowRight(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M7 2l10 10L7 22"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 2l10 10L7 22"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSimpleArrowRight;
