import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getHero, getServices, getProjects, getTestimonials, getSettings } from "@/lib/api";

export const revalidate = 60;

export default async function Home() {
  let hero = null;
  let services = null;
  let projects = null;
  let testimonials = null;
  let settings = null;

  try {
    [hero, services, projects, testimonials, settings] = await Promise.all([
      getHero(),
      getServices(),
      getProjects(),
      getTestimonials(),
      getSettings(),
    ]);
  } catch {
    // API not available, components will use fallback data
  }

  return (
    <main>
      <Navbar />
      <Hero data={hero} />
      <Services data={services} />
      <Portfolio data={projects} />
      <Testimonials data={testimonials} />
      <Contact />
      <Footer settings={settings} />
    </main>
  );
}
