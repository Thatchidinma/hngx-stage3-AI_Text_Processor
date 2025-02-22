import * as React from "react";
const MenuIcon = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.5}
      d="M15 25C10.286 25 7.92893 25 6.46447 23.5355C5 22.0711 5 19.714 5 15C5 10.286 5 7.92893 6.46447 6.46447C7.92893 5 10.286 5 15 5C19.714 5 22.0711 5 23.5355 6.46447C25 7.92893 25 10.286 25 15C25 19.714 25 22.0711 23.5355 23.5355C22.0711 25 19.714 25 15 25Z"
      fill="#F9FAFA"
    />
    <circle cx={15} cy={15} r={4} fill="#F9FAFA" />
  </svg>
);
export default MenuIcon;
