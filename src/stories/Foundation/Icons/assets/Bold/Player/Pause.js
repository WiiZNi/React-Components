import * as React from "react";

function SvgPause(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 1h4A1.5 1.5 0 0110 2.5v19A1.5 1.5 0 018.5 23h-4A1.5 1.5 0 013 21.5v-19A1.5 1.5 0 014.5 1zm11 0h4A1.5 1.5 0 0121 2.5v19a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-19A1.5 1.5 0 0115.5 1z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 1h4A1.5 1.5 0 0110 2.5v19A1.5 1.5 0 018.5 23h-4A1.5 1.5 0 013 21.5v-19A1.5 1.5 0 014.5 1zm11 0h4A1.5 1.5 0 0121 2.5v19a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-19A1.5 1.5 0 0115.5 1z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgPause;
