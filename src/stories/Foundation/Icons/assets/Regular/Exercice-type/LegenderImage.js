import * as React from "react";

function SvgLegenderImage(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M4.5 8.5H14m-9.5 0H14m-9.5 3H14m-9.5 0H14m-9.5-6h7m-7 0h7m-7 9H12m-7.5 0H12m-7.5 3h4m-4 0h4m0 6h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5m-3.8 13.8l-4.2 1.2 1.2-4.2 7.179-7.179a2.12 2.12 0 113 3L15.7 22.3z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.12 2.12 0 113 3L15.7 22.3zm3.279-9.279l3 3m-3-3l3 3M12.7 19.3l3 3m-3-3l3 3"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLegenderImage;
