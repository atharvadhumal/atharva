import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSection } from "../context/ActiveSection";

export function useSectionInView(sectionName, margin = "-40% 0px -40% 0px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [isInView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
