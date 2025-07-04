import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import Bestsellers from "./components/Bestsellers";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen  ">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Bestsellers />
      <Testimonials />
      <Features />
      <Newsletter />
    </div>
  );
}
