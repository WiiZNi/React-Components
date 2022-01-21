import * as React from "react";

function SvgQuestionAudio(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 18.5v5m0-5v5m0-23a4 4 0 00-4 4v7a4 4 0 108 0v-7a4 4 0 00-4-4v0z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 .5a4 4 0 00-4 4v7a4 4 0 108 0v-7a4 4 0 00-4-4v0z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.5v3a7 7 0 11-14 0v-3"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.5v3a7 7 0 11-14 0v-3"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgQuestionAudio;
