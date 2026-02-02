"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }]);

            if (error) {
                console.error("Supabase error:", error);

                // Handle already exists error (code 23505) gracefully
                if (error.code === '23505') {
                    setStatus("success");
                    setEmail("");
                    return;
                }

                setStatus("error");
                return;
            }

            setStatus("success");
            setEmail("");
        } catch (err) {
            console.error("Form submission error:", err);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 rounded-full border border-green-500/20 text-green-400 backdrop-blur-md animate-in fade-in zoom-in duration-300 shadow-[0_0_20px_rgba(74,222,128,0.1)]">
                <Check className="w-5 h-5" />
                <span className="font-mono text-sm">You are on the list. Verification pending.</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative z-20">
            <div className="relative flex-grow">
                <input
                    type="email"
                    placeholder="enterprise@domain.com"
                    aria-label="Email address for waitlist"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 backdrop-blur-sm transition-all font-mono text-sm disabled:opacity-50 shadow-sm"
                />
            </div>
            <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-white text-black font-medium text-sm rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
                {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                    <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>
            {status === "error" && (
                <p className="absolute -bottom-6 left-5 text-red-500 text-[10px] font-mono animate-pulse">
                    Submission failed. Please try again.
                </p>
            )}
        </form>
    );
}
