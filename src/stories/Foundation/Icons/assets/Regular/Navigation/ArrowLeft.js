import * as React from "react";

function SvgArrowLeft(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M22 12H2m20 0H2m10 10L2 12 12 2"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22L2 12 12 2"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowLeft;
