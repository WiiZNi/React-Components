import * as React from "react";

function SvgZoom(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M19.806 10.222a9.583 9.583 0 11-19.167 0 9.583 9.583 0 0119.167 0zm-1.917 7.667L23 23M5.75 10.222h8.944M10.222 5.75v8.944"
        stroke={props.color}
        strokeWidth={1.278}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgZoom;
