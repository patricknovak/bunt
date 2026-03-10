import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AIShowcase from "@/components/home/AIShowcase";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <AIShowcase />
      <Testimonials />
    </>
  );
}
