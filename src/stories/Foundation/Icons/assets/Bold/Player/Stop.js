import * as React from "react";

function SvgStop(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill={props.color} d="M0 0h24v24H0z" />
    </svg>
  );
}

export default SvgStop;
