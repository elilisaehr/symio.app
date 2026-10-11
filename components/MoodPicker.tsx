"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const MOODS = [
  { label: "Très mal", reply: "Noté. Les jours difficiles comptent aussi." },
  { label: "Mal", reply: "Noté. Repose-toi si tu peux." },
  { label: "Bof", reply: "Noté. Une journée moyenne, c’est aussi une info utile." },
  { label: "Bien", reply: "Noté. Profite de cette journée." },
  { label: "Très bien", reply: "Noté. Une bonne journée de plus dans ton historique." },
] as const;

// A real, working miniature of the app’s one-tap check-in.
export function MoodPicker() {
  const [picked, setPicked] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col items-center">
      <div role="radiogroup" aria-label="Comment tu te sens aujourd’hui ?" className="flex justify-center gap-1.5 sm:gap-5">
        {MOODS.map(({ label }, i) => {
          const active = picked === i;
          return (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setPicked(i)}
              className="group flex w-14 flex-col items-center gap-2.5 rounded-[var(--radius-card)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-20"
            >
              <motion.span
                animate={reduce ? undefined : { scale: active ? 1.12 : 1, y: active ? -6 : 0 }}
                whileHover={reduce ? undefined : { y: -4 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`block size-12 rounded-full sm:size-[72px] ${active ? "ring-4 ring-accent/40 ring-offset-4 ring-offset-surface" : ""}`}
              >
                <Image src={`/moods/${i + 1}.png`} alt="" width={144} height={144} className="size-full" />
              </motion.span>
              <span className={`whitespace-nowrap text-[13px] transition-colors sm:text-[15px] ${active ? "font-semibold text-ink" : "text-muted"}`}>{label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 min-h-14 text-center sm:min-h-7" aria-live="polite">
        <AnimatePresence mode="wait">
          {picked === null ? (
            <motion.p key="hint" initial={false} exit={{ opacity: 0 }} className="text-[17px] text-muted">
              Essaie : touche le visage qui te correspond.
            </motion.p>
          ) : (
            <motion.p
              key={picked}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17px] font-medium text-accent"
            >
              {MOODS[picked].reply}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
