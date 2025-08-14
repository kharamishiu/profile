import React from 'react'
import MobileMenu from '../mobileMenu/MobileMenu';
import { navItems } from '@/utils/data';

export default function NavMenu() {



    return (
        <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 bg-amber-300`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-6 bg-purple-400">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0">
                        <h2 className='text-2xl font-bold text-purple-600'>
                            <span className='bg-gradient-to-br'>MRDev</span>
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-10">
                            {navItems.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className='text-white text-sm hover:text-purple-600 transition-colors duration-150 py-2 font-medium uppercase tracking-wide '

                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/**mobile menu */}
                    <div className="md:hidden">
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}
