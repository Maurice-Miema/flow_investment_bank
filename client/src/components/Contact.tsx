"use client";
import { motion } from 'motion/react'
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ICI : Ajoute l'envoi (ex: API, Formspree, backend…)
        alert("Votre message a été envoyé !");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="flex justify-center">
                <h1 className='text-3xl flex justify-center pb-7'>Contact</h1>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 80}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Contactez <span className="text-red-600">Flow Investment Bank</span>
                    </h2>
                    <p className="text-gray-700 mb-6 text-xl">
                        Une question sur nos services ?
                        Remplissez le formulaire ci-contre et notre équipe vous répondra 
                        dans les plus brefs délais.
                    </p>
                    <ul className="text-gray-800 space-y-2">
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
                </motion.div>

                {/* Formulaire */}
                <motion.div
                    initial={{ opacity: 0, y: 80}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0, ease: "easeOut" }}
                >
                    <form 
                        onSubmit={handleSubmit} 
                        className="bg-gray-200 p-8 rounded-lg"
                    >
                        <div className="mb-4">
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Nom complet
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Entrez votre nom"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="exemple@email.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-semibold text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                value={form.message}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Écrivez votre message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-400 cursor-pointer hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </motion.div>

                

            </div>
        </section>
    );
}
