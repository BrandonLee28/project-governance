"use client";

import { useEffect, useRef } from "react";

export default function GovernanceVis() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // ASCII Config - Larger font for bigger "pixels"
    const fontSize = 20;
    const cols = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize);

    // Charset
    // Using a simpler set for cleaner "blocks"
    const chars = "  ...:::;;;//XXX%%%###@@@";

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for interaction
    // Mouse tracking for interaction
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    function animate() {
      if (!ctx) return;

      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Clear
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "top";

      // If reduced motion is preferred, draw once and don't loop
      if (prefersReducedMotion) {
        // Draw a static version of the grid
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const realX = x * fontSize;
            const realY = y * fontSize;
            const dx = Math.abs(realX - width / 2);
            const dy = Math.abs(realY - height / 2);
            const dist = Math.sqrt((dx / 2) * (dx / 2) + dy * dy);
            if (dist < 250) continue;

            ctx.fillStyle = `rgba(210, 240, 255, 0.05)`;
            ctx.fillText(".", realX, realY);
          }
        }
        return;
      }

      // Faster animation speed
      time += 0.005;

      // Smooth interaction (Lerp)
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const realX = x * fontSize;
          const realY = y * fontSize;

          // Texture Frequency + Mouse Parallax
          // "Sway" the noise map smoothly based on interpolated mouse position
          const parallaxX = (currentMouseX - width / 2) * 0.0005;
          const parallaxY = (currentMouseY - height / 2) * 0.0005;

          const nx = x * 0.045 + parallaxX;
          const ny = y * 0.045 + parallaxY;

          // Complex noise layering
          const n1 = Math.sin(nx * 1.0 + time + Math.cos(ny * 0.5));
          const n2 = Math.cos(ny * 1.5 - time * 0.4);
          const n3 = Math.sin(nx * 3.0 + ny * 3.0 + time * 0.3); // Finer detail

          const noise = (n1 + n2 + n3 * 0.4) / 2.4;
          const val = (noise + 1) / 2; // 0 to 1

          // Mask Center - REMOVED
          // We want the pattern to go behind everything now
          const mask = 1;

          // if (mask <= 0.01) continue; // Removed optimization as mask is 1

          const charIndex = Math.floor(val * chars.length);
          const char = chars[Math.max(0, Math.min(chars.length - 1, charIndex))];

          // Uniform Brightness (No Flashlight)
          const opacity = val * mask * 0.8; // Increased from 0.3 for better visibility

          // Brand Orange Color (Rose Orange)
          // rgba(255, 127, 80, opacity)
          ctx.fillStyle = `rgba(255, 127, 80, ${opacity})`;
          ctx.fillText(char, realX, realY);
        }
      }

      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full mix-blend-screen" />;
}
