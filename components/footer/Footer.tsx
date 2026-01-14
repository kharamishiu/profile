import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-[rgb(144,144,145)] py-10'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <span className="gradient-text">MR</span>Dev
                        </h3>
                        <p className="text-text-light leading-relaxed mb-6">
                            Transformamos ideas en experiencias digitales extraordinarias. Tu
                            socio tecnológico de confianza para el crecimiento digital.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                                <span className="text-primary text-sm font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                                <span className="text-primary text-sm font-bold">tw</span>
                            </div>
                            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                                <span className="text-primary text-sm font-bold">in</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-text-light">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Desarrollo Web
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    UX/UI Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Branding Digital
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Consultoría
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Compañía</h4>
                        <ul className="space-y-2 text-text-light">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-primary transition-colors"
                                >
                                    Acerca de
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="hover:text-primary transition-colors"
                                >
                                    Portafolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Contacto
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary/20 mt-8 pt-8 text-center">
                    <p className="text-text-light">
                        © 2026 VanDigital. Todos los derechos reservados. Desarrollado con
                        ❤️ para el futuro digital.
                    </p>
                </div>
            </div>
        </footer>
    )
}
