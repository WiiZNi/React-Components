import * as React from "react";

function SvgInterrogation(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        clipPath="url(#a)"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.056 1C5.7 1 .556 5.253.556 10.5a8.737 8.737 0 003.4 6.741L1.556 23l6.372-3.641a13.6 13.6 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.407 1 12.056 1z" />
        <path d="M9.056 8a3 3 0 114.2 2.751 2 2 0 00-1.2 1.833V13m0 2.25a.25.25 0 110 .5.25.25 0 010-.5z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgInterrogation;
