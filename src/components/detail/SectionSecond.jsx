import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

import CastGrid from '../layouts/CastGrid.jsx';
import CommentsLayout from '../layouts/CommentsLayout.jsx';
import Overview from './Overview.jsx';
import Cast from './Cast.jsx';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SectionSecond() {
  const [currentTab, setCurrentTab] = useState(0);
  const categories = [
    { id: 0, name: 'Overview' },
    { id: 1, name: 'Cast' },
    { id: 2, name: 'Comments' },
  ];

  return (
    <div className="w-full flex flex-col h-full pb-10">
      <div className="w-full mt-4 max-w-md px-2 sm:px-0 mx-auto relative top-0">
        <Tab.Group onChange={(e) => setCurrentTab(e)}>
          <Tab.List className="flex space-x-1 rounded-xl bg-bg-color-radio dark:bg-card-second p-1">
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  classNames(
                    'overview w-full rounded-lg py-2.5 text-sm font-medium leading-5 font-roboto text-gray-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {categories.map((category) => (
              <Tab.Panel key={category.id} />
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      {currentTab === 0 ? (
        <Overview />
      ) : currentTab === 1 ? (
        <CastGrid>
          <Cast />
        </CastGrid>
      ) : (
        <CommentsLayout />
      )}
    </div>
  );
}

export default SectionSecond;
