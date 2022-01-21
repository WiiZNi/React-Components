import * as React from "react";

function SvgPlay(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#a)" stroke={props.color}>
        <path d="M2.5.862L21.992 12 2.5 23.138V.862z" />
        <path d="M2.5.862L21.992 12 2.5 23.138V.862z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPlay;
