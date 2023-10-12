import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenu from "/app/components/BurgerMenu";
import CIcon from "@coreui/icons-react";
import * as i from "@coreui/icons";
import { useState } from "react";

const TapBar = () => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();
  console.log(path);

  const title = path.slice(1).charAt(0).toUpperCase() + path.slice(2, 7);
  const activeLinkClass =
    "border-b-2 border rounded-xl border-green-300 py-1 w-full";
  const inactiveLinkClass =
    "border-b-2 rounded-b-xl border-slate-600 pb-1 w-full";

  return (
    <>
      {path !== "/" ? (
        <>
          <div className="fixed top-0 flex justify-between w-full h-30 gap-4 py-2 px-4 bg-gradient-to-b from-black to-transparent bg-opacity-100">
            <div className="flex gap-4">
              <Link href={"/home"}>
                <Image
                  alt="logo"
                  src={"/images/logo.png"}
                  width={70}
                  height={70}
                />
              </Link>
              <div className="flex justify-center items-center">{title}</div>
            </div>
            <div className="flex justify-center items-center">
              {/* <CIcon icon={i.cilMenu} className="w-6" /> */}
              <BurgerMenu />
            </div>
          </div>

          <div className="fixed flex flex-col items-center justify-between bottom-0 w-full">
            <div className="w-full bg-gradient-to-t from-black to-transparent h-8"></div>
            <div className="flex w-full bg-black h-24 justify-between">
              <div className="flex w-1/4 px-2 items-center justify-center">
                <Link href={"/home"} className="w-full">
                  <div
                    className={`flex ${
                      path.slice(0, 4) === "/hom"
                        ? activeLinkClass
                        : inactiveLinkClass
                    }flex flex-col items-center w-full`}>
                    <CIcon
                      className="w-5"
                      icon={i.cilTrash}
                      size="sm"
                      // style={{ "--ci-primary-color": "green" }}
                    />
                    <span>HOME</span>
                  </div>
                </Link>
              </div>

              <div className="flex w-1/4 px-2 items-center justify-center">
                <Link href={"/about"} className="w-full">
                  <div
                    className={`flex ${
                      path.slice(0, 4) === "/abo"
                        ? activeLinkClass
                        : inactiveLinkClass
                    }flex flex-col items-center w-full`}>
                    <CIcon
                      className="w-5"
                      icon={i.cilBolt}
                      size="sm"
                      // style={{ "--ci-primary-color": "green" }}
                    />
                    <span>ABOUT</span>
                  </div>
                </Link>
              </div>

              <div className="flex w-1/4 px-2 items-center justify-center">
                <Link href={"/events"} className="w-full">
                  <div
                    className={`flex ${
                      path.slice(0, 4) === "/eve"
                        ? activeLinkClass
                        : inactiveLinkClass
                    }flex flex-col items-center w-full`}>
                    <CIcon
                      className="w-5"
                      icon={i.cilCalendar}
                      size="sm"
                      // style={{ "--ci-primary-color": "green" }}
                    />
                    <span>EVENTS</span>
                  </div>
                </Link>
              </div>

              <div className="flex w-1/4 px-2 items-center justify-center">
                <Link href={"/contact"} className="w-full">
                  <div
                    className={`flex ${
                      path.slice(0, 4) === "/con"
                        ? activeLinkClass
                        : inactiveLinkClass
                    }flex flex-col items-center w-full`}>
                    <CIcon
                      className="w-5"
                      icon={i.cilContact}
                      size="sm"
                      // style={{ "--ci-primary-color": "green" }}
                    />
                    <span>CONTACT</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="fixed flex flex-col items-center justify-between bottom-0 w-full">
          <div className="w-full bg-gradient-to-t from-black to-transparent h-8"></div>
          <div className="flex w-full bg-black h-24 justify-between"></div>
        </div>
      )}
    </>
  );
};

export default TapBar;
