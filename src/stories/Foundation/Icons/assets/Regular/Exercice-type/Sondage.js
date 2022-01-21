import * as React from "react";

function SvgSondage(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M5.25 6H1v4.25h4.25V6z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 6H1v4.25h4.25V6zM8.5 8.498h15m-15 0h15M1 16.25l1.5 1.5 3-3.75"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 16.25l1.5 1.5 3-3.75m3 2.498h15m-15 0h15"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSondage;
