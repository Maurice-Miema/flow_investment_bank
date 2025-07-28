'use client'
import { RxExternalLink } from "react-icons/rx";
import Link from 'next/link';
import { motion } from 'motion/react'

function Blogs() {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
            staggerChildren: 0.4,
            },
        },
    }
    const item = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }
    return (
        <>
            <section className='px-4 pt-10 lg:px-20'>
                <motion.div 
                    className="bg-red-300/95 rounded-lg py-16 px-6 text-center text-gray-800"
                    initial={{ opacity: 0, y: 80}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="max-w-2xl mx-auto">
                        <h2 
                            className="text-3xl md:text-4xl font-bold leading-snug"
                        >
                            Prêt à donner à votre entreprise l’élan nécessaire pour atteindre
                            de nouveaux marchés et accélérer sa croissance ?
                        </h2>

                        <p className="mt-4 text-lg text-black font-medium">
                            Rejoignez notre programme de levée de fonds et bénéficiez d’un
                            accompagnement stratégique sur mesure.
                        </p>

                        <div className='mt-8'>
                            <Link 
                                href="/postuler"
                                className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow cursor-pointer transition"
                            >
                                Je dépose ma candidature
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section 
                id='blog'
                className='h-auto px-4 py-10 lg:px-20'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 items-center pb-7 pt-10'>
                    <div>
                        <h1 className='py-1 text-4xl'> Blogs </h1>
                        <p className='text-gray-700'>FLOW Investment Bank s’engage à fournir du contenu stratégique et accessible pour aider les PME à réussir sur les marchés locaux et internationaux.</p>
                    </div>

                    <div className='flex md:justify-end pt-3 md:pt-0'>
                        <Link 
                            href="/blog"
                            className='px-5 py-2 rounded-md bg-black text-white flex items-center gap-2'
                        >
                            Voir tous
                            <RxExternalLink />
                        </Link>
                    </div>
                </div>

                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    {/* blog */}
                    <motion.div 
                        className='md:max-w-md'
                        variants={item}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <img 
                                src="../../images/hero2.jpeg" 
                                alt="L'image de blog"
                                className='w-full h-80 object-cover rounded-lg'
                            />
                        </div>
                        <p className='py-2 text-gray-600'>24 juillet 2024</p>
                        <h1 className='text-3xl font-bold pb-2 '>Le titre du blog </h1>
                        <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur, accusamus esse iusto maxime impedit ex delectus ad nemo quaerat fugit voluptate incidunt laboriosam ipsum ab, ut fuga voluptas eum.
                            Quibusdam minus ab unde velit natus, asperiores quod temporibus ducimus fugiat facilis distinctio vel aliquam magnam architecto aperiam iusto esse explicabo dignissimos, id repellat. Beatae impedit ratione est odio nam.
                            Quaerat minima consectetur magni tempore, qui saepe! Quaerat itaque delectus, rerum modi aut, aperiam exercitationem sit reprehenderit numquam sed inventore corrupti, ducimus quam nihil natus officiis cupiditate tempore unde! Quos!
                            Cum suscipit inventore consequatur atque harum? Doloremque at molestiae quisquam libero consectetur nulla iusto eius voluptate quaerat porro sint vitae, et commodi! Incidunt iure culpa deleniti dolores quae. Facilis, fuga?
                        </p>

                        <button 
                            type="button"
                            className='bg-red-500 cursor-pointer hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                        >Lire plus</button>
                    </motion.div>

                    {/* blog */}
                    <motion.div 
                        className='md:max-w-md'
                        variants={item}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <img 
                                src="../../images/hero8.jpeg" 
                                alt="L'image de blog"
                                className='w-full h-80 object-cover rounded-lg'
                            />
                        </div>
                        <p className='py-2 text-gray-600'>24 juillet 2024</p>
                        <h1 className='text-3xl font-bold pb-2'>Le titre du blog </h1>
                        <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur, accusamus esse iusto maxime impedit ex delectus ad nemo quaerat fugit voluptate incidunt laboriosam ipsum ab, ut fuga voluptas eum.
                            Quibusdam minus ab unde velit natus, asperiores quod temporibus ducimus fugiat facilis distinctio vel aliquam magnam architecto aperiam iusto esse explicabo dignissimos, id repellat. Beatae impedit ratione est odio nam.
                            Quaerat minima consectetur magni tempore, qui saepe! Quaerat itaque delectus, rerum modi aut, aperiam exercitationem sit reprehenderit numquam sed inventore corrupti, ducimus quam nihil natus officiis cupiditate tempore unde! Quos!
                            Cum suscipit inventore consequatur atque harum? Doloremque at molestiae quisquam libero consectetur nulla iusto eius voluptate quaerat porro sint vitae, et commodi! Incidunt iure culpa deleniti dolores quae. Facilis, fuga?
                        </p>

                        <button 
                            type="button"
                            className='bg-red-500 cursor-pointer hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                        >Lire plus</button>

                    </motion.div>

                    {/* blog */}
                    <motion.div 
                        className='md:max-w-md'
                        variants={item}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div>
                            <img 
                                src="../../images/hero5.jpeg" 
                                alt="L'image de blog"
                                className='w-full h-80 object-cover rounded-lg'
                            />
                        </div>
                        <p className='py-2 text-gray-600'>24 juillet 2024</p>
                        <h1 className='text-3xl font-bold pb-2'>Le titre du blog </h1>
                        <p className='line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur, accusamus esse iusto maxime impedit ex delectus ad nemo quaerat fugit voluptate incidunt laboriosam ipsum ab, ut fuga voluptas eum.
                            Quibusdam minus ab unde velit natus, asperiores quod temporibus ducimus fugiat facilis distinctio vel aliquam magnam architecto aperiam iusto esse explicabo dignissimos, id repellat. Beatae impedit ratione est odio nam.
                            Quaerat minima consectetur magni tempore, qui saepe! Quaerat itaque delectus, rerum modi aut, aperiam exercitationem sit reprehenderit numquam sed inventore corrupti, ducimus quam nihil natus officiis cupiditate tempore unde! Quos!
                            Cum suscipit inventore consequatur atque harum? Doloremque at molestiae quisquam libero consectetur nulla iusto eius voluptate quaerat porro sint vitae, et commodi! Incidunt iure culpa deleniti dolores quae. Facilis, fuga?
                        </p>

                        <button 
                            type="button"
                            className='bg-red-500 cursor-pointer hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                        >Lire plus</button>

                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Blogs
