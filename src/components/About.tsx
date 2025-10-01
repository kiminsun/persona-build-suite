import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutData from "@/data/about.json";
import { Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-portfolio bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-portfolio mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{aboutData.name}</h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  {aboutData.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutData.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{aboutData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{aboutData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{aboutData.contact.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - KPIs */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {aboutData.kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all"
                >
                  <div className="text-4xl font-bold bg-gradient-portfolio bg-clip-text text-transparent mb-2">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {kpi.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
