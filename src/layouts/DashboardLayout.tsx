import React, { ReactNode } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Header from '../components/Header';
import RightSidebar from '../components/RightSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen font-sans">
      <LeftSidebar />
      <div className="flex flex-col flex-1 h-full">
        <Header />
        <div className="flex flex-1 min-h-0">
          <div className="flex-1 min-w-0">{children}</div>
        </div>
        
      </div>
      <RightSidebar />
    </div>
  );
};

export default DashboardLayout; 