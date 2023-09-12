"use client";
import p1 from "@/public/texts/home/p1";
import CIcon from "@coreui/icons-react";
import * as i from "@coreui/icons";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Image
        alt="home-img"
        src={"/images/home-img.png"}
        width={600}
        height={900}
      />
      <div className="w-fit h-fit p-4">{p1}</div>
      <div className="w-fit h-fit p-4">{p1}</div>
      <div className="flex pt-4 justify-around">
        {/* <div className="flex flex-col border border-white shadow-white shadow-lg rounded-md p-2 items-center">
          <CIcon icon={i.cilImage} className="w-8" />
          GALERY
        </div>
        <div className="flex flex-col w-[74px] border border-white shadow-white shadow-lg rounded-md p-2 items-center">
          <CIcon icon={i.cilRoom} className="w-8" />
          SHOP
        </div> */}
      </div>
      {/* <Link href={"/home/galery"}>GALERY</Link> */}
    </div>
  );
};

export default Home;
