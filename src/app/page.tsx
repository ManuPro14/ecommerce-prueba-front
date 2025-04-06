import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import BenefitsSection from "./components/BenefitsSection";
import PromotionsBanner from "./components/PromotionBanner";
import Testimonials from "./components/Testimonials";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-400 gap-8">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center gap-8">
        <Hero />
        <PromotionsBanner />
        <FeaturedProducts />
        <BenefitsSection />
        <Testimonials />
        <NewsletterSignup />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}