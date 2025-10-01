import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import experienceData from "@/data/experience.json";
import { Briefcase, Calendar } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 bg-section-bg-alt">
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
              Work <span className="bg-gradient-portfolio bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-portfolio mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-portfolio transform md:-translate-x-1/2" />

              {/* Timeline items */}
              <div className="space-y-12">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 ring-4 ring-background" />

                    {/* Content card */}
                    <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <motion.div
                        onHoverStart={() => setExpandedId(exp.id)}
                        onHoverEnd={() => setExpandedId(null)}
                        className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all cursor-pointer"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <Briefcase className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                            <p className="text-primary font-semibold mb-2">{exp.company}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={
                            expandedId === exp.id
                              ? { height: "auto", opacity: 1 }
                              : { height: 0, opacity: 0 }
                          }
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border pt-4 mt-4">
                            <h4 className="text-sm font-semibold mb-3 text-primary">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">▸</span>
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        {expandedId !== exp.id && (
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            Hover to see achievements
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
