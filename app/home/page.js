"use client";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Image alt="home-img" src={"/home-img.png"} width={600} height={900} />
      <Link href={"/home/galery"}>GALERY</Link>
    </div>
  );
};

export default Home;
