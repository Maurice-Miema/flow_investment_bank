import React from 'react'
import Link from 'next/link';
import { GrFormPrevious } from "react-icons/gr";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";


function page() {
    return (
        <section className='flex justify-center h-screen items-center bg-gray-200 px-4 md:px-0'>
            
            <div className='bg-white rounded-2xl md:w-lg w-md md:px-14 px-4 py-8'>
                    <h1 className='flex justify-center text-2xl font-medium py-4'>Authentification</h1>
                    <h1 className='text-center text-3xl font-bold mb-2'> <strong className='text-red-500 mr-2'> Flow </strong> Investment Bank</h1>
                    <h1 className='text-center font-semibold'>Identifiez-Vous a votre compte</h1>
                <form action="">
                    <div className='mt-8'>
                        <label htmlFor="email" className='block'> Adresse mail</label>
                        <div className='relative w-full'>
                            <HiMail 
                                className='absolute left-3 top-1/2 -translate-y-1/2 text-black text-xl'
                            />
                            <input 
                                id='email'
                                type="text"
                                placeholder='Entrez votre email'
                                className='w-full border border-gray-400 py-2 pl-10 rounded-md focus:outline-red-400'
                            />
                        </div>
                    </div>

                    <div className='mb-8 mt-8'>
                        <label htmlFor="password" className='block'> Password</label>
                        <div className='relative w-full'>
                            <RiLockPasswordFill 
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-xl"
                            />
                            <IoEyeOffSharp 
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl"
                            />
                            <input 
                                id='password'
                                type="password"
                                placeholder='Entrez votre password'
                                className='w-full border border-gray-400 py-2 pl-10 rounded-md focus:outline-red-400'
                            />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <Link 
                            href="/"
                            className='border px-4 py-2 rounded-md w-full border-gray-300 flex items-center gap-4 cursor-pointer'
                        >
                            <GrFormPrevious size={20} />
                            Precedent
                        </Link>
                        <button type="button" className='border px-4 py-2 rounded-md w-full bg-red-500 text-white font-semibold cursor-pointer'>Connexion</button>
                    </div>
                </form>
            </div> 
        </section>
    )
}

export default page
