
import { motion } from "framer-motion";
import { Tag, Shield, Database } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Attach Tag",
      description: "Secure a tamper-proof Immutag to your valuable item with unique cryptographic signature."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Register Ownership",
      description: "Register your item on the blockchain creating an immutable proof-of-ownership record."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Manage & Verify",
      description: "Track, transfer, and verify ownership through our secure platform anytime, anywhere."
    }
  ];

  return (
    <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How <span className="text-gradient">Immutag</span> Works
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Three simple steps to secure your valuable items with blockchain technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass rounded-xl p-8 text-center relative"
          >
            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>
            </div>
            
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-primary/20 text-primary">
                {step.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
