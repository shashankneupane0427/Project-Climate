"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import Nav from './Nav';


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

]

const Mobilenav = () => {
    const Pathname = usePathname();

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <CiMenuFries />
                </SheetTrigger>
                <SheetContent className=" flex flex-col" >
                    <div className={`mt-40 ml-32 flex flex-col gap-10 `} >
                        {Links.map((link, index) => {
                            return (
                                <span key={index}>
                                    <Link href={link.path}  className={`${Pathname === link.path ? "text-accent-DEFAILT border-b-2 " : ""} border-accent-DEFAILT hover:text-accent-hover transition-all text-black inline-block`}

                                    >
                                        <span>{link.name}</span>
                                    </Link>
                                </span>)
                        })}


                    </div>

                </SheetContent>
            </Sheet>
        </>
    )
}

export default Mobilenav