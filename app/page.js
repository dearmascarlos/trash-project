"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [tapVisible, setTapVisible] = useState(false);

  useEffect(() => {
    // Cuando la página se carga completamente, reproducir el video automáticamente
    videoRef.current.play();
    setTimeout(() => {
      setWelcomeVisible(true);
    }, 5000);
    setTimeout(() => {
      setTapVisible(true);
    }, 10000); // Establece un retraso de 2 segundos para mostrar la imagen
  }, []);

  return (
    <>
      <Link href={"/home"}>
        <div className="flex justify-center items-center w-full h-full">
          <video
            className="h-[700px] w-full object-cover"
            ref={videoRef}
            autoPlay
            muted
            loop>
            <source src="/videos/landing.mp4" type="video/mp4" />
            {/* Agrega otros formatos de video compatibles aquí, como WebM o Ogg */}
          </video>
        </div>
        <Image
          className="absolute transition-all ease-out mt-[-300px]"
          alt="trash-img"
          src={"/images/trash.png"}
          width={600}
          height={900}
        />
        {welcomeVisible && (
          <div className="fixed transition-all ease-out flex justify-center items-center top-[360px] h-20 w-full text-3xl"></div>
        )}
        {tapVisible && (
          <div className="fixed transition-all ease-out flex justify-center items-end botton-0 h-20 w-full text-xl text-gray-700 ">
            Tap to go home...
          </div>
        )}
      </Link>
    </>
  );
}
