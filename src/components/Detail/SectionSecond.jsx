import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SectionSecond = () => {
  let [categories] = useState({
    Overview: [{ id: 1 }, { name: "Overview" }],
    Cast: [{ id: 2 }, { name: "Cast" }],
    Review: [{ id: 3 }, { name: "Review" }],
  });

  console.log(categories ? categories : "d");

  return (
    <div className="w-full  flex h-full">
      <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto relative top-0 -translate-y-12">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab key={category} className={({ selected }) => classNames(" w-full rounded-lg py-2.5 text-sm font-medium leading-5 font-roboto text-gray-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected ? "bg-white shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-white")}>
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2"></Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default SectionSecond;
