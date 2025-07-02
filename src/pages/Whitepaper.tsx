
import { motion } from "framer-motion";
import { Download, FileText, Shield, Database, Users, Globe, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Whitepaper = () => {
  const sections = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Executive Summary",
      description: "Overview of Immutag's mission, technology, and market opportunity in the digital ownership space."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technology Overview",
      description: "Detailed explanation of our blockchain infrastructure, cryptographic protocols, and security measures."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Tokenomics",
      description: "Economic model, token distribution, staking mechanisms, and governance structure."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Use Cases",
      description: "Real-world applications across industries including luxury goods, electronics, and collectibles."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Comprehensive analysis of the digital ownership market and competitive landscape."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technical Architecture",
      description: "In-depth technical specifications, smart contract design, and infrastructure details."
    }
  ];

  const keyPoints = [
    "Revolutionary blockchain-based proof-of-ownership system",
    "Military-grade security with tamper-proof physical tags",
    "Scalable infrastructure supporting millions of items",
    "Decentralized governance through DAO implementation",
    "Multi-chain compatibility for maximum accessibility",
    "AI-powered fraud detection and prevention"
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container px-4 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <TextGenerateEffect words="Immutag" />
            <br />
            <span className="text-gradient">
              <TextGenerateEffect words="Whitepaper" />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technical documentation covering our blockchain technology, 
            tokenomics, and the future of digital ownership verification.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="button-gradient">
              <Download className="mr-2 w-5 h-5" />
              Download Whitepaper
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Highlights */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Essential insights from our comprehensive whitepaper
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Document <span className="text-gradient">Sections</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the comprehensive topics covered in our whitepaper
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary mx-auto mb-6 w-fit">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{section.title}</h3>
              <p className="text-gray-300 text-center">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Infographic Preview */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Interactive</span> Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visual representation of Immutag's technology and ecosystem
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Physical Tags</h3>
                <p className="text-gray-300">Secure hardware with cryptographic signatures</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Blockchain Registry</h3>
                <p className="text-gray-300">Immutable ownership records</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-gray-300">Worldwide verification system</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto glass rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to dive deeper?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Download our complete whitepaper to learn more about the technology, 
              tokenomics, and future of digital ownership with Immutag.
            </p>
            <Button size="lg" className="button-gradient">
              <Download className="mr-2 w-5 h-5" />
              Download Full Whitepaper
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Whitepaper;
