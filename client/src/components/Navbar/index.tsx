import React from 'react'
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsDarkMode, setIsSidebarCollapsed, setLanguage } from '@/state'


const Navbar = () => {
  const dispatch = useAppDispatch();
  // fetch from redux store
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const language = useAppSelector((state) => state.global.language);

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black md:px-6 md:py-4 shadow-md'>
        {/* Search Bar */}
        <div className='flex items-center gap-8'>
            {!isSidebarCollapsed ? null : (
                <button
                    onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}  
                >
                    <Menu className='h-8 w-8 cursor-pointer dark:text-white' />
                </button>
            )}
            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[4px] top-1/2 transform -translate-y-1/2 cursor-pointer mr-2 h-5 w-5 dark:text-white' />
                <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white'
                    type='search' placeholder={language === 'en' ? 'Search...' : 'Ara...'}
                />
            </div>
        </div>

        {/* Profile Section & Icons*/}
        <div className='flex items-center'>
            <button
                onClick={() => dispatch(setLanguage(language === 'en' ? 'tr' : 'en'))}
                className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-white"
                title={language === 'en' ? 'Switch to Turkish' : 'Switch to English'}
                aria-label={language === 'en' ? 'Switch language to Turkish' : 'Switch language to English'}
            >
                {/* simple, accessible flag icons — replace with SVGs or a flag icon library if you prefer */}
                <span className="text-xl" aria-hidden="true">
                    {language === 'en' ? '🇺🇸' : '🇹🇷'}
                </span>
            </button>
            {/* DARK MODE TOGGLE */}
            <button className={isDarkMode ? `rounded p-2 dark:hover:bg-gray-700` : `rounded p-2 hover:bg-gray-100`} onClick={() => dispatch(setIsDarkMode(!isDarkMode))}>
                {isDarkMode ? (
                    <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
                ) : (
                    <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
                )}
            </button>
            <Link href="/settings"
            className={`h-min w-min ${isDarkMode ? `rounded p-2 dark:hover:bg-gray-700` : `rounded p-2 hover:bg-gray-100`}`}
            >   
                <Settings className='h-6 w-6 cursor-pointer dark:text-white' />
            </Link>

            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1em] bg-gray-200 md:inline-block'>

            </div>
        </div>
    </div>
  )
}

export default Navbar