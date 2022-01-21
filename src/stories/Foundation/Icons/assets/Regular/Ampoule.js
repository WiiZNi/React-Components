import * as React from "react";

function SvgAmpoule(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M14.667 22.5H9.2M11.933 2v1.367m10.934 8.2H21.5m0-6.834L20.133 6.1M1 11.567h1.367m0-6.834L3.733 6.1M21.5 18.4l-1.367-1.367M2.367 18.4l1.366-1.367m14.35-4.783A6.15 6.15 0 109.2 17.733v1.35a.683.683 0 00.683.684h4.1a.683.683 0 00.684-.684v-1.35a6.133 6.133 0 003.416-5.483v0z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAmpoule;
