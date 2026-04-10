import { Package, Stethoscope, Shield } from "lucide-react";
import { motion } from "motion/react";

const domains = [
  {
    title: "Industrial Logistics",
    description: "Autonomous heavy lifting and precise inventory sorting in high-density facilities.",
    icon: <Package className="w-6 h-6 text-primary-fixed" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Healthcare Support",
    description: "Precision surgical assistance and non-stop patient care with zero-fatigue reliability.",
    icon: <Stethoscope className="w-6 h-6 text-primary-fixed" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Security Monitoring",
    description: "Persistent perimeter patrol and real-time threat detection across distributed assets.",
    icon: <Shield className="w-6 h-6 text-primary-fixed" />,
    image: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function OperationalDomains() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="px-8 md:px-24 mb-16">
        <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tight">OPERATIONAL DOMAINS</h2>
      </div>
      
      <div className="flex gap-6 overflow-x-auto pb-12 px-8 md:px-24 no-scrollbar">
        {domains.map((domain, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="min-w-[400px] h-[500px] relative group cursor-pointer overflow-hidden border border-outline/10"
          >
            <img 
              alt={domain.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700"
              src={domain.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <div className="mb-4">{domain.icon}</div>
              <h3 className="text-3xl font-headline font-bold text-white uppercase">{domain.title}</h3>
              <p className="text-on-surface-variant font-body text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {domain.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
