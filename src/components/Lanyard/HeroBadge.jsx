import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lanyard from "./Lanyard";
import { createCardTextures } from "./cardTextures";

export default function HeroBadge({ className }) {
  const [textures, setTextures] = useState(null);
  const [touched, setTouched] = useState(false);
  const [coarse] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches,
  );

  useEffect(() => {
    let active = true;
    createCardTextures().then((t) => {
      if (active) setTextures(t);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!textures) return null;

  return (
    <div className={`relative ${className}`} onPointerDown={() => setTouched(true)}>
      <Lanyard
        className="h-full w-full"
        position={[0, -0.3, 11]}
        frontImage={textures.front}
        backImage={textures.back}
        lanyardImage={textures.strap}
      />
      <AnimatePresence>
        {!touched && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mono pointer-events-none absolute inset-x-0 bottom-3 text-center text-[10px] tracking-[0.2em] text-dim uppercase sm:bottom-6 sm:text-[11px]"
          >
            {coarse ? "← swipe the card →" : "drag the card"}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
