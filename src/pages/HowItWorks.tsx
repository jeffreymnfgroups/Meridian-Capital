
import { motion } from "framer-motion";
import { Tag, Shield, Database, Smartphone, Lock, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Tag className="w-12 h-12" />,
      title: "Attach Physical Tag",
      description: "Secure an Immutag to your valuable item. Each tag contains a unique cryptographic signature that cannot be duplicated or forged.",
      details: [
        "Tamper-evident adhesive ensures detection of removal attempts",
        "Military-grade encryption embedded in each tag",
        "Weather-resistant and durable construction",
        "Available in multiple sizes for different items"
      ]
    },
    {
      number: "02",
      icon: <Shield className="w-12 h-12" />,
      title: "Register on Blockchain",
      description: "Create an immutable ownership record on the blockchain. This creates permanent, unalterable proof of your ownership.",
      details: [
        "Decentralized storage across multiple blockchain nodes",
        "Cryptographic hashing ensures data integrity",
        "Smart contracts automate verification processes",
        "Instant global recognition and acceptance"
      ]
    },
    {
      number: "03",
      icon: <Database className="w-12 h-12" />,
      title: "Manage & Verify",
      description: "Use our platform to manage your items, transfer ownership, and verify authenticity anytime, anywhere.",
      details: [
        "Mobile app for instant verification",
        "Web dashboard for comprehensive management",
        "Automated alerts for suspicious activity",
        "Seamless ownership transfer process"
      ]
    }
  ];

  const techFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cryptographic Security",
      description: "Each tag uses advanced cryptographic algorithms to ensure authenticity and prevent counterfeiting."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Blockchain Transparency",
      description: "All transactions are recorded on the blockchain, providing complete transparency and auditability."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Verification",
      description: "Instant verification through smartphone apps using NFC or QR code scanning technology."
    }
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
            <TextGenerateEffect words="How Immutag" />
            <br />
            <span className="text-gradient">
              <TextGenerateEffect words="Works" />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary process that bridges physical items with digital ownership 
            through blockchain technology.
          </p>
        </motion.div>
      </section>

      {/* Detailed Steps */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="mb-20 last:mb-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-primary/30">{step.number}</div>
                    <div className="p-4 rounded-full bg-primary/20 text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-300 mb-8">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="p-8 rounded-full bg-primary/20 text-primary mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-semibold">{step.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Summary */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technology</span> Behind Immutag
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced cryptographic protocols and blockchain infrastructure ensure maximum security and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary mx-auto mb-6 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
