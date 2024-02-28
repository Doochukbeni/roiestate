import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-[url('/authbanner.jpg')] bg-no-repeat bg-cover">
      <div className="bg-black lg:bg-opacity-50 h-full w-full  "></div>
      <div className="mt-16 rounded-md">{children}</div>
    </div>
  );
};

export default layout;
