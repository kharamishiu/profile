import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { achievements } from '@/utils/data'

export default function WeAre() {
    return (
        <section id="about" className="bg-[rgb(20,22,26)] py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="translate-y-3.5 animate-in slide-in-from-top-0  duration-500">

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            <span className="gradient-text">Quiénes</span> Somos
                        </h2>
                        <div className="bg-purple-700 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20 text-white">
                            <p className="text-lg text-text-light leading-relaxed mb-6">
                                Somos un equipo apasionado de desarrolladores y diseñadores
                                dedicados a crear soluciones digitales que marquen la
                                diferencia. Combinamos creatividad, tecnología de vanguardia y
                                un enfoque centrado en el usuario para entregar resultados
                                excepcionales.
                            </p>
                            <p className="text-lg text-text-light leading-relaxed mb-8">
                                Nuestra misión es transformar ideas innovadoras en realidades
                                digitales que impulsen el crecimiento de nuestros clientes y
                                generen impacto positivo en sus usuarios.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    "React",
                                    "Node.js",
                                    "TypeScript",
                                    "Next.js",
                                    "Python",

                                ].map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="bg-purple-600/70 text-slate-100 border-primary/30 "
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 animate-fade-in">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className=" backdrop-blur-sm border-primary/20 text-center p-6 hover:bg-card/70 transition-colors"
                            >
                                <CardContent className="p-0">
                                    <div className="text-3xl font-bold text-primary mb-2">
                                        {achievement.number}
                                    </div>
                                    <div className="text-text-light text-sm">
                                        {achievement.label}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
