import * as React from "react";

function SvgBurgerMenu(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M1 4h22M1 4h22M1 12h22M1 12h22M1 20h22M1 20h22"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgBurgerMenu;
