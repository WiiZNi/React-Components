import * as React from "react";

function SvgInstructions(props) {
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
        <path d="M3.85 8.605a7.064 7.064 0 007.843 1.578M7.5 15a4.25 4.25 0 100-8.5 4.25 4.25 0 000 8.5zm-7 8.5a7 7 0 1114 0H.5zm13.48-11.466c.49.192 1 .326 1.52.4v3.07c.5-.5 3.5-3 4-3.461a6.014 6.014 0 004-5.539A6.265 6.265 0 0017 .5a6.48 6.48 0 00-6.122 4" />
        <path d="M14.251 6.241a.25.25 0 110 .5.25.25 0 010-.5zm2.749 0a.25.25 0 110 .5.25.25 0 010-.5m2.75 0a.249.249 0 01.231.346.25.25 0 01-.408.081.25.25 0 010-.354.25.25 0 01.177-.073z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgInstructions;
