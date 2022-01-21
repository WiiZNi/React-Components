import * as React from "react";

function SvgElementScorm(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M21.5 2h-19a2 2 0 00-2 2v16a2 2 0 002 2h19a2 2 0 002-2V4a2 2 0 00-2-2z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 2h-19a2 2 0 00-2 2v16a2 2 0 002 2h19a2 2 0 002-2V4a2 2 0 00-2-2zM.5 7h23M.5 7h23"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.25a.25.25 0 110 .5.25.25 0 010-.5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.25a.25.25 0 110 .5.25.25 0 010-.5m3 0a.25.25 0 110 .5.25.25 0 010-.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4.25a.25.25 0 110 .5.25.25 0 010-.5zm3 0a.25.25 0 110 .5.25.25 0 010-.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.25a.25.25 0 110 .5.25.25 0 010-.5zM6.5 7v15m0-15v15m0-8h17m-17 0h17"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgElementScorm;
