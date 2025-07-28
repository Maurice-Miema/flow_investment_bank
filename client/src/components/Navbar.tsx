'use client'
import { useState } from 'react'
import Link from 'next/link';
import { GrMenu } from "react-icons/gr";
import NavMobile from './Navmobil';


function Navbar(){ 
    const [openMenu, setOpenMenu] = useState(false);

    const menuLinks = [
        { href: "#hero", label: "Accueil" },
        { href: "#apropos", label: "À propos" },
        { href: "#service", label: "Services" },
        { href: "#blog", label: "Blogs" },
        { href: "#contact", label: "Contact" }
    ]
    return (
        <>
            <header className="flex justify-between items-center p-2 bg-white/20 rounded-xl backdrop-blur-md text-white">
                <div>
                    <h1 className="lg:text-3xl font-bold sm:text-3xl"> <strong className='text-red-500'> Flow </strong> Investment Bank</h1>
                </div>

                <section className='hidden lg:block'>
                    <nav className="md:flex gap-4 items-center">
                        {menuLinks.map((item, index)=>(
                            <a
                                key={index}
                                href={item.href}
                                className="p-2 rounded-md hover:bg-red-500"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </section>

                <div className='hidden lg:block'>
                    <Link
                        href="/connexion"
                        className="bg-red-500 hover:bg-red-700 text-xl text-white py-2 px-8 cursor-pointer rounded-md"
                    >
                        Login
                    </Link>
                </div>

                <section className='lg:hidden block'>
                    <button 
                        type="button"
                        onClick={()=>setOpenMenu(true)}
                    > 
                        <GrMenu size={35}/>
                    </button>
                </section>
            </header>
                {/* menu responsive */}
                < NavMobile isOpen={openMenu} onClose={() => setOpenMenu(false)} />
        </>
    )
}

export default Navbar
