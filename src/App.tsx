import { useState, useEffect } from "react";
import { motion as motionScroll, useScroll, useSpring } from "motion/react";
import { motion } from "framer-motion";
import {
  Mic,
  Database,
  Lock,
  Brain,
  BarChart3,
  FileText,
  Cloud,
  Play,
  ChevronRight,
  ExternalLink,
  Sun,
  Moon,
  Bot,
  MessageSquare,
  Cpu,
  Search,
  LineChart,
  BookOpen,
} from "lucide-react";
import BookModal from "./modal/BookModal";
function App() {
  const [isDark, setIsDark] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleBookModalSubmit = (data: { name: string; email: string; company: string; message: string }) => {
    setIsBookModalOpen(false);
    // For now, just log the data. You can replace this with an API call or toast.
    alert(`Thank you, ${data.name}! We have received your enquiry.\nEmail: ${data.email}\nCompany: ${data.company}\nMessage: ${data.message}`);
    // console.log('Enquiry submitted:', data);
  };

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-b from-slate-950 to-slate-900 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-slate-900"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motionScroll.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1B6B] via-[#45CAFF] to-[#FF4B2B] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm z-50"
      >
        {isDark ? <Sun className="w-6 h-6 " /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF1B6B40] via-[#45CAFF40] to-[#FF4B2B40] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="mb-16">
            <img
              src={
                isDark
                  ? "/logos/omni-logo-dark.svg"
                  : "/logos/omni-logo_light.svg"
              }
              alt="Omnituple Logo"
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={false}
              animate={false}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF1B6B] via-[#45CAFF] to-[#FF4B2B] text-transparent bg-clip-text"
            >
              Ask Your Data Anything
              <br />
              Answers That Speak Volumes
            </motion.h1>
            <motion.p
              initial={false}
              animate={false}
              className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Forget complex dashboards and endless queries. Just ask in voice
              or chat and Omnituple instantly delivers actionable insights
              backed by deep, contextual research.
            </motion.p>
            <motion.div
              initial={false}
              animate={false}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 2, -2, 1, -1, 0],
                  transition: { duration: 0.4, type: "tween" },
                }}
                onClick={() => setIsBookModalOpen(true)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.4 }}
                className="group bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] px-8 py-4 rounded-full flex items-center gap-2 text-white shadow-xl shadow-[#ff1b6b50]/30"
              >
                <Mic className="w-5 h-5 animate-ping" />
                Book Your Live Voice Demo
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button
                className={`flex items-center gap-2 ${
                  isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                <Play className="w-5 h-5" />
                Watch How It Works
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Why Omnituple Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isDark ? "py-20 bg-slate-900/50" : "py-20 bg-white"}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-6"
          >
            Why Omnituple?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-center text-xl mb-16 max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Omnituple makes data analysis effortless and immediate. Speak
            naturally, ask questions directly, and receive instant insights. No
            technical expertise required.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            {[
              {
                icon: <Mic className="w-8 h-8 text-[#FF1B6B]" />,
                title: "Natural Conversations",
                description: "Use voice or chat to instantly query your data.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#45CAFF]" />,
                title: "Automatic Metrics",
                description:
                  "Omnituple intuitively understands and defines your business KPIs.",
              },
              {
                icon: <Brain className="w-8 h-8 text-[#FF4B2B]" />,
                title: "Immediate Insights",
                description:
                  "Answers include clear visuals and comprehensive, context-aware explanations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${
                  isDark
                    ? "bg-slate-800/50 hover:bg-slate-800"
                    : "bg-white hover:bg-gray-50"
                } p-8 rounded-2xl transition-colors shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Deep Research Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isDark ? "py-20" : "py-20 bg-gray-50"}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-6"
          >
            Deep Research Built In
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={`text-center text-xl mb-16 max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Insights That Go Beyond Your Data
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            {[
              {
                icon: (
                  <Search className="w-12 h-12 text-[#FF1B6B] mb-6 group-hover:scale-110 transition-transform" />
                ),
                title: "Pattern Recognition",
                description:
                  "Identifies patterns, correlations, and anomalies in your internal data and aligns them with external context.",
              },
              {
                icon: (
                  <BookOpen className="w-12 h-12 text-[#45CAFF] mb-6 group-hover:scale-110 transition-transform" />
                ),
                title: "Traceable Sources",
                description:
                  "References data sources clearly, offering fully traceable citations and narratives.",
              },
              {
                icon: (
                  <LineChart className="w-12 h-12 text-[#FF4B2B] mb-6 group-hover:scale-110 transition-transform" />
                ),
                title: "Actionable Insights",
                description:
                  "Provides clear, actionable recommendations based on a comprehensive understanding of your data landscape.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${
                  isDark
                    ? "bg-slate-800/50 hover:bg-slate-800"
                    : "bg-white hover:bg-gray-50"
                } p-8 rounded-2xl transition-colors shadow-lg group`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Data Sources Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isDark ? "py-20 bg-slate-900/50" : "py-20"}
        style={!isDark ? { backgroundColor: "#F0F6FF" } : {}}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-16"
          >
            Connect Your Data Effortlessly
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <motion.div
                className={`flex items-start gap-4 ${
                  isDark ? "bg-slate-800/50" : "bg-white"
                } p-6 rounded-xl shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                <Database className="w-6 h-6 text-[#45CAFF]" />
                <div>
                  <h3 className="font-bold mb-2">Databases</h3>
                  <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                    PostgreSQL, BigQuery, Snowflake, Redshift
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={`flex items-start gap-4 ${
                  isDark ? "bg-slate-800/50" : "bg-white"
                } p-6 rounded-xl shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                <FileText className="w-6 h-6 text-[#FF1B6B]" />
                <div>
                  <h3 className="font-bold mb-2">Files & Storage</h3>
                  <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                    CSV, Excel, cloud storage like AWS S3, Azure Blob, Google
                    Cloud Storage
                  </p>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className={`mt-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Just plug in your data once, and start asking questions right
                away. Omnituple handles schema recognition and metric definition
                automatically.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1B6B] via-[#45CAFF] to-[#FF4B2B] rounded-2xl opacity-20 blur-xl"></div>
              <div
                className={`relative ${
                  isDark
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/80 border-gray-200"
                } p-8 rounded-2xl border shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Deploy Securely in Your Cloud
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-[#45CAFF]" />
                    <span>Enterprise-grade security standards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-[#FF1B6B]" />
                    <span>Your data, your cloud. Completely secure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 text-[#FF4B2B]" />
                    <span>Customizable security & compliance</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Capabilities Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isDark ? "py-20 bg-slate-900/50" : "py-20"}
        style={!isDark ? { backgroundColor: "#FFF6F8" } : {}}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-16"
          >
            Intelligent, Versatile, Agentic
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            {[
              {
                icon: <Bot className="w-12 h-12 text-[#FF1B6B] mb-6" />,
                title: "Advanced LLM Support",
                description:
                  "Supports 40+ Large Language Models (LLMs) including GPT-4, LLaMA, Claude, and more.",
              },
              {
                icon: (
                  <MessageSquare className="w-12 h-12 text-[#45CAFF] mb-6" />
                ),
                title: "Voice Interaction",
                description:
                  "Integrated Speech-to-Text (STT) and Text-to-Speech (TTS) models ensure seamless voice-to-voice interactions.",
              },
              {
                icon: <Cpu className="w-12 h-12 text-[#FF4B2B] mb-6" />,
                title: "Dynamic Architecture",
                description:
                  "Dynamic agentic architecture understands context, explores deeper analysis, and proactively surfaces insights you didn't even know to ask for.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`${
                  isDark ? "bg-slate-800/50" : "bg-white"
                } p-8 rounded-2xl shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={isDark ? "py-20 bg-slate-900/50" : "py-20 bg-white"}
      >
        <div className="container mx-auto px-4 text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-bold mb-6"
          >
            Ready to make data analysis effortless?
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className=" group bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform mx-auto text-white"
            onClick={() => setIsBookModalOpen(true)}
          >
            <Mic className="w-5 h-5 animate-ping" />
            Book Your Voice Demo Now
            <ChevronRight className=" w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.section>
      <BookModal isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} onSubmit={handleBookModalSubmit} isDark={isDark} />
    </div>
  );
}

export default App;
