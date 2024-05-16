import React from "react";

const RightArrow = ({ height, width, color }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.3C0.613401 5.3 0.3 5.6134 0.3 6C0.3 6.3866 0.613401 6.7 1 6.7L1 5.3ZM13.495 6.49498C13.7683 6.22161 13.7683 5.77839 13.495 5.50503L9.0402 1.05025C8.76684 0.776886 8.32362 0.776886 8.05025 1.05025C7.77689 1.32362 7.77689 1.76684 8.05025 2.0402L12.0101 6L8.05025 9.9598C7.77689 10.2332 7.77689 10.6764 8.05025 10.9497C8.32362 11.2231 8.76683 11.2231 9.0402 10.9497L13.495 6.49498ZM1 6.7L13 6.7L13 5.3L1 5.3L1 6.7Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default RightArrow;
