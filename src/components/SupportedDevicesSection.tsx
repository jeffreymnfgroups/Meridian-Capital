
import { motion } from "framer-motion";

export const SupportedDevicesSection = () => {
  const devices = [
    {
      name: "Smartphones",
      image: "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
      description: "iOS & Android"
    },
    {
      name: "Tablets",
      image: "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
      description: "iPad & Android"
    },
    {
      name: "Desktop",
      image: "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png",
      description: "Windows & Mac"
    },
    {
      name: "Web Browser",
      image: "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png",
      description: "All major browsers"
    },
    {
      name: "NFC Tags",
      image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
      description: "Physical tags"
    }
  ];

  return (
    <section className="container px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Supported <span className="text-gradient">Devices</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Access your ownership records from any device, anywhere in the world.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {devices.map((device, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 text-center hover:glass-hover transition-all duration-300"
          >
            <div className="mb-4">
              <img
                src={device.image}
                alt={device.name}
                className="w-12 h-12 mx-auto object-contain filter brightness-0 invert opacity-70"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{device.name}</h3>
            <p className="text-sm text-gray-400">{device.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
