import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CheckIn } from "@/components/sections/CheckIn";
import { Conditions } from "@/components/sections/Conditions";
import { Doctor } from "@/components/sections/Doctor";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Privacy } from "@/components/sections/Privacy";
import { Stories } from "@/components/sections/Stories";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Conditions />
        <CheckIn />
        <Features />
        <BeforeAfter />
        <Doctor />
        <Stories />
        <Privacy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
