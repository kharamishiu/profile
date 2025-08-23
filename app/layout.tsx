import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/navMenu/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VanDigital",
  description: "Soy desarrollador web en Chile especializado en Next.js, MERN, React, PostgreSQL y MongoDB. Creo páginas web, SaaS y aplicaciones a medida rápidas, seguras y escalables.",
  keywords: [
    "desarrollo web",
    "desarrollo de software",
    "páginas web profesionales",
    "diseño y desarrollo web a medida",
    "programador freelance",
    "agencia de desarrollo web",
    "desarrollo de aplicaciones",
    "soluciones digitales",
    "desarrollo de plataformas online",
    "servicios de programación",
    "software empresarial",
    "páginas web seguras y rápidas",
    "desarrollo web escalable",
    "mantenimiento de páginas web",
    "programador independiente",
    "programador Next.js",
    "desarrollo con Next.js",
    "aplicaciones modernas con Next.js",
    "páginas rápidas con Next.js",
    "optimización SEO con Next.js",
    "desarrollo SSR con Next.js",
    "Next.js para eCommerce",
    "migración a Next.js",
    "programador React",
    "desarrollo frontend con React",
    "aplicaciones web con React y Next.js",
    "React para startups",
    "Next.js para SaaS",
    "sitios dinámicos con Next.js",
    "programador fullstack Next.js",
    "programador MERN",
    "desarrollo con MERN stack",
    "aplicaciones MERN escalables",
    "desarrollo backend con Node.js",
    "MongoDB para proyectos web",
    "PostgreSQL para SaaS",
    "integración MERN con Next.js",
    "MERN stack para startups",
    "programador Node.js",
    "aplicaciones modernas con MERN",
    "MERN con React y Next.js",
    "desarrollo web con MERN",
    "MERN y PostgreSQL integrados",
    "SaaS con MongoDB y PostgreSQL",
    "soluciones MERN personalizadas",
    "desarrollo SaaS",
    "aplicaciones SaaS personalizadas",
    "SaaS para empresas",
    "creación de software a medida",
    "aplicaciones empresariales",
    "desarrollo de CRM",
    "plataformas digitales en la nube",
    "SaaS con seguridad avanzada",
    "software a medida",
    "SaaS para startups",
    "creación de sistemas online",
    "programador SaaS",
    "aplicaciones escalables en la nube",
    "desarrollo de ERP",
    "soluciones SaaS personalizadas",
    "diseño web profesional",
    "programador web",
    "software a medida en la nube",
    "desarrollo de aplicaciones móviles",
    "desarrollo frontend avanzado",
    "servicios web personalizados",
    "creación de páginas web",
    "programador fullstack",
    "tiendas online",
    "eCommerce con Next.js",
    "Shopify y Next.js",
    "WooCommerce y React",
    "desarrollo de marketplaces",
    "integración de pagos en SaaS",
    "pasarelas de pago en Next.js",
    "creación de catálogos online",
    "desarrollo de landing pages",
    "páginas de ventas con React"
  ],
  authors: [{ name: "Marcos RC" }],
  openGraph: {
    title: "Desarrollo Web | Next.js, MERN & SaaS a medida",
    description:
      "Desarrollo páginas web y aplicaciones a medida en Chile usando Next.js, MERN, React, PostgreSQL y MongoDB.",
    url: "https://vandigital.cl",
    siteName: "vanDigital",
    locale: "es_CL",
    type: "website",
  },
  alternates: {
    canonical: "https://vandigital.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <NavMenu />
        </div>

        {children}
      </body>
    </html>
  );
}
