"use client";

import React from "react";
import Link from "next/link";
import { Terminal, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/90 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
              <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-white">
                yasith<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                Software Engineering & Full Stack Development
              </span>
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-zinc-400">
              <a
                href="https://github.com/zour-yu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/yasith2003"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Back to top smooth anchor link */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Minimalist Copyright & Build Metadata */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <p>© 2026 Yasith Rathnayaka. All rights reserved.</p>
          <p className="font-mono text-[11px] text-zinc-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
