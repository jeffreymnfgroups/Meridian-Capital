
import { motion } from "framer-motion";
import { Shield, Lock, Zap, Users, Globe, Award } from "lucide-react";

export const WhyImmutagSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Unbreakable Security",
      description: "Military-grade cryptography ensures your ownership records are tamper-proof and permanent."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Immutable Proof",
      description: "Blockchain technology creates permanent, unchangeable records of ownership and authenticity."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Verification",
      description: "Verify ownership and authenticity in seconds with our mobile app and web platform."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trusted Network",
      description: "Join a growing community of users protecting billions in valuable assets worldwide."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Recognition",
      description: "Accepted by insurance companies, law enforcement, and authentication services globally."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Protection",
      description: "Protect luxury goods, collectibles, electronics, and any valuable items you own."
    }
  ];

  return (
    <section className="container px-4 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-gradient">Immutag</span>?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Revolutionary technology that provides unparalleled security and peace of mind for your valuable assets.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
