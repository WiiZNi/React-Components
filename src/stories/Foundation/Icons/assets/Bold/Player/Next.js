import * as React from "react";

function SvgNext(props) {
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
        <path d="M18.5 0h4A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-21A1.5 1.5 0 0118.5 0zm-16 1.385L13 10.863a1.538 1.538 0 010 2.274L2.5 22.615A1.5 1.5 0 010 21.479V2.521a1.5 1.5 0 012.5-1.136z" />
        <path d="M18.5 0h4A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-21A1.5 1.5 0 0118.5 0zm-16 1.385L13 10.863a1.538 1.538 0 010 2.274L2.5 22.615A1.5 1.5 0 010 21.479V2.521a1.5 1.5 0 012.5-1.136z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgNext;
