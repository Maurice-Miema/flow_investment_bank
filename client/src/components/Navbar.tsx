'use client'
import { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";

function Navbar(){ 
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="flex justify-between items-center p-2 bg-white/20 rounded-xl backdrop-blur-md text-white">
            <div>
                <h1 className="lg:text-3xl font-bold sm:text-3xl"> <strong className='text-red-500'> Flow </strong> Investment Bank</h1>
            </div>

            <section className='hidden lg:block'>
                <nav className="md:flex gap-4 items-center">
                    <a href="#" className="p-2 rounded-md hover:bg-red-500">Accueil</a>
                    <a href="#apropos" className="p-2 rounded-md hover:bg-red-500">À propos</a>
                    <a href="#service" className="p-2 rounded-md hover:bg-red-500">Services</a>
                    <a href="#blog" className="p-2 rounded-md hover:bg-red-500">Blogs</a>
                    <a href="#equipe" className="p-2 rounded-md hover:bg-red-500">Equipe</a>
                    <a href="#contact" className="p-2 rounded-md hover:bg-red-500">Contact</a>
                </nav>
            </section>

            <div className='hidden lg:block'>
                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-xl text-white py-2 px-8 cursor-pointer rounded-md"
                >
                    Login
                </button>
            </div>

            <section className='lg:hidden block'>
                <button 
                    type="button"
                    onClick={()=>setOpenMenu(true)}
                > 
                    <GrMenu size={35}/>
                </button>
            </section>

            {/* menu responsive */}
            {openMenu && ( 
                <section className='p-4 fixed h-screen inset-0 w-full z-50 bg-black/80 backdrop-blur-md'>
                    <div>
                        <button 
                        type="button" 
                        className='text-2xl'
                        onClick={()=>setOpenMenu(false)}
                    >
                        <IoCloseSharp size={50} />
                    </button>
                    </div>
                    <section className='mt-14'>
                        <nav className="">
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="#hero" className="w-ful rounded-md hover:bg-red-600">Accueil</a>
                            </div>
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="#apropos" className="w-ful rounded-md hover:bg-red-600">À propos</a>
                            </div>
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="#service" className="w-ful rounded-md hover:bg-red-600">Services</a>
                            </div>
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="#blog" className="w-ful rounded-md hover:bg-red-600">Blogs</a>
                            </div>
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="#equipe" className="w-ful rounded-md hover:bg-red-600">Equipe</a>
                            </div>
                            <div className='py-4 text-2xl flex justify-center'>
                                <a href="contact" className="w-ful rounded-md hover:bg-red-600">Contact</a>
                            </div>

                            <div className='py-4 text-lg flex justify-center'>
                                <button
                                    type="button"
                                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-24 cursor-pointer rounded-md"
                                >
                                    Se connecter
                                </button>
                            </div>
                        </nav>
                    </section>
                </section>
            )}
            

        </header>
    )
}

export default Navbar
