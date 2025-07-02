
import { motion } from "framer-motion";
import { CheckCircle, Circle, Zap, Shield, Globe, Bot } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Roadmap = () => {
  const quarters = [
    {
      quarter: "Q1 2024",
      status: "completed",
      title: "Foundation & Core Platform",
      items: [
        { text: "Blockchain infrastructure development", completed: true },
        { text: "Smart contract deployment", completed: true },
        { text: "Mobile app beta release", completed: true },
        { text: "Initial tag manufacturing", completed: true }
      ]
    },
    {
      quarter: "Q2 2024",
      status: "completed",
      title: "Platform Launch",
      items: [
        { text: "Public platform launch", completed: true },
        { text: "Web dashboard release", completed: true },
        { text: "Partnership program initiation", completed: true },
        { text: "Customer support infrastructure", completed: true }
      ]
    },
    {
      quarter: "Q3 2024",
      status: "current",
      title: "Expansion & Features",
      items: [
        { text: "Multi-chain support implementation", completed: true },
        { text: "Advanced analytics dashboard", completed: false },
        { text: "Bulk registration features", completed: false },
        { text: "API for third-party integrations", completed: false }
      ]
    },
    {
      quarter: "Q4 2024",
      status: "upcoming",
      title: "Global Scaling",
      items: [
        { text: "International market expansion", completed: false },
        { text: "Enterprise solutions launch", completed: false },
        { text: "Insurance partnership program", completed: false },
        { text: "Mobile app 2.0 release", completed: false }
      ]
    },
    {
      quarter: "Q1 2025",
      status: "future",
      title: "AI Integration",
      items: [
        { text: "AI-powered fraud detection", completed: false },
        { text: "Automated authenticity verification", completed: false },
        { text: "Predictive analytics for theft prevention", completed: false },
        { text: "Machine learning optimization", completed: false }
      ]
    },
    {
      quarter: "Q2 2025",
      status: "future",
      title: "DAO Governance",
      items: [
        { text: "Decentralized governance token launch", completed: false },
        { text: "Community voting platform", completed: false },
        { text: "Staking rewards program", completed: false },
        { text: "Decentralized protocol upgrades", completed: false }
      ]
    }
  ];

  const futureFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms to detect counterfeit tags and suspicious activities automatically."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Worldwide network of verification nodes ensuring instant authentication anywhere in the world."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Next-generation cryptographic protocols and quantum-resistant security measures."
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
            <TextGenerateEffect words="Product" />
            <span className="text-gradient ml-4">
              <TextGenerateEffect words="Roadmap" />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize digital ownership through blockchain technology. 
            See what we've accomplished and what's coming next.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-gray-600"></div>
            
            {quarters.map((quarter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-8 mb-16 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                  quarter.status === 'completed' ? 'bg-primary' : 
                  quarter.status === 'current' ? 'bg-primary/50 animate-pulse' : 
                  'bg-gray-600'
                }`}>
                  {quarter.status === 'completed' ? (
                    <CheckCircle className="w-8 h-8 text-black" />
                  ) : (
                    <Circle className="w-8 h-8 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="glass rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-2xl font-bold">{quarter.quarter}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        quarter.status === 'completed' ? 'bg-primary/20 text-primary' :
                        quarter.status === 'current' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {quarter.status === 'completed' ? 'Completed' :
                         quarter.status === 'current' ? 'In Progress' :
                         'Upcoming'}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-4">{quarter.title}</h4>
                    <ul className="space-y-3">
                      {quarter.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          {item.completed ? (
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                          <span className={item.completed ? 'text-white' : 'text-gray-400'}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Future</span> Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced features and capabilities that will define the next generation of digital ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-8 text-center hover:glass-hover transition-all duration-300"
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

export default Roadmap;
