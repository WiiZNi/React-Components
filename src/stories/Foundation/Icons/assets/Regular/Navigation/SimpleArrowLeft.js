import * as React from "react";

function SvgSimpleArrowLeft(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M17 22L7 12 17 2"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22L7 12 17 2"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSimpleArrowLeft;
