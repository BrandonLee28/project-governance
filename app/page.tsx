"use client";

import { content } from "@/lib/data";
import GovernanceVis from "@/components/governance-vis";
import WaitlistForm from "@/components/waitlist-form";
import HowItWorks from "@/components/how-it-works";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Activity, Globe, ShieldCheck, Zap, Server, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollToWaitlist = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-white selection:text-black">
      {/* Navigation - Dark Theme for Hero */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
        <Link href="/" className="font-sans font-medium text-sm tracking-wide text-white flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          The Governance Protocol
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/whitepaper" className="text-xs font-medium uppercase tracking-widest text-[#888] hover:text-white transition-colors">
            Whitepaper
          </Link>
          <button onClick={scrollToWaitlist} className="px-5 py-2 border border-white/20 rounded-full text-[10px] font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section - Dark Theme */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-[#050505] text-white">
        {/* The Visualization Layer */}
        <div className="absolute inset-0 z-0">
          <GovernanceVis />
          {/* Spotlight Effect - Top Center */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.08] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

          {/* Ambient Blue/Purple glow matching the tech theme */}
          <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-blue-500/[0.1] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-purple-500/[0.1] rounded-full blur-[100px] pointer-events-none" />

          {/* Gradients to fade edges if needed, mostly transparent now */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-4xl text-center space-y-8 relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white"
          >
            The System of Record
            <span className="text-[#888] block mt-2">for the Agentic Enterprise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[#888] font-light"
          >
            AgentTrace provides the immutable "Black Box" for autonomous AI. <span className="text-white font-normal">Capture intent, verify identity, and automate the audit trail</span> for every non-human interaction in your stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-8 w-full flex flex-col items-center gap-6"
          >
            <WaitlistForm />

            <Link href="/whitepaper" className="text-xs text-white/70 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5">
              Read the Whitepaper
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-[10px] uppercase tracking-widest text-white/50 font-mono bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 inline-block"
          >
            Engineered at the intersection of AI Governance and Cryptography
          </motion.p>
        </motion.div>

        {/* Gradient Transition to Content - Darker Fade */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#0A0A0A] z-20 pointer-events-none" />
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-24 px-6 text-center text-[#EDEDED]">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-lg">
              G
            </div>
            <h2 className="font-sans text-xl font-light text-[#888]">{content.footer}</h2>
          </div>

          <div className="flex justify-center gap-8 text-xs text-[#666] font-mono uppercase tracking-widest">
            <Link href="/whitepaper" className="hover:text-white cursor-pointer transition-colors">
              Whitepaper
            </Link>
          </div>
          <p className="text-[#444] text-[10px] mt-12">
            &copy; 2026 Governance Protocol. All systems operational.
          </p>
        </div>
      </footer>
    </div>
  );
}
