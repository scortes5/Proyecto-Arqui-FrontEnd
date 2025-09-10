import React from "react";
import PropertyCard from "./PropertyCard";

interface Props {}

export const PropertiesSection = (props: Props) => {
  return (
    <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-1  gap-10 absolute h-4/5 w-4/5 ">
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};
