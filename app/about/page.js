"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const About = () => {
  return (
    <div>
      <div className="flex mt-24 mb-4 justify-center items-center">
        Since 2007
      </div>
      <div className="flex flex-col w-full gap-9 pr-2">
        <div className="flex w-full" id="about-card">
          <div className="flex flex-col gap-4 p-6">
            <Link
              href={"/about/chico"}
              className="flex w-fit border border-slate-600 rounded-xl py-4 px-8">
              EL CHICO
            </Link>

            <a>
              Propuesta de descripcion en menos<br></br> de 6 palabras
            </a>
            <div className="flex self-end gap-4">
              <Link href={"https://www.twitter.com"}>
                <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                  <TwitterIcon />
                </div>
              </Link>
              <Link href={"https://www.instagram.com"}>
                <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                  <InstagramIcon />
                </div>
              </Link>

              <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                <ElectricBoltIcon />
              </div>
            </div>
          </div>
          <Image
            alt="about-chico"
            src={`/images/3.png`}
            width={180}
            height={112}
            className="rounded-xl p-2"
          />
        </div>
        <div className="flex w-full" id="about-card">
          <div className="flex flex-col gap-4 p-6">
            <Link
              href={"/about/laLey"}
              className="flex w-fit border border-slate-600 rounded-xl py-4 px-6">
              JESSIE LA LEY
            </Link>
            <a>
              Propuesta de descripcion en menos<br></br> de 6 palabras
            </a>
            <div className="flex self-end gap-4">
              <Link href={"https://www.twitter.com"}>
                <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                  <TwitterIcon />
                </div>
              </Link>
              <Link href={"https://www.instagram.com"}>
                <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                  <InstagramIcon />
                </div>
              </Link>

              <div className="w-fit flex self-end border border-slate-600 rounded-xl py-2 px-2 ">
                <ElectricBoltIcon />
              </div>
            </div>
          </div>
          <Image
            alt="about-chico"
            src={`/images/19.png`}
            width={180}
            height={112}
            className="rounded-xl p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
