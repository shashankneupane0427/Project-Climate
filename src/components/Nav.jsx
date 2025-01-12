"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const Links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/aboutus'
        },
        {
            name: 'Our Projects',
            path: '/projects'
        },
        {
            name: 'Get Involved',
            path: '/getinvolved'
        },
        {
            name: 'Blogs',
            path: '/blogs'
        },
    ];
    const Pathname = usePathname();
    console.log(Pathname)

    return (
        <nav className="flex gap-8" >
            {
                Links.map((link, index) => (
                    <Link href={link.path} key={index} className={`${Pathname === link.path && "text-accent-DEFAILT border-b-2"} border-accent-DEFAILT hover:text-accent-hover transition-all text-black`}

                    >
                        {link.name}
                    </Link>
                ))
            }
        </nav>
    );
}

export default Nav;
