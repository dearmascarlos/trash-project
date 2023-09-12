"use client";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import LineUpModal from "./modals/LineUpModal";

import Link from "next/link";
import { useState } from "react";

const Sets = () => {
  // const open = false;
  const [expand, setExpand] = useState({});

  // modalLineUpControl

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id) => {
    setExpand((prevExpand) => ({
      ...prevExpand,
      [id]: !prevExpand[id],
    }));
  };

  return (
    <div className="flex flex-col w-full h-full p-3">
      {EVENTS.map((set, i) => {
        return (
          <div
            key={i}
            className="flex flex-col h-full rounded-xl mb-4 px-4 shadow-slate-600 shadow-lg">
            <div className="flex items-center  gap-4 py-6" key={i}>
              <span className="text-6xl font-bold">{set.day}</span>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">{set.month}</span>
                <span className="text-xl font-semibold">{set.week}</span>
              </div>
              <span className="text-2xl font-semibold min-w-[155px]">
                {set.name}
              </span>
              <button
                key={set.id}
                onClick={() => (i === set.id ? handleClick(set.id) : "")}
                className="w-10 mr-0">
                {!expand[set.id] ? (
                  <CIcon icon={icon.cilArrowCircleBottom} />
                ) : (
                  <CIcon icon={icon.cilArrowCircleTop} />
                )}
              </button>
            </div>
            {expand[set.id] && (
              <div className="flex justify-around gap-4 pb-4">
                <Link href={"https://www.tomaticket.es/"}>
                  <div className="flex flex-col items-center border-b-4 rounded-xl border border-slate-600 py-1 pt-2 px-3">
                    <CIcon icon={icon.cilCart} className="w-6" />
                    <span>Buy ticket</span>
                  </div>
                </Link>

                <div
                  className="flex flex-col items-center border-b-4 rounded-xl border border-slate-600 py-1 pt-2 px-3"
                  onClick={handleOpenClose}>
                  {/* <CIcon icon={icon.cilImage} className="w-6" /> */}
                  <LineUpModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleOpenClose={handleOpenClose}
                  />
                  <span>Line Up</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const EVENTS = [
  {
    id: 0,
    day: "12",
    month: "Jun",
    week: "Sat",
    name: "Festival GaroRock",
    location: "Marmande",
  },
  {
    id: 1,
    day: "18",
    month: "Jun",
    week: "Sat",
    name: "Casa Charlie",
    location: "Alameda de Santa Cruz",
  },
  {
    id: 2,
    day: "22",
    month: "Jun",
    week: "Sat",
    name: "Rincon de Tintin",
    location: "La Laguna",
  },
  {
    id: 3,
    day: "26",
    month: "Jun",
    week: "Sun",
    name: "Festival Tropicalia",
    location: "Puerto de la Cruz",
  },
  {
    id: 4,
    day: "12",
    month: "Jun",
    week: "Sat",
    name: "Festival GaroRock",
    location: "Marmande",
  },
  {
    id: 5,
    day: "18",
    month: "Jun",
    week: "Sat",
    name: "Casa Charlie",
    location: "Alameda de Santa Cruz",
  },
  {
    id: 6,
    day: "22",
    month: "Jun",
    week: "Sat",
    name: "Rincon de Tintin",
    location: "La Laguna",
  },
  {
    id: 7,
    day: "26",
    month: "Jun",
    week: "Sun",
    name: "Festival Tropicalia",
    location: "Puerto de la Cruz",
  },
];

export default Sets;
