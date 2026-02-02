"use client";

import { content } from "@/lib/data";

import WaitlistForm from "@/components/waitlist-form";
import HowItWorks from "@/components/how-it-works";
import GovernanceVis from "@/components/governance-vis";
import { motion } from "framer-motion";
import { Lock, Activity, Globe, ShieldCheck, Zap, Server, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const scrollToWaitlist = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#FF7F50] selection:text-white">
      {/* Navigation - Always Visible */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" aria-label="iya Home" className="font-sans font-bold text-3xl tracking-tighter text-white flex items-center gap-2">
          iya
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/whitepaper" className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-[#FF7F50] transition-colors">
            Whitepaper
          </Link>
          <button
            onClick={scrollToWaitlist}
            className="px-5 py-2 border border-white/20 rounded-full text-[10px] font-medium uppercase tracking-widest text-white hover:bg-[#FF7F50] hover:border-[#FF7F50] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,127,80,0)_inset] hover:shadow-[0_0_20px_rgba(255,127,80,0.2)_inset]"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section - Simple & Centered */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">

        {/* Background Effects */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <GovernanceVis />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-5xl px-6 text-center space-y-8"
        >
          <h1 className="font-sans font-medium text-6xl md:text-8xl leading-[0.95] tracking-tight text-white">
            The System of Record
            <span className="text-neutral-400 block mt-2">for the Agentic Enterprise.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-neutral-300 font-light">
            We provide an immutable audit trail for autonomous AI agents, capturing intent and verifying identity.
          </p>

          <div className="pt-8 w-full flex flex-col items-center gap-6">
            <WaitlistForm />
          </div>
        </motion.div>

      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-24 px-6 text-center text-[#EDEDED]">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="flex flex-col items-center gap-4">
            <div className="font-sans font-bold text-3xl tracking-tighter text-white">
              iya
            </div>
            <h2 className="font-sans text-xl font-light text-neutral-400">{content.footer}</h2>
          </div>

          <div className="flex justify-center gap-8 text-xs text-neutral-500 font-mono uppercase tracking-widest">
            <Link href="/whitepaper" className="hover:text-white cursor-pointer transition-colors">
              Whitepaper
            </Link>
          </div>
          <p className="text-neutral-600 text-[10px] mt-12">
            &copy; 2026 iya.
          </p>
        </div>
      </footer>
    </div>
  );
}
