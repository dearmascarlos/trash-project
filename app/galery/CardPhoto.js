"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PHOTOS } from "@/public/photosGalery/photo";
import ViewPhotoModal from "../components/modals/ViewPhotoModal";

const CardPhoto = () => {
  // modalViewPhotoControl
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  const handleCardClick = (image) => {
    setSelectedImage(image);
    handleOpenClose();
  };
  // }, []);

  console.log(selectedImage);
  return (
    <div class="flex flex-wrap justify-center h-full w-full">
      {PHOTOS.map((photo) => {
        return (
          <div
            class="h-28 w-28 flex justify-center items-center p-1"
            key={photo.id}
            onClick={() => handleCardClick(photo.id)}>
            <ViewPhotoModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleOpenClose={handleOpenClose}
              id={photo.id}
              selectedImage={selectedImage}
            />
            <Image
              alt="galery-elemt"
              src={`/images/${photo.id}.png`}
              width={112}
              height={112}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardPhoto;
