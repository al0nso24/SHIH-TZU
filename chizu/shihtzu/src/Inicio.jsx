import { Link } from "react-router-dom";

export default function Inicio(){
    return(
        <div>
            <section class="lg:grid lg:h-screen lg:place-content-center">
                <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div class="max-w-prose text-left">
                        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Descubre todo sobre la raza más tierna y juguetona.
                        </h1>

                        <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Compañeros leales que merecen el mejor cuidado del mundo.
                        </p>

                        <div class="mt-4 flex gap-4 sm:mt-6">
                            <Link class="inline-block rounded border border-amber-600 bg-amber-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-amber-800" to="/historia">
                                Vamos allá!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}