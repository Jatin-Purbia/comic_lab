import React from "react";
import conferences from "../conferences/index.jsx";

const Conferences = () => {
  return (
    <div>
      {conferences()}
    </div>
  );
};

export default Conferences;