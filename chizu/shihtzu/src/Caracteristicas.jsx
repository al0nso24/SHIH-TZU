export default function Caracteristicas (){
    return(
        <div className="p-9">
            {/*PRIMERA SECCIÓN*/}
            <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mb-6">
                <div className="col-span-12">
                    <h2 className="text-center text-amber-700 font-bold text-4xl">
                        Características físicas
                    </h2>
                </div>
            </div>
            <div className="caracteristicas">
                <div className="grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-x-4 gap-y-5">
                    <div className="col-span-3">
                        <div class="carta rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/tamano.jpg" alt="tamaño_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Tamaño y peso</div>
                                <p class="text-gray-700 text-base">
                                    Son perros pequeños y compactos, con una altura de
                                    20 a 28 cm y un peso de 4 a 7,5 kg, de cuerpo
                                    alargado con pecho amplio.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#pequeño</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#compacto</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bajito</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div class="carta rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/pelaje.jpg" alt="pelaje"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Pelaje</div>
                                <p class="text-gray-700 text-base">
                                    Pelaje largo, denso y sedoso que requiere muchos
                                    cuidados para mantenerlo.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#brillante</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#suavecito</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nube</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div class="carta rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/cabeza.jpg" alt="cabeza_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Cabeza y hocico</div>
                                <p class="text-gray-700 text-base">
                                    Su cabeza es ancha y redonda con ojos redondos y
                                    expresivos.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ojosgrandes</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hocicocorto</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cabezaancha</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div class="carta rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/cola.jpg" alt="cola_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Cola</div>
                                <p class="text-gray-700 text-base">
                                    La cola es de inserción alta y se lleva alegremente sobre
                                    la espalda, también está cubierta de mucho pelaje.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#enrolada</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#esponjosa</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#peluda</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*SEGUNDA SECCIÓN*/}
                <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:gri-cols-12 xl:grid-cols-12 mt-9 mb-6">
                    <div className="col-span-12">
                        <h2 className="text-amber-700 text-4xl text-center font-bold">
                            Temperamento
                        </h2>
                    </div>
                </div>
                <div className="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-4 gap-y-5">
                    <div className="col-span-6 flex justify-end">
                        <div class="carta max-w-sm rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/shihtzu_sociabilidad.jpg" alt="tamaño_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Sociabilidad</div>
                                <p class="text-gray-700 text-base">
                                    Los Shih Tzu son conocidos por ser perros muy sociables y 
                                    cariñosos. 
                                    Estos perritos se adaptan fácilmente.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#amigable</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sociable</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bajito</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div class="carta max-w-sm rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/shihtzu_personalidad.jpg" alt="tamaño_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Personalidad</div>
                                <p class="text-gray-700 text-base">
                                    Son perritos que buscan atención y disfrutan de
                                    interactuar con las personas, y tienen un carácter 
                                    alegre y juguetón.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cariñoso</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dulce</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tierno</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*TERCERA SECCIÓN*/}
                <div className="grid sm:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 mt-9 mb-6">
                    <div className="col-span-12">
                        <h2 className="text-4xl text-center text-amber-700 font-bold">
                            Cuidados para tu Shih Tzu
                        </h2>
                    </div>
                </div>
                <div className="grid sm:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 lg:col-grid-cols-12 gap-x-4 gap-y-5">
                    <div className="col-span-6 flex justify-end">
                        <div class="carta max-w-sm rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/shihtzu_aseo.jpg" alt="tamaño_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Aseo</div>
                                <p class="text-gray-700 text-base">
                                    Debido a su pelaje largo, requieren un aseo regular, incluyendo cepillados frecuentes y baños para mantener su pelaje en buen estado y libre de enredos.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#baño</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fresquito</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#grooming</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div class="carta max-w-sm rounded overflow-hidden shadow-lg h-125">
                            <img class="w-full" src="/imagenes/shihtzu_corriendo.jpg" alt="tamaño_shihtzu"></img>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Ejercicio</div>
                                <p class="text-gray-700 text-base">
                                    Aunque son pequeños, necesitan ejercicio regular 
                                    para mantenerse saludables como paseos cortos y 
                                    juegos son ideales para esta raza.
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#libre</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trotecito</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#patitas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}