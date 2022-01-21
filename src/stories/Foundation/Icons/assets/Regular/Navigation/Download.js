import * as React from "react";

function SvgDownload(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M23 18.218v1.913A2.87 2.87 0 0120.131 23H3.869A2.87 2.87 0 011 20.131v-1.913"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 18.218v1.913A2.87 2.87 0 0120.131 23H3.869A2.87 2.87 0 011 20.131v-1.913m11-.11V1m0 17.108V1m7 10.108l-7 7-7-7"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11.108l-7 7-7-7"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDownload;
