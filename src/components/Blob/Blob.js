import React from "react";
import "./blob.css";

const Blob = ({ color, position }) => {
  return (
    <svg
      className={position}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M69.2,-22.9C75.6,-2.8,57,25,36.3,36.9C15.7,48.8,-7,44.8,-27.5,31.4C-48.1,18,-66.5,-4.8,-61.6,-22.9C-56.6,-41,-28.3,-54.3,1.5,-54.8C31.4,-55.3,62.8,-43,69.2,-22.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
