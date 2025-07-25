import { FaLightbulb, FaBalanceScale, FaMedal, FaRocket } from 'react-icons/fa'

function Service() {
    return (
        <section 
            id='service'
            className='py-10 bg-black lg:px-20 md:px-5'
        >
            <div>
                <h1 className='text-3xl flex justify-center pb-2 text-white'> Produits & Services</h1>
                <p className='text-gray-300 text-xl text-center lg:px-36 px-4'>
                    Nos services sont conçus pour répondre aux besoins réels des PME africaines et leur offrir des leviers concrets de croissance. Ensemble, construisons votre avenir.
                </p>
            </div>

            <div className="pt-10 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* 📸 Image à gauche */}
                    <div className="relative w-full h-[400px] hover:scale-110 transition rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src="../../images/services.jpeg"  
                            alt="Services Flow"
                            className="object-cover bg-center bg-no-repeat h-full w-full "
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md hover:scale-105 transition">
                            <FaRocket className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold mb-2">Levée de fonds</h3>
                            <p>
                                Accédez aux capitaux nécessaires pour accélérer votre croissance.
                            </p>
                        </div>
                        <div className="bg-rose-200 text-gray-900 p-4 rounded-xl shadow-md hover:scale-105 transition">
                            <FaLightbulb className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold mb-2">Innovation stratégique</h3>
                            <p>
                            Bénéficiez d’une structuration sur mesure adaptée à vos objectifs.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-emerald-400 text-white p-4 rounded-xl shadow-md hover:scale-105 transition">
                            <FaBalanceScale className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold mb-2">Fusions & acquisitions</h3>
                            <p>
                            Saisissez les meilleures opportunités de croissance externe.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-black border border-gray-400 text-white p-4 rounded-xl shadow-md hover:scale-105 transition">
                            <FaMedal className="text-3xl mb-4" />
                            <h3 className="text-xl font-bold mb-2">Visibilité Média</h3>
                            <p>
                            Mettez en avant votre projet à travers notre média professionnel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
