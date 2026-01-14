import { Building, Lightbulb, Palette, Users } from "lucide-react";

export const navItems = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Quiénes Somos" },
    { href: "#services", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#contact", label: "Contacto" },
];


export const textsHero = ["Innovación", "Creatividad", "Tecnología", "Ideas", "Impacto estrategico"];

export const services = [
    {
        id: "web",
        icon: Lightbulb,
        title: "Desarrollo Web",
        description:
            "Aplicaciones web modernas y escalables con las últimas tecnologías",
        color: "blue-500",
    },
    {
        id: "ui",
        icon: Users,
        title: "UX/UI Design",
        description:
            "Interfaces intuitivas y experiencias de usuario excepcionales",
        color: "green-500",
    },
    {
        id: "digital",
        icon: Palette,
        title: "Branding Digital",
        description: "Identidad visual coherente y memorable para tu marca",
        color: "sky-500",
    },
    {
        id: "consultoria",
        icon: Building,
        title: "Consultoría Tech",
        description: "Estrategia tecnológica para impulsar tu negocio",
        color: "orange-500",
    },
];

export const achievements = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "4+", label: "Años de Experiencia" },
    { number: "100%", label: "Satisfacción del Cliente" },
    { number: "24/7", label: "Soporte Dedicado" },
];

export const projects = [
    {
        title: "Tainer Can",
        link: "https://trainer-can.vercel.app",
        description:
            "Plataforma para enseñar y aprender sobre como entrenar a tu mascota, version DEMO",
        image:
            "/traincan.PNG",
        tags: ["Clerk", "Nextjs", "Prisma", "TailwindCSS"],
    },
    {
        title: "Site Bicileta",
        link: "https://demo-visual-bici.netlify.app/",
        description: "Layout visual para biciletas, ademasde ver estados de biciletas cuando se reparan ",
        image:
            "/siteBici.PNG",
        tags: ["Nextjs", "ShadUI", "TailwindCSS"],
    },

];