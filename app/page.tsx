import Hero from "@/components/hero/Hero";
import Portafolio from "@/components/portafolio/Portafolio";
import Services from "@/components/services/Services";
import WeAre from "@/components/weAre/WeAre";


export default function Home() {
  return (
    <div className="mt-16">
      <Hero />
      <Services />
      <WeAre />
      <Portafolio />
    </div>
  );
}
