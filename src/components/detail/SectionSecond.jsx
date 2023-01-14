import React, { useState } from "react";

import { Tab } from "@headlessui/react";

import CastGrid from "../layouts/CastGrid.jsx";
import CommentsLayout from "../layouts/CommentsLayout.jsx";

import Cast from "./Cast.jsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionSecond() {
  const [logic, setLogic] = useState(0);
  const [categories] = useState({
    Overview: [{ id: 0 }, { name: "Overview" }],
    Cast: [{ id: 1 }, { name: "Cast" }],
    Comments: [{ id: 2 }, { name: "Comments" }],
  });


  function handleChange(e) {
    switch (e) {
      case 0:
        setLogic(0);
        break;
      case 1:
        setLogic(1);
        break;
      case 2:
        setLogic(2);
        break;
    }
  }

  return (
    <div className="w-full  flex flex-col h-fit pb-10">
      <div className="w-full  mt-4 max-w-md px-2 sm:px-0 mx-auto relative top-0 ">
        <Tab.Group
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <Tab.List className="flex space-x-1 rounded-xl bg-bg-color-radio dark:bg-card-second p-1 ">
            {Object.keys(categories).map((category) => (
              <Tab key={category} className={({ selected }) => classNames(" overview w-full rounded-lg py-2.5 text-sm font-medium leading-5 font-roboto text-gray-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white")}>
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2" />
        </Tab.Group>
      </div>
      {/* <Overview /> => logic === 0 */}
      {logic === 0 ? (
        <CommentsLayout />
      ) : logic === 1 ? (
        <CastGrid>
          <Cast />
        </CastGrid>
      ) : logic === 2 ? (
        <CommentsLayout />
      ) : (
        <CastGrid>
          <Cast />
        </CastGrid>
      )}
    </div>
  );
}

export default SectionSecond;

