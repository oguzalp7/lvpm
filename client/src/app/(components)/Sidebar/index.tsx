"use client"

import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { use, useState } from 'react'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    // fetch from redux store
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const language = useAppSelector((state) => state.global.language);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? 'w-0 hidden' : 'w-64'}`;
    return (
        
        <div className={sidebarClassNames}> {/* Sidebar Content */}
            {/* TOP LOGO */}
            <div className='flex h-[100%] w-full flex-col justify-start'>
                <div className='z-50 flex min-h-[56px] items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>
                        {process.env.NEXT_PUBLIC_APP_NAME || "App Name"}
                    </div>
                    {isSidebarCollapsed ? null : (
                        <button
                        className="py-3"
                        onClick={() => {
                            dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
                        }}
                        >
                        <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
                        </button>
                    )}
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
                        <p className="text-xs text-gray-500">{language === 'en' ? 'Private' : 'Özel'}</p>
                        </div>
                    </div>
                </div>
                {/* SIDEBAR LINKS */}
                <nav className='z-10 w-full'>
                    <SidebarLink href="/" icon={Home} label={language === 'en' ? 'Home' : 'Ana Sayfa'} isCollapsed={false} />
                    <SidebarLink href="/timeline" icon={Briefcase} label={language === 'en' ? 'Timeline' : 'Zaman Çizelgesi'} isCollapsed={false} />
                    <SidebarLink href="/search" icon={Search} label={language === 'en' ? 'Search' : 'Ara'} isCollapsed={false} />
                    <SidebarLink href="/settings" icon={Settings} label={language === 'en' ? 'Settings' : 'Ayarlar'} isCollapsed={false} />
                    <SidebarLink href="/users" icon={User} label={language === 'en' ? 'Users' : 'Kullanıcılar'} isCollapsed={false} />
                    <SidebarLink href="/teams" icon={Users} label={language === 'en' ? 'Teams' : 'Takımlar'} isCollapsed={false} />
                </nav>

                <button onClick={() => setShowProjects( (prev) => !prev)} className='flex w-full items-center justify-between px-8 py-3 text-gray-500'>
                    <span className='font-medium'>{language === 'en' ? 'Projects' : 'Projeler'}</span>
                    {showProjects ? ( <ChevronUp className='h-5 w-5' /> ): ( <ChevronDown className='h-5 w-5' /> )}
                </button>
                {/* PROJECT LIST */}

                {/* PRIORITIES LIST */}
                <button onClick={() => setShowPriority( (prev) => !prev)} className='flex w-full items-center justify-between px-8 py-3 text-gray-500'>
                    <span className='font-medium'>{language === 'en' ? 'Priorities' : 'Öncelikler'}</span>
                    {showPriority ? ( <ChevronUp className='h-5 w-5' /> ): ( <ChevronDown className='h-5 w-5' /> )}
                </button>
                    {showPriority && (
                        <>
                            <SidebarLink
                            icon={AlertCircle}
                            label={language === 'en' ? 'Urgent' : 'Acil'}
                            href="/priority/urgent"
                            isCollapsed={false}
                            />
                            <SidebarLink
                            icon={ShieldAlert}
                            label={language === 'en' ? 'High' : 'Yüksek'}
                            href="/priority/high"
                            isCollapsed={false}
                            />
                            <SidebarLink
                            icon={AlertTriangle}
                            label={language === 'en' ? 'Medium' : 'Orta'}
                            href="/priority/medium"
                            isCollapsed={false}
                            />
                            <SidebarLink icon={AlertOctagon} label={language === 'en' ? 'Low' : 'Düşük'} href="/priority/low" isCollapsed={false} />
                            <SidebarLink
                            icon={Layers3}
                            label={language === 'en' ? 'Backlog' : 'Beklemede'}
                            href="/priority/backlog"
                            isCollapsed={false}
                            />
                        </>
                    )}
            </div>
        </div>
    )
}

interface SidebarLinkProps {
    href: string;
    icon: Icon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
} : SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full">
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
                isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
                } justify-start px-8 py-3 `}
            >
              {isActive && (
                <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
              )}  

              <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
              <span className={`font-medium text-gray-800 dark:text-gray-100`}>
                {label}
              </span>
            </div>
        </Link>
    );
};

export default Sidebar;