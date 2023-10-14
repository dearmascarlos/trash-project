import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const LineUpModal = ({ isOpen, handleOpenClose }) => {
  // console.log(isOpen);
  return (
    <div>
      <div className="w-6">
        <CIcon icon={icon.cibInstagram} />
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black/60 flex justify-center items-center overflow-y-auto ${
          isOpen ? "" : "hidden"
        }`}
        onClick={handleOpenClose}>
        <div className="relative flex w-9/12 overflow-hidden bg-white shadow-2xl rounded-xl h-4/6">
          {/* Contenido de la ventana modal */}
        </div>
      </div>
    </div>
  );
};

export default LineUpModal;
