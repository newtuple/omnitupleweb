import React, { useState, useEffect } from 'react';
import { Mic, Database, Lock, Brain, BarChart3, FileText, Cloud, Play, ChevronRight, ExternalLink, Sun, Moon, Bot, MessageSquare, Cpu, Search, LineChart, BookOpen } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900 text-white' : 'bg-gradient-to-b from-gray-50 to-white text-slate-900'}`}>
      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm z-50"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF1B6B40] via-[#45CAFF40] to-[#FF4B2B40] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="mb-16">
            <img 
              src={isDark ? '/logos/logo-dark.png' : '/logos/logo-light.png'}
              alt="Omnituple Logo" 
              className="h-16 md:h-20 w-auto mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF1B6B] via-[#45CAFF] to-[#FF4B2B] text-transparent bg-clip-text">
            Ask Your Data Anything
            <br />
            Answers That Speak Volumes
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Forget complex dashboards and endless queries. Just ask in voice or chat and Omnituple instantly delivers actionable insights backed by deep, contextual research.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform text-white">
              <Mic className="w-5 h-5 animate-pulse" />
              Book Your Live Voice Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`flex items-center gap-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Play className="w-5 h-5" />
              Watch How It Works
            </button>
          </div>
        </div>
      </header>

      {/* Why Omnituple Section */}
      <section className={isDark ? 'py-20 bg-slate-900/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Omnituple?</h2>
          <p className={`text-center text-xl mb-16 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Omnituple makes data analysis effortless and immediate. Speak naturally, ask questions directly, and receive instant insights. No technical expertise required.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8 text-[#FF1B6B]" />,
                title: "Natural Conversations",
                description: "Use voice or chat to instantly query your data."
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#45CAFF]" />,
                title: "Automatic Metrics",
                description: "Omnituple intuitively understands and defines your business KPIs."
              },
              {
                icon: <Brain className="w-8 h-8 text-[#FF4B2B]" />,
                title: "Immediate Insights",
                description: "Answers include clear visuals and comprehensive, context-aware explanations."
              }
            ].map((feature, index) => (
              <div key={index} className={`${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-gray-50'} p-8 rounded-2xl transition-colors shadow-lg`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Research Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Deep Research Built In</h2>
          <p className={`text-center text-xl mb-16 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Insights That Go Beyond Your Data
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-gray-50'} p-8 rounded-2xl transition-colors shadow-lg group`}>
              <Search className="w-12 h-12 text-[#FF1B6B] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Pattern Recognition</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Identifies patterns, correlations, and anomalies in your internal data and aligns them with external context.
              </p>
            </div>
            <div className={`${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-gray-50'} p-8 rounded-2xl transition-colors shadow-lg group`}>
              <BookOpen className="w-12 h-12 text-[#45CAFF] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Traceable Sources</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                References data sources clearly, offering fully traceable citations and narratives.
              </p>
            </div>
            <div className={`${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-white hover:bg-gray-50'} p-8 rounded-2xl transition-colors shadow-lg group`}>
              <LineChart className="w-12 h-12 text-[#FF4B2B] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Actionable Insights</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Provides clear, actionable recommendations based on a comprehensive understanding of your data landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className={isDark ? 'py-20 bg-slate-900/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Connect Your Data Effortlessly</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`flex items-start gap-4 ${isDark ? 'bg-slate-800/50' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <Database className="w-6 h-6 text-[#45CAFF]" />
                <div>
                  <h3 className="font-bold mb-2">Databases</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>PostgreSQL, BigQuery, Snowflake, Redshift</p>
                </div>
              </div>
              <div className={`flex items-start gap-4 ${isDark ? 'bg-slate-800/50' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                <FileText className="w-6 h-6 text-[#FF1B6B]" />
                <div>
                  <h3 className="font-bold mb-2">Files & Storage</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>CSV, Excel, cloud storage like AWS S3, Azure Blob, Google Cloud Storage</p>
                </div>
              </div>
              <p className={`mt-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Just plug in your data once, and start asking questions right away. Omnituple handles schema recognition and metric definition automatically.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1B6B] via-[#45CAFF] to-[#FF4B2B] rounded-2xl opacity-20 blur-xl"></div>
              <div className={`relative ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-gray-200'} p-8 rounded-2xl border shadow-lg`}>
                <h3 className="text-2xl font-bold mb-4">Deploy Securely in Your Cloud</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className={isDark ? 'py-20 bg-slate-900/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Intelligent, Versatile, Agentic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${isDark ? 'bg-slate-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
              <Bot className="w-12 h-12 text-[#FF1B6B] mb-6" />
              <h3 className="text-xl font-bold mb-4">Advanced LLM Support</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Supports 40+ Large Language Models (LLMs) including GPT-4, LLaMA, Claude, and more.
              </p>
            </div>
            <div className={`${isDark ? 'bg-slate-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
              <MessageSquare className="w-12 h-12 text-[#45CAFF] mb-6" />
              <h3 className="text-xl font-bold mb-4">Voice Interaction</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Integrated Speech-to-Text (STT) and Text-to-Speech (TTS) models ensure seamless voice-to-voice interactions.
              </p>
            </div>
            <div className={`${isDark ? 'bg-slate-800/50' : 'bg-white'} p-8 rounded-2xl shadow-lg`}>
              <Cpu className="w-12 h-12 text-[#FF4B2B] mb-6" />
              <h3 className="text-xl font-bold mb-4">Dynamic Architecture</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Dynamic agentic architecture understands context, explores deeper analysis, and proactively surfaces insights you didn't even know to ask for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={isDark ? 'py-20 bg-slate-900/50' : 'py-20 bg-gray-50'}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to make data analysis effortless?</h2>
          <button className="group bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform mx-auto text-white">
            <Mic className="w-5 h-5 animate-pulse" />
            Book Your Voice Demo Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;