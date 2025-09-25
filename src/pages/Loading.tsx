import React from "react";

interface Props {}

export const Loading = (props: Props) => {
  return (
    <div className="relative h-[calc(100vh-20rem)] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  );
};
