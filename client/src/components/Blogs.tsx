import React from 'react'
import { RxExternalLink } from "react-icons/rx";
import Link from 'next/link';

function Blogs() {
    return (
        <section 
            id='equipe'
            className='h-auto px-4 py-10 lg:px-20'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 items-center pb-7'>
                <div>
                    <h1 className='py-1 text-4xl'> Blogs </h1>
                    <p className='text-gray-700'>FLOW Investment Bank s’engage à fournir du contenu stratégique et accessible pour aider les PME à réussir sur les marchés locaux et internationaux.</p>
                </div>

                <div className='flex md:justify-end pt-3 md:pt-0'>
                    <Link 
                        href="/pages/blog"
                        className='px-5 py-2 rounded-md bg-black text-white flex items-center gap-2'
                    >
                        Voir tous
                        <RxExternalLink />
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {/* blog */}
                <div className='md:max-w-md'>
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
                        className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                    >Lire plus</button>
                </div>

                {/* blog */}
                <div className='md:max-w-md'>
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
                        className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                    >Lire plus</button>

                </div>

                {/* blog */}
                <div className='md:max-w-md'>
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
                        className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-3 rounded-md'
                    >Lire plus</button>

                </div>
            </div>
        </section>
    )
}

export default Blogs
