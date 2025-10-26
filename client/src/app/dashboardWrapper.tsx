"use client";

import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from './redux';

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({children}: Props) => {

  // fetch from redux store
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* sidebar */}
        <Sidebar />

        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}>
          {/* navbar */}
          <Navbar />
          {children}    
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}: Props) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper