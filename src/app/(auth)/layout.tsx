import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-[url('/authbanner.jpg')] bg-no-repeat bg-cover">
      <div className="inset-x-0 inset-y-0 bg-black  md:bg-opacity-55 h-full w-full "></div>
      <div className="mt-16 rounded-md min-h-screen">{children}</div>
    </div>
  );
};

export default layout;
