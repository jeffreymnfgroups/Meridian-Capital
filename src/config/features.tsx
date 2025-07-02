
import { Shield, Lock, Zap, Database, Eye, Award } from "lucide-react";

export const features = [
  {
    title: "Blockchain Registry",
    description: "Immutable ownership records stored on decentralized blockchain infrastructure for maximum security and permanence.",
    icon: <Database className="w-6 h-6" />,
    image: "/src/assets/blockchain-circuit.jpg"
  },
  {
    title: "Smart Authentication",
    description: "Advanced cryptographic verification ensures only authorized users can access and modify ownership records.",
    icon: <Shield className="w-6 h-6" />,
    image: "/src/assets/digital-security.jpg"
  },
  {
    title: "Tamper-Proof Tags",
    description: "Physical tags with unique signatures that detect any attempts at removal or tampering.",
    icon: <Lock className="w-6 h-6" />,
    image: "/src/assets/tech-code.jpg"
  },
  {
    title: "Instant Verification",
    description: "Real-time ownership verification through mobile app scanning and web-based authentication.",
    icon: <Zap className="w-6 h-6" />,
    image: "/src/assets/innovation-bulb.jpg"
  },
  {
    title: "Transparent Tracking",
    description: "Complete audit trail of all ownership transfers and authenticity verifications.",
    icon: <Eye className="w-6 h-6" />,
    image: "/src/assets/digital-security.jpg"
  },
  {
    title: "Premium Protection",
    description: "Enterprise-grade security for high-value assets including art, jewelry, electronics, and collectibles.",
    icon: <Award className="w-6 h-6" />,
    image: "/src/assets/blockchain-circuit.jpg"
  }
];
