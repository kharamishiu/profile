import { services } from "@/utils/data";
import { Card, CardContent } from "../ui/card";

//need change color pre charge tailwind, and in data.ts should same name 
const colorMap: Record<string, string> = {
    "blue-500": "bg-blue-500",
    "green-500": "bg-green-500",
    "sky-500": "bg-sky-500",
    "orange-500": "bg-orange-500",
};

export default function Services() {
    return (
        <section className="bg-[rgb(20,22,26)]">

            <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-4 max-w-7xl ">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Tus Ideas a <span className="gradient-text">Medida</span>
                    </h2>
                    <p className="text-xl text-text-light max-w-3xl mx-auto text-slate-100">
                        Ofrecemos soluciones integrales que se adaptan perfectamente a tus
                        necesidades específicas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`${colorMap[service.color]} border-0 hover:scale-105 transition-transform duration-300 animate-slide-up group cursor-pointer
                                
                            `}
                            style={{
                                animationDelay: `${index * 0.2}s`,

                            }}
                        >
                            <CardContent className="p-8 text-center">
                                <div className="mb-6 flex justify-center">
                                    <service.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
