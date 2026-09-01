"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-custom-light py-8 border-t border-custom-blue/50 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-medium text-custom-blue">
          © {new Date().getFullYear()} Ferry Ferdiansyah. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-custom-navy uppercase tracking-widest bg-custom-blue/10 px-3 py-1 rounded-full border border-custom-blue/30">
            Available for work
          </span>
        </div>
      </div>
    </footer>
  );
}