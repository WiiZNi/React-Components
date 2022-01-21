import * as React from "react";

function SvgPrevious(props) {
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
        <path d="M1.5 0h4A1.5 1.5 0 017 1.5v21A1.5 1.5 0 015.5 24h-4A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zM11 10.863l10.5-9.478A1.5 1.5 0 0124 2.521v18.958a1.5 1.5 0 01-2.5 1.136L11 13.136a1.54 1.54 0 010-2.273z" />
        <path d="M1.5 0h4A1.5 1.5 0 017 1.5v21A1.5 1.5 0 015.5 24h-4A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zM11 10.863l10.5-9.478A1.5 1.5 0 0124 2.521v18.958a1.5 1.5 0 01-2.5 1.136L11 13.136a1.54 1.54 0 010-2.273z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPrevious;
