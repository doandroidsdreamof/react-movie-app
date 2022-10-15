import React from 'react'

  function SkeletonLoader () {

  return (
    <div className="flex flex-col  rounded  h-full  w-full animate-pulse ">
	<div className="h-48 rounded-t bg-gray-500"></div>
	<div className="flex-1 px-4 space-y-4 sm:p-8 dark:bg-gray-900">
		<div className="w-full h-6 rounded bg-gray-500"></div>
		<div className="w-full h-6 rounded bg-gray-500"></div>
    <div className="w-full h-6 rounded bg-gray-500"></div>
	</div>
</div>
  )
}


export default SkeletonLoader;