import React from "react";

const Button = ({ children, type, className, fullWidth, isLoading }) => {
  return (
    <button
      className={[
        ...className,
        "text-white",
        "py-4",
        "rounded-md",
        fullWidth && "w-full",
        "text-lg",
        "font-bold",
        "font-customRoboto",
      ].join(" ")}
      type={type}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
};

export default Button;