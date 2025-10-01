import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import awardsData from "@/data/awards.json";
import { Calendar, Building2 } from "lucide-react";

const typeColors = {
  award: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  certificate: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  training: "bg-green-500/10 text-green-500 border-green-500/20",
};

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & <span className="bg-gradient-portfolio bg-clip-text text-transparent">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-portfolio mx-auto rounded-full" />
          </div>

          {/* Awards Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <span
                        className={`inline-block px-2 py-1 rounded-md text-xs font-semibold uppercase border ${
                          typeColors[award.type as keyof typeof typeColors]
                        }`}
                      >
                        {award.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{award.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{award.institution}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
