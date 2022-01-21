import * as React from "react";

function SvgDictaphone(props) {
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
        d="M12.5.5a5 5 0 00-5 5v5.25a5 5 0 1010 0V5.5a5 5 0 00-5-5zM9.672 2.672A4 4 0 0116.5 5.5v5.25a4 4 0 11-8 0V5.5a4 4 0 011.172-2.828zM12.5 17.75a7 7 0 007-7V7a.5.5 0 011 0v3.75a8 8 0 01-7.5 7.984v3.516h5.5a.5.5 0 010 1h-12a.5.5 0 010-1H12v-3.516a8 8 0 01-7.5-7.984V7a.5.5 0 011 0v3.75a7 7 0 007 7z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5.5a5 5 0 00-5 5v5.25a5 5 0 1010 0V5.5a5 5 0 00-5-5zM9.672 2.672A4 4 0 0116.5 5.5v5.25a4 4 0 11-8 0V5.5a4 4 0 011.172-2.828zM12.5 17.75a7 7 0 007-7V7a.5.5 0 011 0v3.75a8 8 0 01-7.5 7.984v3.516h5.5a.5.5 0 010 1h-12a.5.5 0 010-1H12v-3.516a8 8 0 01-7.5-7.984V7a.5.5 0 011 0v3.75a7 7 0 007 7z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgDictaphone;
