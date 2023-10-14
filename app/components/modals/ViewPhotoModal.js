import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Image from "next/image";

const ViewPhotoModal = ({ isOpen, handleOpenClose, selectedImage }) => {
  console.log(selectedImage);
  console.log(isOpen);
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/10 flex justify-center items-center overflow-y-auto ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleOpenClose}>
      <div className="relative flex w-fit overflow-hidden shadow-2xl rounded-xl h-fit">
        <Image
          alt="photo"
          width={350}
          height={600}
          src={`/images/${selectedImage}.png`}
        />
      </div>
    </div>
  );
};

export default ViewPhotoModal;
