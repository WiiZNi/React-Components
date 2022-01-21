import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M2 12h20M2 12h20M12 2l10 10-10 10"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2l10 10-10 10"
        stroke={props.color}
        strokeWidth={1.429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowRight;
