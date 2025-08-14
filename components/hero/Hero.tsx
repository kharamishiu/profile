'use client'

import { textsHero } from '@/utils/data';
import { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const currentWord = textsHero[currentIndex];

                if (isDeleting) {
                    setCurrentText(currentWord.substring(0, currentText.length - 1));
                } else {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                }

                if (!isDeleting && currentText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 4000);
                } else if (isDeleting && currentText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % textsHero.length);
                }
            },
            isDeleting ? 50 : 100,
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentIndex, textsHero]);


    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#5b417b]"
        >
            {/* Dynamic Particle Background */}
            <div className="absolute inset-0">
                {/* Primary Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-bg-[rgb(20,22,26)]   via-primary/5 to-background"></div>

                {/* Animated Mesh Gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-accent/30 to-feature-blue rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-feature-green to-feature-red rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-slide-up">


                    {/* Main Heading with Typewriter Effect */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 mb-8 leading-tight">
                        <span className="block mb-4">Desarrollamos</span>
                        <span className="relative block">
                            <span className="gradient-text">{currentText}</span>
                            <span className="animate-pulse text-primary">|</span>
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-xl opacity-50"></div>
                        </span>
                        <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl text-text-light">
                            Digital
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-text-light mb-12 max-w-4xl mx-auto leading-relaxed">
                        Transformamos conceptos revolucionarios en experiencias digitales
                        que
                        <span className="text-primary font-semibold"> inspiran</span>,
                        <span className="text-accent font-semibold"> conectan</span> y
                        <span className="text-feature-green font-semibold">
                            {" "}
                            trascienden
                        </span>
                    </p>

                    {/* Interactive Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            className=" text-lg px-10 py-5 bg-gradient-to-r from-purple-700  via-purple-500  to-accent   hover:to-yellow-500 group relative overflow-hidden shadow-2xl shadow-primary/25 "
                        >
                            <span className="relative z-10 flex items-center font-semibold ">
                                <Star className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                                Iniciar Proyecto
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </span>

                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-10 py-5 border-2 border-primary/30 text-white hover:bg-primary/10 backdrop-blur-sm group relative bg-purple-800/50"
                        >
                            <span className="flex items-center font-semibold">
                                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover:scale-110 transition-transform"></div>
                                Explorar Portfolio
                            </span>
                        </Button>
                    </div>

                    {/* Interactive Stats Grid 
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { number: "50+", label: "Proyectos", icon: "🚀" },
                            { number: "3+", label: "Años", icon: "⚡" },
                            { number: "100%", label: "Satisfacción", icon: "✨" },
                            { number: "24/7", label: "Soporte", icon: "🛡️" },
                        ].map((stat, index) => (
                            <Card
                                key={index}
                                className="bg-card/20 backdrop-blur-sm border-primary/20 p-6 hover:bg-card/30 transition-all duration-300 group cursor-pointer hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-0 text-center">
                                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-text-light font-medium">
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    */}

                </div>
            </div>

            {/* Floating Action Elements */}
            <div className="absolute text-white top-1/2 left-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 md:hidden">
                {[
                    { icon: "💡", label: "Ideas" },
                    { icon: "🎨", label: "Diseño" },
                    { icon: "⚙️", label: "Desarrollo" },
                    { icon: "🚀", label: "Lanzamiento" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full p-3 hover:bg-primary/10 transition-all duration-300 hover:scale-110 items-center flex justify-center">
                            <span className="text-xl">{item.icon}</span>
                        </div>
                        <div className="text-xs text-text-light text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-4">
                {["React", "Node.js", "Python"].map((tech, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center bg-transparent backdrop-blur-sm border border-primary/20 rounded-lg p-2 hover:bg-purple-200 transition-all duration-300 hover:scale-105 cursor-pointer "
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <span className="text-xs text-primary font-medium">{tech}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
