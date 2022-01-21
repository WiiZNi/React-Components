import * as React from "react";

function SvgTarget(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#a)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M23.95 12c0 6.6-5.35 11.95-11.95 11.95S.05 18.6.05 12 5.4.05 12 .05 23.95 5.4 23.95 12z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.1}
        />
        <path d="M12 20.998a9 9 0 100-18 9 9 0 000 18z" stroke={props.color} />
        <path
          d="M12 16.498a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm11-4.5H1m11-11v22m0-21v20"
          stroke={props.color}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgTarget;
