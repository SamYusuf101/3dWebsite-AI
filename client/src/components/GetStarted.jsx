import React from "react";

const GetStarted = ({ type, title, handleClick, customStyles }) => {
  return (
    <div className="item-center justify-center flex">
      <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}>
        {title}
      </button>
    </div>
  );
};

export default GetStarted;
