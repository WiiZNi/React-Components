import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        clipPath="url(#a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color}
      >
        <path d="M23.25 12.75a.75.75 0 100-1.5h-10.5V.75a.75.75 0 00-1.5 0v10.5H.75a.75.75 0 000 1.5h10.5v10.5a.75.75 0 001.5 0v-10.5h10.5z" />
        <path d="M23.25 12.75a.75.75 0 100-1.5h-10.5V.75a.75.75 0 00-1.5 0v10.5H.75a.75.75 0 000 1.5h10.5v10.5a.75.75 0 001.5 0v-10.5h10.5z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPlus;
