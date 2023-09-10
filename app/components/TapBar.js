import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TapBar = () => {
  const path = usePathname();
  const title =
    path.slice(1).charAt(0).toUpperCase() + path.slice(2).split("/");

  return (
    <>
      <div className="flex gap-4 py-2 px-2 ">
        {/* <div className="flex items-center w-3/4">AQUI LOGO</div> */}
        <Image alt="logo" src={"/logo.png"} width={70} height={70} />
        <div className="flex justify-center items-center">{title}</div>
      </div>
      <div className="fixed flex justify-between items-center px-8 mb-8 bottom-0 w-full h-12">
        <div className="flex items-center justify-center h-6 w-1/4">
          <Link href={"/home"}>
            <span>HOME</span>
          </Link>
        </div>
        <div className="flex items-center justify-center h-6 w-1/4">
          <Link href={"/about"}>
            <span>ABOUT</span>
          </Link>
        </div>
        <div className="flex items-center justify-center h-6 w-1/4">
          <Link href={"/dates"}>
            <span>DATES</span>
          </Link>
        </div>
        <div className="flex items-center justify-center h-6 w-1/4">
          <Link href={"/contact"}>
            <span>CONTAC</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TapBar;
