import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Full Background Video */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/background-video.mp4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6) contrast(1.2)',
          transform: 'scale(1.1)'
        }}
      >
        <video
          id="background-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            filter: 'brightness(0.6) contrast(1.2)',
            transform: 'scale(1.1)'
          }}
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <source src="./background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-20" />
ㄴㅇㄹㄴㅇㄹㄴㅇㄹ
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center space-y-16"
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="space-y-8"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-thin text-white leading-none tracking-tight">
              Hello, I'm{" "}
              <span className="block font-extralight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                insun kimV
              </span>
            </h1>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto" />
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 max-w-4xl mx-auto font-light leading-relaxed">
              A passionate developer crafting exceptional digital experiences
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-16"
          >
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-6 px-16 py-8 bg-white/10 backdrop-blur-md border border-white/30 rounded-none text-white hover:bg-white/20 transition-all duration-700 hover:scale-110 hover:border-white/50"
            >
              <span className="text-xl font-light tracking-widest">EXPLORE MY WORK</span>
              <motion.div
                className="w-8 h-8 border-l-2 border-b-2 border-white/70 transform -rotate-45"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-24"
          >
            <motion.button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center gap-6 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-sm font-light tracking-widest uppercase">Scroll to explore</span>
              <motion.div
                className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-4 bg-white/70 rounded-full mt-3"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}