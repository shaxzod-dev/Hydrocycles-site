import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="transition-all text-title-color text-2xl font-bold">
      {children}
    </h2>
  );
};

export default Title;
