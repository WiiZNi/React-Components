import * as React from "react";

function SvgGrouperElements(props) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M14.682 1.518H22c.266 0 .482.216.482.482v7.318A.482.482 0 0122 9.8h-7.318a.482.482 0 01-.482-.482V2c0-.266.216-.482.482-.482z"
        stroke={props.color}
        strokeWidth={1.035}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.682 1.518H22c.266 0 .482.216.482.482v7.318A.482.482 0 0122 9.8h-7.318a.482.482 0 01-.482-.482V2c0-.266.216-.482.482-.482zm0 12.423H22c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.483h-7.318a.482.482 0 01-.482-.483v-7.317c0-.267.216-.483.482-.483z"
        stroke={props.color}
        strokeWidth={1.035}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.682 13.941H22c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.483h-7.318a.482.482 0 01-.482-.483v-7.317c0-.267.216-.483.482-.483zM2 1.518h7.318c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.482H2a.482.482 0 01-.482-.482V2c0-.266.216-.482.482-.482z"
        stroke={props.color}
        strokeWidth={1.035}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 1.518h7.318c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.482H2a.482.482 0 01-.482-.482V2c0-.266.216-.482.482-.482zm0 12.423h7.318c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.483H2a.482.482 0 01-.482-.483v-7.317c0-.267.216-.483.482-.483z"
        stroke={props.color}
        strokeWidth={1.035}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.941h7.318c.266 0 .482.216.482.482v7.318a.482.482 0 01-.482.483H2a.482.482 0 01-.482-.483v-7.317c0-.267.216-.483.482-.483z"
        stroke={props.color}
        strokeWidth={1.035}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgGrouperElements;
