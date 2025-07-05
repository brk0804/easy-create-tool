
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import LearnMore from "@/components/LearnMore";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <Features />
      <LearnMore />
      <Testimonial />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
