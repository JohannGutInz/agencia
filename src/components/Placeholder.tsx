"use client";

import { ImageIcon } from "lucide-react";

type Ratio = "16/9" | "4/3" | "1/1";

interface PlaceholderProps {
  description: string;
  ratio?: Ratio;
  className?: string;
}

const paddingByRatio: Record<Ratio, string> = {
  "16/9": "pb-[56.25%]",
  "4/3":  "pb-[75%]",
  "1/1":  "pb-[100%]",
};

export default function Placeholder({
  description,
  ratio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border-2 border-dashed border-vino/20 bg-vino/5 ${paddingByRatio[ratio]} ${className}`}
      role="img"
      aria-label={description}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <ImageIcon
          className="text-vino/30"
          size={32}
          aria-hidden="true"
        />
        <span className="text-xs font-medium uppercase tracking-widest text-vino/40">
          FOTO AQUÍ
        </span>
        <span className="text-xs text-vino/30 leading-relaxed max-w-[180px]">
          {description}
        </span>
      </div>
    </div>
  );
}
