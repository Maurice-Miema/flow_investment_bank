import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                
                {/* Logo et description */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Flow Investment Bank
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Catalyseur de croissance pour les PME africaines, 
                        nous offrons des solutions de financement et 
                        d’accompagnement stratégique pour développer 
                        votre entreprise.
                    </p>
                </div>

                {/* Navigation */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#hero" className="hover:text-red-400">Accueil</a>
                        </li>
                        <li>
                            <a href="#apropos" className="hover:text-red-400">À propos</a>
                        </li>
                        <li>
                            <a href="#service" className="hover:text-red-400">Services</a>
                        </li>
                        <li>
                            <a href="#blog" className="hover:text-red-400">Blog</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-red-400">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-4"> 
                            <MdLocationOn size={25} />
                            Av. industrielle, Q. industriel, 86, Lubumbashi, RDC.
                        </li>
                        <li className="flex items-center gap-4"> 
                            <IoMdMail size={25}/> 
                            contact@flowinvestment.com 
                        </li>
                        <li className="flex items-center gap-4"> 
                            <IoCall size={25} />
                            +243 999 123 456
                        </li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Suivez-nous</h3>
                    <div className="flex justify-between text-xl pt-8">
                        <a href="#" className="hover:text-red-400">
                            <FaFacebook size={35} />
                        </a>
                        <a href="#" className="hover:text-red-400">
                            <FaTwitter size={35}/>
                        </a>
                        <a href="#" className="hover:text-red-400">
                            <FaLinkedin size={35}/>
                        </a>

                        <a href="#" className="hover:text-red-400">
                            <FiInstagram size={35}/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bas de footer */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Flow Investment Bank.
            </div>
        </footer>
    );
}
