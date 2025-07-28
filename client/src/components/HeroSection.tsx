'use client'
import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'
import Link from 'next/link'

function HeroSection() {
    return (
        <section
            id="hero"
            className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white"
            style={{ backgroundImage: "url('../../images/hero7.jpeg')" }}
        >
            {/* Overlay noir flouté en arrière-plan */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Tout le contenu visible passe ici */}
            <div className="relative z-10 lg:px-10 lg:pt-2 max-lg:pt-2 max-lg:px-2">
                <Navbar />

                <div className="flex items-center min-h-screen">
                    <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg text-center max-w-2xl text-white -z-10">
                        <motion.h1 
                            className="text-4xl font-bold"
                            initial={{ opacity: 0, y: 80}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Catalyseur de croissance pour les PME africaines.
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg"
                            initial={{ opacity: 0, y: 80}}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Nous connectons les entreprises locales aux marchés globaux en leur offrant des solutions innovantes de financement, de conseil stratégique et de visibilité.
                        </motion.p>
                        <div className="mt-6 block">
                            <Link
                                href="/postuler"
                                className="bg-red-500 hover:bg-red-700 cursor-pointer text-white py-3 px-4 rounded-lg"
                            >
                                Postuler
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
