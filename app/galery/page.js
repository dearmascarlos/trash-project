import React from "react";
import CardPhoto from "./CardPhoto";

const GaleryPage = () => {
  return (
    <div className="flex flex-col mt-24 w-full h-full">
      <CardPhoto />
      <CardPhoto />
    </div>
  );
};

export default GaleryPage;
