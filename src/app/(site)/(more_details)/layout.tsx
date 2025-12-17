import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(at_top_left,transparent,black_80%)]"></div>
      <div className="p-y-10 container">{children}</div>
    </>
  );
};

export default CommonLayout;
