import React from "react";
import Headers from "./Headers";

function WithHeader({ children }) {
  return (
    <>
      <Headers />
      {children}
    </>
  );
}

export default WithHeader;
