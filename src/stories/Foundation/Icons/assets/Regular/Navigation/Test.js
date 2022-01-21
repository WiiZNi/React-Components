import * as React from "react";

function SvgTest(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M1 14.214l6.286 5.5L23 4"
        stroke={props.color}
        strokeWidth={1.43}
        strokeLinecap="round"
      />
      <path
        d="M1 14.214l6.286 5.5L23 4"
        stroke={props.color}
        strokeWidth={1.43}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgTest;
