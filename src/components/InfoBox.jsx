import React from "react";
import classNames from "classnames";
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";

const InfoBox = ({
  infoTitle,
  infoValue,
  bgColor,
  statChange,
  btnText,
  btnActive,
  btnAction,
}) => {
  return (
    <div
      className={`${bgColor} rounded-lg border-2 border-247-dark-text py-8 px-7 flex flex-col items-start justify-between`}
    >
      <h4 className="text-white font-customRoboto font-medium text-xl">
        {infoTitle}
      </h4>
      <div className="mt-4 flex items-center relative">
        <h2 className="font-customRoboto text-white text-3xl font-medium">
          {infoValue}
        </h2>
        {statChange &&
          (statChange > 0 ? (
            <MdOutlineArrowUpward
              className="absolute left-48 text-247-increment-green"
              size={40}
            />
          ) : (
            <MdOutlineArrowDownward
              className="absolute left-48 text-247-decrement-red"
              size={40}
            />
          ))}
      </div>
      {btnText && (
        <button
          onClick={() => btnAction()}
          className={classNames(
            "text-lg",
            "font-semibold",
            "px-7",
            "py-2",
            "rounded",
            "mt-4",
            "bg-white",
            "disabled:bg-247-inactive-btn",
            "disabled:text-247-gray-accent5",
            "disabled:cursor-not-allowed"
          )}
          disabled={!btnActive}
        >
          {btnText}
        </button>
      )}
    </div>
  );
};

export default InfoBox;
