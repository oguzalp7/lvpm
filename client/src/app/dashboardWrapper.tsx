import React from 'react'
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

type Props = {
  children: React.ReactNode
}

const DashboardWrapper = ({children}: Props) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* sidebar */}
        <Sidebar />


        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
          {/* navbar */}
          <Navbar />
          {children}    
        </main>
    </div>
  )
}

export default DashboardWrapper