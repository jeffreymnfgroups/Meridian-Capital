import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyImmutagSection } from "@/components/WhyImmutagSection";
import { SupportedDevicesSection } from "@/components/SupportedDevicesSection";
import { TrustSection } from "@/components/TrustSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Shield className="w-4 h-4 inline-block mr-2" />
            Blockchain-based proof-of-ownership platform
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Own it." />
            </span>
            <br />
            <span className="text-primary">
              <TextGenerateEffect words="Prove it." />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Protect it." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Revolutionary blockchain technology that connects physical items to digital ownership through{" "}
            <span className="text-white">secure, immutable proof-of-ownership.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Join the Waitlist
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="link" className="text-white">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <div className="flex justify-center mt-20">
          <img 
            src="/proof.png" 
            alt="Proof of Ownership Example" 
            className="rounded-xl shadow-lg max-w-full h-[32rem] object-contain bg-black/40"
          />
        </div>
      </motion.section>

      {/* What is Immutag Section */}
      <section className="container px-4 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-gradient">Immutag</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immutag bridges the physical and digital worlds through blockchain technology, 
              creating unbreakable links between your valuable items and their digital ownership records.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Physical Tags</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Secure, tamper-proof tags that attach to your valuable items, 
                  each with unique cryptographic signatures.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Blockchain Registry</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Immutable digital records stored on blockchain, 
                  providing permanent proof of ownership and authenticity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Mini Preview */}
      <HowItWorksSection />

      {/* Why Immutag */}
      <WhyImmutagSection />

      {/* Supported Devices */}
      <SupportedDevicesSection />

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Trust Section */}
      <TrustSection />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* Early Access Signup */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/src/assets/tech-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your ownership?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of early adopters who are already protecting their valuable items with Immutag.
          </p>
          <Button size="lg" className="button-gradient">
            Join the Waitlist
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
