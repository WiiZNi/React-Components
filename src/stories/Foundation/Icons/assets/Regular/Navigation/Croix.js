import * as React from "react";

function SvgCroix(props) {
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
        <path d="M20.485 4.575a.75.75 0 10-1.06-1.06L12 10.94 4.575 3.515a.75.75 0 00-1.06 1.06L10.939 12l-7.424 7.425a.75.75 0 001.06 1.06L12 13.061l7.424 7.424a.75.75 0 001.061-1.06L13.061 12l7.424-7.425z" />
        <path d="M20.485 4.575a.75.75 0 10-1.06-1.06L12 10.94 4.575 3.515a.75.75 0 00-1.06 1.06L10.939 12l-7.424 7.425a.75.75 0 001.06 1.06L12 13.061l7.424 7.424a.75.75 0 001.061-1.06L13.061 12l7.424-7.425z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCroix;
