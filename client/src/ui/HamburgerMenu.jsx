import React from "react";

const HamburgerMenu = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
  );
};

export default HamburgerMenu;
