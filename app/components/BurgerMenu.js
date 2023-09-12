import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useState } from "react";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CIcon icon={icon.cilMenu} onClick={handleOpenClose} className="w-6" />
      <div
        className={`fixed inset-0 bg-black/80 z-50 flex transition-all duration-1000 ${
          isOpen ? "h-full w-full" : "h-0"
        }`}
        onClick={handleOpenClose}>
        <div
          className={`fixed top-14 right-9 flex gap-1 flex-col overflow-hidden rounded-xl${
            isOpen ? "h-auto" : "h-0 w-0"
          }`}>
          {/* Contenido de la ventana modal */}
          <Link href={"/music"}>
            <div
              className={`flex items-center gap-3 bg-black border border-slate-600 rounded-xl py-4 px-8 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <span>Music</span>
              <div className="w-4">
                <CIcon icon={icon.cilMediaPlay} />
              </div>
            </div>
          </Link>
          <Link href={"/galery"}>
            <div
              className={`flex items-center gap-3 bg-black border border-slate-600 rounded-xl py-4 px-8 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <span>Galery</span>
              <div className="w-4">
                <CIcon icon={icon.cilCamera} />
              </div>
            </div>
          </Link>
          <Link href={"/shop"}>
            <div
              className={`flex items-center gap-3 bg-black border border-slate-600 rounded-xl py-4 px-8 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              <span>Shop</span>
              <div className="w-4">
                <CIcon icon={icon.cilCart} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
