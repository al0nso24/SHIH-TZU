export default function Historia (){
    return(
        <div className="p-9">
            <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-5 gap-y-5">
                <div className="col-span-6">
                    <div className="bg-gray-100 p-4 rounded">
                        <p>
                        El Shih Tzu, cuyo nombre significa "perro león" en chino, 
                        tiene su origen en el Tíbet donde se cree que fue criado 
                        por monjes budistas.
                        Esta raza es el resultado de un cruce entre el Lhasa Apso y el 
                        Pekinés. Y fue desarrollada para tener similitudes con los 
                        leones guardianes que se representan en la 
                        cultura oriental.
                    </p>
                    <p>
                        Estos perritos no solo son leales, sino que también 
                        representan un símbolo de estatus y riqueza. Su apariencia 
                        majestuosa y su pelaje lujoso eran reflejos de la opulencia de 
                        sus dueños. Eran tan valorados que se les regalaba a 
                        emperadores, incluso a dignatarios extranjeros como muestra de 
                        respeto y amistad.
                    </p>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center">
                    <img src="https://mascotaspetskennel.com/wp-content/uploads/2023/02/Shih-Tzu-4.png" alt="shih-tzu" width={"400px"} className="rounded"></img>
                </div>
            </div>


            <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-5 gap-x-10 gap-y-5">
                <div className="col-span-6">
                    <div id="dato-curioso" class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0] hover:bg-yellow-100 transition focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
                        <span class="inline-flex items-center gap-1.5">
                        </span>
                        <h3 class="text-xl font-semibold text-amber-700">
                            Dato curioso
                        </h3>
                        <p class="mt-2 text-pretty">
                            La emperatriz Tzu Hsi criaba personalmente Shih Tzus en la
                            Ciudad Prohibida. Vivían en palacios, dormían en cojines
                            de seda y comían mejor que muchos humanos.
                        </p>
                    </div>
                </div>
                <div className="col-span-6">
                    <p>
                        A lo largo de los siglos, los Shih Tzu mantuvieron su 
                        popularidad, aunque su existencia estuvo en riesgo durante los 
                        cambios políticos en China en el siglo XX.
                    </p>
                    <p>
                        Afortunadamente, algunos ejemplares fueron llevados a 
                        Inglaterra, donde la crianza continuó, permitiendo que la raza 
                        sobreviviera y se expandiera a nivel mundial.
                        Hoy en día el Shih Tzu es conocido por su comportamiento 
                        amigable y cariñoso, lo que lo convierte en una de las razas 
                        de perros más queridas de todo el mundo. Su historia rica y 
                        fascinante continua siendo un testimonio de su importancia 
                        cultural y su conexión con la nobleza china.
                    </p>
                </div>
            </div>


            <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-9">
                <div className="col-span-12">
                    <img className="w-full" src="/imagenes/shihtzu_nieve.jpg" alt="shihtzu_nieve"></img>
                </div>
            </div>
        </div>
    )
}