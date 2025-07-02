
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Award } from "lucide-react";

export const TrustSection = () => {
  const trustFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military-Grade Security",
      description: "Advanced cryptographic protocols protect your data with the same technology used by financial institutions."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Complete Transparency",
      description: "Every transaction is recorded on the blockchain, providing full visibility and auditability."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy Protected",
      description: "Your personal information remains private while ownership records are securely verified."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certified",
      description: "Compliance with international security standards and regulations."
    }
  ];

  return (
    <section className="container px-4 py-20 bg-black relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #4ADE80 0%, transparent 50%)',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built on <span className="text-gradient">Trust</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Security and transparency are at the core of everything we do. 
          Your trust is our foundation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {trustFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass rounded-xl p-8 hover:glass-hover transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/20 text-primary flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center relative z-10"
      >
        <p className="text-sm text-gray-400 mb-6">Trusted by leading organizations worldwide</p>
        <div className="flex justify-center items-center gap-8 opacity-50">
          <div className="glass rounded-lg px-6 py-3">
            <span className="text-sm font-medium">ISO 27001 Certified</span>
          </div>
          <div className="glass rounded-lg px-6 py-3">
            <span className="text-sm font-medium">SOC 2 Compliant</span>
          </div>
          <div className="glass rounded-lg px-6 py-3">
            <span className="text-sm font-medium">GDPR Ready</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
