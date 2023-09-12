import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex w-full h-full mt-16 justify-center items-center">
        title
      </div>
      <div className="flex gap-9 justify-center items-center">
        <div>
          <Link href={"/about/chico"}>EL CHICO</Link>
        </div>
        <div>
          <Link href={"/about/laLey"}>JESSIE LA LEY</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
