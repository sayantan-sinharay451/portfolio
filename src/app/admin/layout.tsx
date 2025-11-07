import React from 'react';
import SideNavbar from './_components/Sidenavbar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideNavbar />
      {children}
    </>
  );
};

export default AdminLayout;
