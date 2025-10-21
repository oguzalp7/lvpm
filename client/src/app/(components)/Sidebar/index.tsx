"use client"

import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-gray-900 overflow-y-auto bg-white w-64`;
    return (
        
        <div className={sidebarClassNames}> {/* Sidebar Content */}
            {/* TOP LOGO */}
            <div className='flex h-[100%] w-full flex-col justify-start'>
                <div className='z-50 flex min-h-[56px] items-center justify-between bg-white px-6 pt-3 dark:bg-gray-900'>
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>
                        {process.env.NEXT_PUBLIC_APP_NAME || "App Name"}
                    </div>
                </div>
                {/* TEAMS SECTION */}
                <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
                    <Image src={"http://lavittoria.com.tr/img/LV.png"} alt="Team Logo" width={40} height={40} />
                    <div>
                        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                        La Vittoria
                        </h3>
                        <div className="mt-1 flex items-start gap-2">
                        <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                        <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>
                {/* NAVBAR LINKS */}
            </div>
        </div>
    )
}

export default Sidebar