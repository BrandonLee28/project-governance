"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Whitepaper() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-white selection:text-black text-[#EDEDED]">
            {/* Navigation */}
            <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
                <Link href="/" className="font-sans font-medium text-sm tracking-wide text-white flex items-center gap-2 group">
                    <ArrowLeft className="w-4 h-4 text-[#888] group-hover:text-white transition-colors" />
                    <span className="text-[#888] group-hover:text-white transition-colors">Back to Home</span>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="font-medium text-sm tracking-wide text-white">The Governance Protocol</span>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-xs text-[#666] uppercase tracking-widest mb-4 block">Technical White Paper &bull; v1.0 &bull; January 2026</span>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">AgentTrace: The Immutable "Black Box" Protocol for Autonomous AI Governance</h1>

                    <div className="prose prose-invert prose-lg max-w-none text-[#AAAAAA]">
                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">1. Executive Abstract</h2>
                        <p>
                            The rapid proliferation of agentic AI systems—autonomous software capable of executing multi-step workflows without human intervention—has outpaced existing observability and compliance infrastructure. Traditional logging paradigms, designed for deterministic software, fail to capture the <strong>probabilistic intent</strong> and <strong>non-deterministic reasoning</strong> of LLM-based agents.
                        </p>
                        <p className="mt-4">
                            This gap creates significant liability under emerging frameworks like the <strong>EU AI Act (Article 12)</strong> and updated <strong>SOC2</strong> controls, which demand "automatic recording of events" and complete traceability for high-risk AI systems.
                        </p>
                        <p className="mt-4">
                            <strong>AgentTrace</strong> introduces a lightweight, sidecar-based protocol that provides a cryptographic Chain of Custody for every agent action. By hashing the agent's internal "Chain of Thought" and signing every API output with a verified Identity Key, AgentTrace creates an immutable, forensic audit trail. This enables enterprises to deploy autonomous agents with the same rigorous governance standards applied to human employees.
                        </p>

                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">2. The Accountability Gap</h2>
                        <p>
                            In current enterprise stacks, AI agents often share generic API keys and operate as "black boxes." When an agent makes a catastrophic error—such as hallucinating a refund policy or deleting critical data—engineering teams face a "forensic dead end."
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888]">
                            <li><strong>Mutable Logs:</strong> Standard JSON text logs can be altered or deleted.</li>
                            <li><strong>Identity Spoofing:</strong> Multiple agent instances often share a single service account, making individual attribution impossible.</li>
                            <li><strong>Missing Intent:</strong> Logs capture <em>what</em> happened (the API call), but rarely <em>why</em> (the prompt, context, and reasoning trace).</li>
                        </ul>
                        <p className="mt-4">
                            Without a standardized "Flight Recorder" for these autonomous decisions, enterprises cannot prove compliance or defend against liability claims.
                        </p>

                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">3. Protocol Specification</h2>
                        <p>
                            AgentTrace functions as a middleware "Sidecar" that sits between your agent runner and the external world. It enforces a strict cryptographic lifecycle for every interaction:
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-4">3.1 Identity Attribution (DID)</h3>
                        <p>
                            Upon instantiation, every agent is assigned a specialized Decentralized Identifier (DID) and a transient public/private key pair. This key pair is tied to the specific model version (e.g., `gpt-4-0613`) and the human liability owner.
                        </p>
                        <p className="mt-4 font-mono text-sm bg-white/5 p-4 rounded-lg border border-white/10">
                            Agent_ID = SHA256(Model_Hash + Config_Hash + Owner_ID)
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-4">3.2 Reasoning Hashes</h3>
                        <p>
                            Before an agent executes an external tool call, AgentTrace captures the internal "Chain of Thought" (the reasoning trace). This textual reasoning is hashed and timestamped.
                        </p>
                        <p className="mt-4">
                            Crucially, <strong>we do not store the raw data by default.</strong> The protocol stores the <em>hash</em> of the reasoning on our immutable ledger. The raw text remains in your private storage (S3/Blob). In the event of an audit, you can prove the integrity of your logs by regenerating the hash and matching it against the AgentTrace ledger.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-8 mb-4">3.3 Cryptographic Signing</h3>
                        <p>
                            Every outgoing request (HTTP/RPC) is wrapped in a signed envelope. The signature asserts:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888]">
                            <li><strong>Author:</strong> The verified Agent_ID.</li>
                            <li><strong>Context:</strong> The hash of the prompt/reasoning that led to this action.</li>
                            <li><strong>Integrity:</strong> That the payload has not been tampered with in transit.</li>
                        </ul>

                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">4. Regulatory Alignment & Compliance</h2>
                        <p>
                            The AgentTrace protocol is engineered to satisfy the rigorous requirements of modern AI legislation:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-[#888]">
                            <li><strong>EU AI Act (Article 12):</strong> Mandates "automatic recording of events" to ensure traceability of functioning. AgentTrace's immutable ledger satisfies this by design.</li>
                            <li><strong>SOC2 (CC Security):</strong> Provides the "Non-Repudiation" controls required for high-security environments. An action signed by an agent cannot later be denied.</li>
                            <li><strong>ISO 42001 (AI Management):</strong> Supports the requirement for "transparency and explainability" by cryptographically linking actions to their reasoning source.</li>
                        </ul>

                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">5. Minimalist Integration Strategy</h2>
                        <p>
                            We reject the "Platform" approach. AgentTrace is not a hosting provider. We are an infrastructure layer.
                        </p>
                        <p className="mt-4">
                            Our SDK (Python/Node/Go) integrates as a lightweight wrapper around your existing LLM calls (OpenAI, LangChain, etc.).
                        </p>
                        <p className="mt-4">
                            <strong>Privacy-First Architecture:</strong>
                            Because we rely on hashing and local signing, sensitive PII/PHI never needs to leave your VPC. The AgentTrace cloud receives only metadata and cryptographic proofs, ensuring you remain compliant with GDPR and HIPAA data residency requirements.
                        </p>

                        <h2 className="text-2xl font-medium text-white mt-12 mb-6">6. Future Outlook</h2>
                        <p>
                            As the ecosystem matures, AgentTrace is committed to supporting open standards. We are actively integrating with the <strong>Model Context Protocol (MCP)</strong> to standardize how agents discover and authenticate with resources.
                        </p>
                        <p className="mt-4">
                            We envision a future where "Agentic Identity" is as ubiquitous as SSL certificates—a fundamental requirement for any non-human actor to participate in the digital economy.
                        </p>

                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <span className="text-[#666] font-mono text-sm">© 2026 AgentTrace Protocol</span>
                            <Link href="/" className="text-white text-sm font-bold uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                                Start Integration
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
