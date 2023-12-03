import React from 'react';

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      overflow="visible"
      fill="#2F2F3A"
      stroke="none"
    >
      <defs>
        <circle
          id="loader"
          r="4"
          cx="50"
          cy="50"
          transform="translate(0 -30)"
        />
      </defs>
      <use xlinkHref="#loader" transform="rotate(0 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(45 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.125s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(90 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.25s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(135 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.375s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(180 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.5s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(225 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.625s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(270 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.75s"
          repeatCount="indefinite"
        ></animate>
      </use>
      <use xlinkHref="#loader" transform="rotate(315 50 50)">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          begin="0.875s"
          repeatCount="indefinite"
        ></animate>
      </use>
    </svg>
  );
};

export default Spinner;
