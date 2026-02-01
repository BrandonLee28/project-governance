"use client";

import { useState } from "react";
import { CreditCard, ShieldCheck, Activity, Lock, AlertCircle, CheckCircle2, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "WALLETS" | "PASSPORT" | "DASHBOARD";

export default function InteractiveDemo() {
    const [activeTab, setActiveTab] = useState<Tab>("WALLETS");
    // Visualization State: "IDLE" | "SCANNING" | "RESULT"
    const [state, setState] = useState<"IDLE" | "SCANNING" | "RESULT">("IDLE");
    const [result, setResult] = useState<{ status: "APPROVED" | "BLOCKED"; title: string; desc: string }>({
        status: "APPROVED", title: "", desc: ""
    });

    const runSimulation = (tab: Tab) => {
        if (state === "SCANNING") return;
        setState("SCANNING");

        // Quick scan animation then result
        setTimeout(() => {
            setState("RESULT");
            if (tab === "WALLETS") {
                setResult({
                    status: "BLOCKED",
                    title: "Limit Exceeded",
                    desc: "$1,200 > $500 Daily Limit"
                });
            } else if (tab === "PASSPORT") {
                setResult({
                    status: "APPROVED",
                    title: "Identity Verified",
                    desc: "Signed by Treasury.gov"
                });
            } else if (tab === "DASHBOARD") {
                setResult({
                    status: "BLOCKED",
                    title: "Anomalous Burn",
                    desc: "+400% Spend Rate Detected"
                });
            }

            // Reset after a few seconds
            setTimeout(() => setState("IDLE"), 4000);
        }, 1500);
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12 bg-[#0A0A0A]">
            <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl md:text-5xl font-light text-white">One Protocol. Total Control.</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Big Buttons */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <TabButton
                        isActive={activeTab === "WALLETS"}
                        onClick={() => { setActiveTab("WALLETS"); setState("IDLE"); }}
                        icon={<CreditCard />}
                        title="Smart Wallets"
                        subtitle="Enforce spend limits"
                    />
                    <TabButton
                        isActive={activeTab === "PASSPORT"}
                        onClick={() => { setActiveTab("PASSPORT"); setState("IDLE"); }}
                        icon={<ShieldCheck />}
                        title="KYA Identity"
                        subtitle="Verify agent origins"
                    />
                    <TabButton
                        isActive={activeTab === "DASHBOARD"}
                        onClick={() => { setActiveTab("DASHBOARD"); setState("IDLE"); }}
                        icon={<Activity />}
                        title="Kill Switch"
                        subtitle="Halt rogue fleets"
                    />
                </div>

                {/* Right: The Visualizer */}
                <div className="lg:col-span-8">
                    <div className="relative rounded-3xl border border-white/10 bg-[#111] h-[400px] flex flex-col items-center justify-center overflow-hidden shadow-2xl">

                        <AnimatePresence mode="wait">
                            {state === "IDLE" && (
                                <motion.button
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => runSimulation(activeTab)}
                                    className="group relative flex flex-col items-center gap-4"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow">
                                        <Play size={32} fill="currentColor" />
                                    </div>
                                    <span className="text-white font-mono text-sm tracking-widest uppercase">Test Controls</span>
                                </motion.button>
                            )}

                            {state === "SCANNING" && (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center gap-6"
                                >
                                    <div className="relative w-24 h-24">
                                        <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                                        <div className="absolute inset-0 border-t-4 border-white rounded-full animate-spin" />
                                    </div>
                                    <span className="text-white/60 font-mono text-xs animate-pulse">ANALYZING SIGNATURE...</span>
                                </motion.div>
                            )}

                            {state === "RESULT" && (
                                <motion.div
                                    key="result"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 1.1, opacity: 0 }}
                                    className={`flex flex-col items-center text-center p-8 rounded-2xl border ${result.status === "APPROVED" ? "border-green-500/30 bg-green-500/10" : "border-red-500/30 bg-red-500/10"}`}
                                >
                                    {result.status === "APPROVED" ? (
                                        <CheckCircle2 size={64} className="text-green-500 mb-4" />
                                    ) : (
                                        <AlertCircle size={64} className="text-red-500 mb-4" />
                                    )}

                                    <h3 className={`text-4xl font-medium mb-2 ${result.status === "APPROVED" ? "text-green-400" : "text-red-400"}`}>
                                        {result.title}
                                    </h3>
                                    <p className="text-white/60 font-mono uppercase tracking-wide">
                                        {result.desc}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    );
}

function TabButton({ isActive, onClick, icon, title, subtitle }: { isActive: boolean; onClick: () => void; icon: React.ReactNode; title: string; subtitle: string }) {
    return (
        <button
            onClick={onClick}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 ${isActive ? "bg-white text-black border-white" : "bg-white/5 text-white/40 border-transparent hover:bg-white/10"}`}
        >
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isActive ? "bg-black text-white" : "bg-white/10"}`}>
                    {icon}
                </div>
                <div>
                    <h3 className={`font-medium text-lg ${isActive ? "text-black" : "text-white"}`}>{title}</h3>
                    <p className={`text-xs ${isActive ? "text-black/60" : "text-white/30"}`}>{subtitle}</p>
                </div>
            </div>
        </button>
    );
}
