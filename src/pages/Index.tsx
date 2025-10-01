import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import AdminPanel from "@/components/AdminPanel";

export default function Index() {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 5) {
      setShowAdmin(true);
      setLogoClickCount(0);
    }

    // Reset count after 2 seconds of inactivity
    setTimeout(() => {
      setLogoClickCount(0);
    }, 2000);
  };

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-20 h-20 mx-auto bg-gradient-portfolio rounded-2xl"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lg font-semibold text-muted-foreground"
              >
                Loading Portfolio...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen bg-background">
        <Navigation onLogoClick={handleLogoClick} logoClickCount={logoClickCount} />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Awards />
          <Contact />
        </main>

        <BackToTop />
        <AdminPanel isOpen={showAdmin} onClose={() => setShowAdmin(false)} />

        {/* Footer */}
        <footer className="py-8 border-t border-border bg-section-bg">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="text-sm">
              © 2024 Your Name. Built with ❤️ using React & TypeScript
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
