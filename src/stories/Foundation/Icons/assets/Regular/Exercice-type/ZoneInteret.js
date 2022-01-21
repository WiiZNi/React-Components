import * as React from "react";

function SvgZoneInteret(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        clipPath="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.color}
      >
        <path d="M2.5.5h-1a1 1 0 00-1 1v1" />
        <path d="M2.5.5h-1a1 1 0 00-1 1v1m18-2h1a1 1 0 011 1v1" />
        <path d="M18.5.5h1a1 1 0 011 1v1M5.5.498H9m-3.5 0H9m3 0h3.5m-3.5 0h3.5M2.5 20.5h-1a1 1 0 01-1-1v-1" />
        <path d="M2.5 20.5h-1a1 1 0 01-1-1v-1m5 1.998H9m-3.5 0H9m3 0h1m-1 0h1m-12.5-15v3.5m0-3.5v3.5m0 3v3.5m0-3.5v3.5m20-10v3.5m0-3.5v3.5m0 3v1m0-1v1m-1.523 5.979l4.144-1.036a.5.5 0 00.062-.951l-9.146-3.6a.501.501 0 00-.649.649l3.6 9.145a.5.5 0 00.95-.062l1.039-4.145z" />
        <path d="M18.977 18.977l4.144-1.036a.5.5 0 00.062-.951l-9.146-3.6a.501.501 0 00-.649.649l3.6 9.145a.5.5 0 00.95-.062l1.039-4.145z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgZoneInteret;
