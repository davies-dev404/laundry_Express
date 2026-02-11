import React from "react";
import { Sparkles } from "lucide-react";

export function Logo({ className = "", iconClassName = "", textClassName = "" }) {
  return (
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      <div className={`w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary/20 ${iconClassName}`}>
        <Sparkles className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-serif font-bold text-slate-900 ${textClassName}`}>
          Express<span className="text-primary">Laundry</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
          Nairobi
        </span>
      </div>
    </div>
  );
}
