
import { motion } from "framer-motion";
import { Shield, Target, Eye, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "LOX Founded",
      description: "Started as a luxury authentication platform focusing on high-end goods verification."
    },
    {
      year: "2022",
      title: "Blockchain Integration",
      description: "Pivoted to blockchain technology to provide immutable proof-of-ownership."
    },
    {
      year: "2023",
      title: "Immutag Launch",
      description: "Rebranded as Immutag and launched our revolutionary blockchain-based platform."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanding worldwide with partnerships across multiple industries."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      description: "Former blockchain architect at major fintech companies"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      description: "Cryptography expert with 15+ years in security systems"
    },
    {
      name: "Michael Thompson",
      role: "Head of Product",
      description: "Product strategist focused on user experience and adoption"
    },
    {
      name: "Emily Wang",
      role: "Lead Developer",
      description: "Blockchain developer specializing in smart contract security"
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
            <TextGenerateEffect words="About" />
            <span className="text-gradient ml-4">
              <TextGenerateEffect words="Immutag" />
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing ownership verification through blockchain technology, 
            creating a world where proving ownership is as simple as scanning a tag.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/20">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To bridge the gap between physical and digital ownership through innovative blockchain technology, 
              providing everyone with unbreakable proof of their valuable possessions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/20">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              A world where ownership fraud is eliminated, where authenticity is instantly verifiable, 
              and where people have complete control over their digital identity and possessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container px-4 py-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From LOX to Immutag - The evolution of ownership verification
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  {item.year}
                </div>
              </div>
              <div className="glass rounded-xl p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Blockchain experts, security professionals, and visionaries working together 
            to revolutionize digital ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
