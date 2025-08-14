import { Building, Lightbulb, Palette, Users } from "lucide-react";

export const navItems = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Quiénes Somos" },
    { href: "#services", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#contact", label: "Contacto" },
];


export const textsHero = ["Innovación", "Creatividad", "Tecnología", "Futuro de AI y MCP"];

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
        title: "E-commerce Platform",
        description:
            "Plataforma completa de comercio electrónico con gestión avanzada",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "SaaS Dashboard",
        description: "Dashboard analítico para empresa de software como servicio",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        tags: ["Vue.js", "D3.js", "Python"],
    },
    {
        title: "Mobile Banking App",
        description:
            "Aplicación móvil bancaria con alta seguridad y UX excepcional",
        image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
        tags: ["React Native", "Firebase", "Security"],
    },
];