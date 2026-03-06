import Swal from 'sweetalert2'
export default function Alimentacion() {

    const mensajeAlerta = () => {
        Swal.fire({
            icon: "warning",
            title: "Advertencia",
            text: "Es importante dar estos alimentos con moderación.",
        });
    }

    return(
        <div className='p-9'>
            <div className='grid sm:grid-cols-12 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
                <div className='col-span-1 flex justify-center'>
                    <button onClick={mensajeAlerta} class="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded">
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>Leer esto
                        </div>
                    </button>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-5'>
                <div className='col-span-12'>
                    <h2 className='text-4xl text-amber-700 font-bold text-center'>
                        Alimentos naturales recomendados para el Shih Tzu
                    </h2>
                    <p className='text-center mt-4 text-lg font-semibold'>
                        (Para garantizar que el perrito reciba todos los nutrientes necesarios, 
                        es fundamental seleccionar alimentos naturales que se adapten a sus 
                        necesidades específicas.
                        Es recomendable consultar con un veterinario antes de introducir 
                        cualquier alimento a la dieta de tu Shih Tzu para asegurarte 
                        de que sea seguro y adecuado para su salud).
                    </p>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-15 gap-x-5 gap-y-5 p-4 bg-amber-100 rounded-xl'>
                <div className='col-span-6'>
                    <h2 className='text-amber-700 text-2xl font-bold'>
                        Pollo y pavo
                    </h2>
                    {/*
                        list-disc: Puntitos para una lista.
                        pl: padding-left.
                    */}
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>Carnes blancas bajas en grasa y fáciles de digerir.</li>
                        <li>
                            Esenciales para el crecimiento y mantenimiento de los músculos y 
                            tejidos.
                        </li>
                        <li>
                            El pavo es rico en triptófano, un aminoácido que produce 
                            serotonina (neurotransmisor que favore la sensación de 
                            relajamiento y bienestar).
                        </li>
                        <li>
                            Ayudan a mantener un peso saludable, ya que los Shih Tzu 
                            son propensos a la obesidad.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6'>
                    <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-5 gap-y-5'>
                        <div className='col-span-6'>
                            <img className='w-full rounded-xl' src='/imagenes/pavo.jpeg' alt='pavito'></img>
                        </div>
                        <div className='col-span-6'>
                            <img className='w-full rounded-xl' src='/imagenes/pllo.jpg' alt='pollito'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 mt-7 gap-x-5 gap-y-5 p-4 bg-amber-100 rounded-xl'>
                <div className='col-span-6'>
                    <h2 className='text-amber-700 text-2xl font-bold'>
                        Cordero
                    </h2>
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>
                            Fuente de proteína rica y sabrosa, ideal para perros con 
                            sensibilidad alimentaria.
                        </li>
                        <li>
                            Reduce el riesgo de obesidad y enfermedades relacionadas 
                            con el sobrepeso en los perritos.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"400px"} className='rounded-xl' src='/imagenes/cordero.jpg' alt='cordero'></img>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-7 gap-x-5 gap-y-5 p-4 bg-amber-100 rounded-xl'>
                <div className='col-span-6'>
                    <h2 className='text-2xl font-bold text-amber-700'>
                        Pescado
                    </h2>
                    <ul className='mt-4 list-disc list-outside pl-10'>
                        <li>
                            Rico en ácidos grasos omega-3, beneficiosos para la piel 
                            y el pelaje.
                        </li>
                        <li>
                            Se debe tener en cuenta que, aunque el salmón y la sardina 
                            son beneficiosos deben ser ofrecidos con moderación y cocidos 
                            adecuadamente para evitar cualquier peligro.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6'>
                    <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-5 gap-y-5'>
                        <div className='col-span-6'>
                            <img className='w-full rounded-xl' src='/imagenes/sardina.jpg' alt='salmon'></img>
                        </div>
                        <div className='col-span-6'>
                            <img className='w-full rounded-xl' src='/imagenes/salmon.jpeg' alt='sardina'></img>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-15 mb-15 border-amber-700'></hr>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-5 gap-y-5 bg-amber-100 p-4 rounded-xl'>
                <div className='col-span-6'>
                    <h2 className='text-2xl text-amber-700 font-bold'>
                        Zanahoria
                    </h2>
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>Ricas en vitamina A y excelentes para la salud ocular.</li>
                        <li>
                            Su textura cruda ayuda a limpiar los dientes (ideal para los Shih Tzu).
                        </li>
                        <li>
                            Snack bajo en calorías y fuente de fibra que ayuda a la 
                            digestión.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"409px"} className='rounded-xl' src='/imagenes/zanahoria.jpg' alt='zanahoria'></img>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-7 bg-amber-100 p-4 rounded-xl gap-x-5 gap-y-5'>
                <div className='col-span-6'>
                    <h2 className='text-2xl text-amber-700 font-bold'>
                        Manzana
                    </h2>
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>
                            Aportan fibra y vitamina C, pero deben ofrecerse sin 
                            semillas ni corazón.
                        </li>
                        <li>
                            Proporciona un sabor dulce y crujiente que a los perritos 
                            les encanta.
                        </li>
                        <li>
                            Es de suma importancia quitar las semillas y el corazón de 
                            la manzana antes de dársela al perrito, ya que pueden ser 
                            tóxicos. <br></br>Es recomendable dársela en trocitos 
                            pequeños.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"462px"} className='rounded-xl' src='/imagenes/manzanas.jpg' alt='manzanas'></img>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-7 bg-amber-100 rounded-xl p-4 gap-x-5 gap-y-5'>
                <div className='col-span-6'>
                    <h2 className='text-2xl font-bold text-amber-700'>
                        Espinaca
                    </h2>
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>
                            Los nutrientes que tiene la espinaca son buenas para 
                            diversas funciones corporales (formación de glóbulos rojos, 
                            salud ósea y dental), función muscular y nerviosa, y 
                            funciones inmunitarias.
                        </li>
                        <li>
                            La espinaca es una fuente de fibra, que puede ayudar a 
                            regular el tránsito instestinal y prevenir el estreñimiento 
                            en los perritos.
                        </li>
                        <li>
                            Se recomienda no darle espinaca a perritos con problemas de 
                            riñon, debilidad muscular o problemas respiratorios.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"440px"} className='rounded-xl' src='/imagenes/espinaca.jpg' alt='espinaca'></img>
                </div>
            </div>
            <hr className='border-amber-700 mt-15 mb-15'></hr>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 bg-amber-100 p-4 gap-x-5 gap-y-5 rounded-xl'>
                <div className='col-span-6'>
                    <h2 className='text-2xl font-bold text-amber-700'>
                        Aceite de salmón
                    </h2>
                    <ul className='list-disc list-outside pl-10 mt-4'>
                        <li>
                            Alto contenido en omega-3, mejora la salud ocular y 
                            cardiovascular.
                        </li>
                        <li>
                            Contribuye a la salud del corazón del perrito y los 
                            parámetros inmunitarios.
                        </li>
                        <li>
                            Es importante para el desarrollo cerebral, especialmente 
                            en los cachorros.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"348px"} className='rounded-xl' src="/imagenes/aceite_salmon.jpg" alt="aceite_salmon"></img>
                </div>
            </div>
            <div className='grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-x-5 gap-y-5 p-4 bg-amber-100 rounded-xl mt-7'>
                <div className='col-span-6'>
                    <h2 className='text-amber-700 text-2xl font-bold'>
                        Aceite de coco
                    </h2>
                    <ul className='mt-4 list-disc list-outside pl-10'>
                        <li>
                            Actúa mejorando la digestión de los perritos favoreciendo 
                            la absorción de nutrientes.
                        </li>
                        <li>
                            Eliminando las bacterias, acelera la recuperación natural de 
                            la piel.
                        </li>
                        <li>
                            El aceite de coco puede prevenir la acumulación de 
                            secreción en los oídos, así como también la futura 
                            producción de hongos y bacterias que puedan provocar la 
                            otitis.
                        </li>
                    </ul>
                </div>
                <div className='col-span-6 flex justify-center'>
                    <img width={"384px"} className='rounded-xl' src='/imagenes/aceite_coco.jpg' alt='aceite_coco'></img>
                </div>
            </div>
        </div>
    )
}