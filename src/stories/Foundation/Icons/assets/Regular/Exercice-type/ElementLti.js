import * as React from "react";

function SvgElementLti(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M21.5 2.5h-19a2 2 0 00-2 2v15a2 2 0 002 2h19a2 2 0 002-2v-15a2 2 0 00-2-2z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 2.5h-19a2 2 0 00-2 2v15a2 2 0 002 2h19a2 2 0 002-2v-15a2 2 0 00-2-2zm-21 5h23m-23 0h23"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.75a.25.25 0 110 .5.25.25 0 010-.5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.75a.25.25 0 110 .5.25.25 0 010-.5m3 0a.25.25 0 110 .5.25.25 0 010-.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4.75a.25.25 0 110 .5.25.25 0 010-.5zm3 0a.25.25 0 110 .5.25.25 0 010-.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.75a.25.25 0 110 .5.25.25 0 010-.5zM9 13.5H4a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5H4a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5zm-5.5-3H17m-13.5 0H17m-4.5 3h7m-7 0h7m-7 3h7m-7 0h7M3.66 13.633l5.68 4.734m-5.68-4.734l5.68 4.734m-5.68 0l5.68-4.734m-5.68 4.734l5.68-4.734"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgElementLti;
