"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, ShieldCheck, Settings, Activity, Lock, Globe } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Cryptographic Attribution",
            desc: "Assign immutable identities to every non-human actor. Our protocol ensures every API call, data access, and decision is signed and tied to a verified model version and human owner.",
            focus: "Identity & Ownership",
            visual: (
                <div className="bg-[#111] p-8 rounded-xl border border-white/10 w-full max-w-md mx-auto shadow-2xl">
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                <Activity className="text-blue-400" size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-lg">Agent_007</h4>
                                <span className="text-xs text-[#666] font-mono">DID: did:gov:892...x99</span>
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2">
                            <ShieldCheck size={12} className="text-blue-400" />
                            <span className="text-blue-400 text-xs font-medium tracking-wide">SIGNED</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[#666]">Model Checksum</span>
                            <span className="text-white font-mono text-xs">sha256:7f...a1</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[#666]">Authentication</span>
                            <span className="text-white flex items-center gap-2"><Lock size={12} className="text-[#888]" /> mTLS Certificate</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[#666]">Liability Owner</span>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-[#333]" />
                                <span className="text-white">Prod_Engineering</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "02",
            title: "Intent Observability",
            desc: "Capture the 'Why' behind the 'What.' We log the internal reasoning and chain-of-thought of your agents, turning black-box hallucinations into searchable, forensic data.",
            focus: "Traceability",
            visual: (
                <div className="bg-[#111] p-8 rounded-xl border border-white/10 w-full max-w-md mx-auto shadow-2xl space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Settings className="text-[#666]" size={18} />
                        <h4 className="text-[#888] font-mono text-xs uppercase tracking-widest">Forensic Trace Log</h4>
                    </div>

                    <div className="space-y-4 relative">
                        {/* Line connecting nodes */}
                        <div className="absolute left-2.5 top-2 bottom-4 w-0.5 bg-white/10" />

                        {/* Step 1 */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#333] border border-white/10 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <span className="text-xs text-[#666] font-mono mb-1 block">INPUT • 14:02:22</span>
                            <p className="text-white/90 text-sm">"Refund user_442 for order #991"</p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#333] border border-white/10 flex items-center justify-center">
                                <Activity size={10} className="text-blue-400" />
                            </div>
                            <span className="text-xs text-blue-400 font-mono mb-1 block">REASONING CHAIN</span>
                            <div className="p-3 bg-white/5 rounded border border-white/5 text-xs text-[#aaa] font-mono leading-relaxed">
                                &gt; Check policy: refund_cap<br />
                                &gt; Order amount: $450.00<br />
                                &gt; Cap: $500.00<br />
                                &gt; Decision: <span className="text-green-400">PROCEED</span>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                                <CheckCircle2 size={10} className="text-green-500" />
                            </div>
                            <span className="text-xs text-green-500 font-mono mb-1 block">ACTION EXECUTED</span>
                            <p className="text-white/90 text-sm">Stripe API: Refund Issued</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "03",
            title: "Automated Compliance",
            desc: "Turn your agent logs into an asset. Automatically generate audit-ready reports for SOC2, the EU AI Act, and internal legal reviews. Verify that your agents are following policy, even when you aren't watching.",
            focus: "Accountability",
            visual: (
                <div className="bg-[#111] rounded-xl border border-white/10 w-full max-w-md mx-auto shadow-2xl overflow-hidden">
                    <div className="bg-[#161616] px-6 py-4 border-b border-white/5 flex justify-between items-center">
                        <span className="text-[#666] text-xs font-mono uppercase tracking-widest">Compliance Monitor</span>
                        <div className="flex gap-1.5 items-center px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
                            <ShieldCheck size={10} className="text-green-500" />
                            <span className="text-green-500 text-[10px] font-bold">SOC2 READY</span>
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">Policy Check #881</div>
                                    <div className="text-[#666] text-xs mt-0.5">EU Identity Verified</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between group hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">Spending Audit</div>
                                    <div className="text-[#666] text-xs mt-0.5">Daily Limits Enforced</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded bg-white/10 text-white border border-white/20">
                                    <Globe size={16} />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">Export Compliance Report</div>
                                    <div className="text-[#666] text-xs mt-0.5">PDF • Generated 2m ago</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-white underline cursor-pointer">Download</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-blue-900/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[1000px] h-[500px] bg-purple-900/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-24">
                    <span className="text-xs font-mono text-[#666] tracking-[0.2em] uppercase block mb-4">
                        Process
                    </span>
                    <h2 className="text-5xl md:text-6xl font-sans font-light tracking-tight">
                        How It Works
                    </h2>
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 space-y-6"
                            >
                                <div className="text-[#333] font-mono text-6xl font-bold opacity-50">
                                    {step.id}
                                </div>
                                <h3 className="text-3xl font-medium">{step.title}</h3>
                                <p className="text-[#888] text-lg leading-relaxed max-w-md">
                                    {step.desc}
                                </p>
                                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#666]">
                                    {step.focus}
                                </div>
                            </motion.div>

                            {/* Visual Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex-1 w-full"
                            >
                                {step.visual}
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
