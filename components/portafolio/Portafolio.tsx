
import { Card, CardContent } from '../ui/card'
import { ArrowRight, Badge } from 'lucide-react'
import { Button } from '../ui/button'
import { projects } from '@/utils/data'

export default function Portafolio() {

    return (
        <section className="bg-[rgb(20,22,26)] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Nuestro <span className="gradient-text">Portafolio</span>
                    </h2>
                    <p className="text-xl text-text-light max-w-3xl mx-auto text-slate-100">
                        Descubre algunos de los proyectos que hemos desarrollado con pasión
                        y dedicación
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <div className="text-white/60 text-sm">
                                    Vista Previa del Proyecto
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-text-light mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge

                                            key={tag}

                                            className="text-xs border-primary/30 text-primary"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary/30 hover:text-white hover:bg-purple-600/70 bg-purple-400"
                    >
                        Ver Todos los Proyectos
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
