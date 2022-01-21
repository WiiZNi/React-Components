import * as React from "react";

function SvgRecomposerTexte(props) {
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
        d="M13 3.5a.5.5 0 000 1h10a.5.5 0 000-1H13zM.5 12a.5.5 0 01.5-.5h22a.5.5 0 010 1H1a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h9a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3.5a.5.5 0 000 1h10a.5.5 0 000-1H13zM.5 12a.5.5 0 01.5-.5h22a.5.5 0 010 1H1a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h9a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
        fill={props.color}
      />
      <rect
        x={0.5}
        y={1.5}
        width={10}
        height={5}
        rx={0.5}
        stroke={props.color}
      />
      <rect
        x={0.5}
        y={1.5}
        width={10}
        height={5}
        rx={0.5}
        stroke={props.color}
      />
      <rect
        x={13.5}
        y={17.5}
        width={10}
        height={5}
        rx={0.5}
        stroke={props.color}
      />
      <rect
        x={13.5}
        y={17.5}
        width={10}
        height={5}
        rx={0.5}
        stroke={props.color}
      />
    </svg>
  );
}

export default SvgRecomposerTexte;
