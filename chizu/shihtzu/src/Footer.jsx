import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Footer (){

    const [nombre, setNombre] = useState("");

    // e.preventDefault() es para que no se recargue la página al enviar el formulario.
    const registrarPerro = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3002/agregarPerrito", {nombre}).then((res)=>{
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Perrito registrado"
            });
            setNombre(""); //Vaciar el campo luego de darle al botón de enviar.

        }).catch(function(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo registrar el nombre del perrito. Intente de nuevo.",
                footer: JSON.parse(JSON.stringify(error)).message
            });
        })
    }

    return(
        <div>
            <footer class="bg-amber-700">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="lg:grid lg:grid-cols-2">
                        <div class="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:py-16 lg:ps-16 dark:border-gray-800">
                            <div class="block text-teal-600 lg:hidden dark:text-teal-300">
                            </div>

                            <div class="mt-8 space-y-4 lg:mt-0">
                                <span class="hidden h-1 w-10 rounded-sm bg-teal-500 lg:block"></span>

                                <div>
                                    <h2 class="text-2xl font-medium text-white">Registra a tu perrito</h2>

                                    <p class="mt-4 max-w-lg text-white">
                                        Queremos que tu perrito se una a nuestra familia, coloca su nombre.
                                    </p>
                                </div>

                                {/*Para enviar el formulario es con onSubmit y la función 
                                sin paréntesis.*/}
                                <form class="mt-6 w-full" onSubmit={registrarPerro}>
                                    <div class="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                                        <input type="text" placeholder="nombre del perrito" class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm text-white"
                                        value={nombre}
                                        onChange={(e)=>setNombre(e.target.value)} required></input>

                                        <button class="mt-1 w-full rounded-sm bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 hover:cursor-pointer sm:mt-0 sm:w-auto sm:shrink-0">
                                            Registrar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="py-8 lg:py-16 lg:pe-16">
                            <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1">
                                <h2 className="titulo text-4xl text-white font-bold">ShihTzulandia 🐾</h2>
                                <div>
                                    <p class="font-medium text-white mt-3">Secciones de la página</p>

                                    <ul class="mt-6 space-y-4 text-sm">
                                        <li>
                                            <Link to="/historia" class="text-white transition hover:opacity-75 dark:text-gray-200">
                                                Historia
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/caracteristica" class="text-white transition hover:opacity-75 dark:text-gray-200">
                                                Características
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/alimentacion" class="text-white transition hover:opacity-75 dark:text-gray-200">
                                                Alimentación
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
                                <p class="mt-8 text-sm text-white">
                                    © 2026. Alonso Zegarra Velásquez.
                                    <div className="flex mt-3 gap-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg> zegarrav24@gmail.com
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}