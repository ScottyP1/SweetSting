'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../public/logo.png';

export default function Nav() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const closeSidebarOnOutsideClick = () => {
            if (sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
        };
    }, [sidebarOpen]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='sticky top-0 z-50'>
            {/* Navbar */}
            <div className=" bg-black/60 flex items-center justify-between px-4 h-22">
                <div className="lg:hidden flex items-center justify-center w-full">
                    <Link href='/'>
                        <div className="cursor-pointer ms-9">
                            <Image src={Logo} width={55} alt='logo' />
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:flex items-center ">
                    <Link href='/'>
                        <div className="cursor-pointer">
                            <Image src={Logo} width={55} alt='logo' />
                        </div>
                    </Link>
                </div>
                <button className="lg:hidden text-white" onClick={toggleSidebar}>
                    <div className="space-y-1">
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                    </div>
                </button>

                <ul className="hidden lg:flex text-white space-x-4">
                    <NavItem path={path} href="/" text="Home" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/about" text="About" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/services_" text="Services" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/contact" text="Contact" closeSidebar={closeSidebar} />
                </ul>
            </div >

            {/* Sidebar */}
            < div className={`fixed top-0 right-0 h-full w-32 bg-black/[.6] text-white transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform lg:hidden z-50`
            }
                ref={node => {
                    if (node) {
                        node.addEventListener("mousedown", (e) => e.stopPropagation());
                    }
                }}
            >
                <div className="flex items-center justify-between px-4 h-22">
                    <button className="text-white" onClick={toggleSidebar}>
                        X
                    </button>
                </div>
                <ul className="flex flex-col items-start p-4">
                    <NavItem path={path} href="/" text="Home" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/about" text="About" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/services_" text="Services" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/contact" text="Contact" closeSidebar={closeSidebar} />
                </ul>
            </div >
        </div >
    );
}

function NavItem({ href, text, path, closeSidebar }) {
    return (
        <li className={`relative ${path === href ? 'bg-[#CDF5EC]/[.7]' : 'bg-black'} mt-2 rounded-full p-3 hover:bg-[#CDF5EC]/[.7]`}>
            <Link href={href}>
                <div className="cursor-pointer w-full" onClick={closeSidebar}>
                    {text}
                </div>
            </Link>
        </li>
    );
}
