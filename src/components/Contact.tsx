import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutData from "@/data/about.json";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Copy, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(aboutData.contact.email);
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  const sendEmail = () => {
    window.location.href = `mailto:${aboutData.contact.email}`;
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/yourusername" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { icon: Globe, label: "Website", url: "https://yourwebsite.com" },
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg-alt">
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
              Get In <span className="bg-gradient-portfolio bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-portfolio mx-auto rounded-full" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                className="space-y-6"
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <a
                          href={`mailto:${aboutData.contact.email}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {aboutData.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <p className="font-medium">{aboutData.contact.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <p className="font-medium">{aboutData.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                className="space-y-6"
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>

                  <div className="space-y-4">
                    <Button
                      onClick={sendEmail}
                      className="w-full bg-gradient-portfolio hover:opacity-90"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>

                    <Button
                      onClick={copyEmail}
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Copy className="w-5 h-5 mr-2" />
                      Copy Email
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <a href="http://qr.kakao.com/talk" target="_blank" rel="noopener noreferrer">
                        💬 KakaoTalk
                      </a>
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
