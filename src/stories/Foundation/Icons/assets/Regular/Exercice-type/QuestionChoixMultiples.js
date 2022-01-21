import * as React from "react";

function SvgQuestionChoixMultiples(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M8.5 4.498h15m-15 0h15m-20 10a2 2 0 100-4 2 2 0 000 4z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 14.498a2 2 0 100-4 2 2 0 000 4zm5-2h15m-15 0h15M1 20.25l1.5 1.5 3-3.75"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 20.25l1.5 1.5 3-3.75M1 5.25l1.5 1.5L5.5 3"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 5.25l1.5 1.5L5.5 3m3 17.498h15m-15 0h15"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuestionChoixMultiples;
