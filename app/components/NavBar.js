"use client";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex h-10 justify-between bg-gray-800 py-2 px-10 ">
      <div className="flex gap-6 w-3/4">
        <Link href={"/home"}>
          <span className="text-white">HOME</span>
        </Link>
        <Link href={"/contact"}>
          <span className="text-white">CONTACT</span>
        </Link>
        <Link href={"/about"}>
          <span className="text-white">ABOUT</span>
        </Link>
      </div>
    </div>
  );
};
