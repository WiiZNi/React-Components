import * as React from "react";

function SvgQuestionATrous(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M23.25.75H.75v13.5h22.5V.75z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.25.75H.75v13.5h22.5V.75zm0 18h-10.5v4.5h10.5v-4.5z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.25 18.75h-10.5v4.5h10.5v-4.5zM.75 5.25h22.5m-22.5 0h22.5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuestionATrous;
