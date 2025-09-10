import React from "react";

interface Props {}

export const PropertiesSection = (props: Props) => {
  return (
    <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-10 absolute h-4/5 w-4/5 ">
        <div className="bg-red-50 p-10">1</div>
        <div className="bg-white p-10">2</div>
        <div className="bg-green-300 p-10 row-start-2">3</div>
        <div className="bg-yellow-200 p-10 row-start-2">4</div>
      </div>
    </div>
  );
};
