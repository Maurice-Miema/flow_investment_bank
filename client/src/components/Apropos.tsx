import React from 'react'
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { FaMedal } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";

function Apropos() {
    return (
        <section 
            id='apropos'
            className='h-auto lg:px-20 md:px-5'
        >
            <div className='pt-10'>
                <h1 className='text-3xl flex justify-center pb-7'>Apropos de Nous</h1>
                <p className="text-gray-700 text-xl text-center lg:px-36 px-4">
                    Nous croyons que l’avenir économique de l’Afrique passe par ses entrepreneurs.
                    FLOW Investment Bank agit comme un levier de transformation, en connectant les PME
                    aux ressources financières et stratégiques qu’elles méritent.
                </p>
            </div>
            <div className="pt-8 text-center md:flex md:gap-5 grid grid-cols-1 gap-3 md:px-0 px-4">
                <div className=" border py-8 rounded-xl px-4 text-white bg-red-400">
                    <h3 className="text-xl font-bold mt-2">Notre Vision</h3>
                    <p className="mt-2 ">
                        Devenir la première banque d’affaires non bancaire en Afrique, catalyseur de croissance pour les PME et passerelle entre les économies locales et les marchés globaux.
                    </p>
                </div>
                <div className='border py-8 rounded-xl px-4 text-white bg-black'>
                    <h3 className="text-xl font-bold mt-2">Notre Mission</h3>
                    <p className="mt-2 ">
                        Offrir aux PME africaines l’accès aux capitaux, aux opportunités stratégiques et à la crédibilité
                        nécessaire pour se développer, en structurant des services innovants de levées de fonds, de conseil
                        et de visibilité.
                    </p>
                </div>
            </div>

            {/* valeur */}
            <div className='bg-gray-50 p-4 rounded-xl h-auto mt-4'>
                <div className='py-4'>
                    <h1 className='lg:text-2xl text-3xl'>Nos Valeurs</h1>
                </div>

                <div className='lg:flex justify-between gap-4 grid md:grid-cols-2 sm:grid-cols-1'>
                    <div className='p-4 rounded-xl w-full bg-black text-white'>
                        <div className='flex justify-center'>
                            <LiaBalanceScaleSolid size={90} />
                        </div>
                        <h1 className='flex justify-center text-2xl '>Intégrité</h1>
                        <div className='py-4'>
                            <p className='text-xl text-center'>
                                Nous agissons avec transparence envers tous les partenaires.
                            </p>
                        </div>
                    </div>
                    <div className='p-4 rounded-xl w-full bg-amber-200'>
                        <div className='flex justify-center'>
                            <FaMedal size={90} />
                        </div>
                        <h1 className='flex justify-center text-2xl pt-2'>Excellence</h1>
                        <div className='py-4'>
                            <p className='text-xl text-center'>
                                Nous visons des standards élevés dans chaque service rendu, avec rigueur.
                            </p>
                        </div>
                    </div>
                    <div className='p-4 rounded-xl w-full bg-purple-200'>
                        <div className='flex justify-center'>
                            <IoMdTrendingUp size={90} />
                        </div>
                        <h1 className='flex justify-center text-2xl pt-2'>Impact</h1>
                        <div className='py-4'>
                            <p className='text-xl text-center'>
                                Chaque mission doit concrètement faire grandir l’entreprise.
                            </p>
                        </div>
                    </div>
                    <div className='p-4 rounded-xl w-full bg-sky-200'>
                        <div className='flex justify-center'>
                            <FaLightbulb size={90} />
                        </div>
                        <h1 className='flex justify-center text-2xl pt-2'>Innovation</h1>
                        <div className='py-4'>
                            <p className='text-xl text-center'>
                                nous créons des solutions financières adaptées aux réalités africaines, en rupture avec
                                des modèles traditionnels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apropos
