import React from 'react'
import Header from './header'

export default function Layouts({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-1 lg:px-5 bg-white dark:bg-black text-black dark:text-white min-h-screen w-full'>
            <Header />
            <div className="min-h-[550px]">
                {children}
            </div>
            <p className="py-1 text-sm text-center">&copy; 2024 | Precision Portfolios - All rights reserved.</p>
        </div>
    )
}
