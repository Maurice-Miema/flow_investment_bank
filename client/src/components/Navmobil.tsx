'use client';
import Link from 'next/link';
import React, { JSX } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

type NavMobileProps = {
    isOpen: boolean;
    onClose: () => void;
};

function NavMobile({ isOpen, onClose }: NavMobileProps): JSX.Element {
    const menuLinks = [
        { href: "#hero", label: "Accueil" },
        { href: "#apropos", label: "À propos" },
        { href: "#service", label: "Services" },
        { href: "#blog", label: "Blogs" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            {isOpen && (
                <section className="fixed inset-0 h-screen z-50 bg-black/80 backdrop-blur-md">
                    <div className="">
                        <button
                            type="button"
                            className="text-2xl text-white"
                            onClick={onClose}
                        >
                            <IoCloseSharp size={50} />
                        </button>
                    </div>

                    {/* Menu */}
                    <section className="">
                        <nav>
                        {menuLinks.map((link, index) => (
                            <div
                                key={index}
                                className="py-4 text-2xl flex justify-center"
                            >
                                <a
                                    href={link.href}
                                    className="w-full text-center rounded-md hover:bg-red-600 text-white p-2"
                                    onClick={onClose}
                                >
                                    {link.label}
                                </a>
                            </div>
                        ))}

                        {/* Bouton connexion */}
                        <div className="py-4 text-lg flex justify-center">
                            <Link
                            href="/connexion"
                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-24 rounded-md"
                            onClick={onClose}
                            >
                            Se connecter
                            </Link>
                        </div>
                        </nav>
                    </section>
                </section>
            )}
        </>
    );
}

export default NavMobile;