import React from "react";

const FillStart = ({height,width,color}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00006 1.00003V1C6.00006 5.29851 3.01493 6 1 6C5.23881 6 6 9.0597 6 11C6 7.26866 8.61194 6 11.0001 6C6.00006 6 6.00006 1.89562 6.00006 1.00003Z"
          fill={color}
          stroke={color}
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default FillStart;
