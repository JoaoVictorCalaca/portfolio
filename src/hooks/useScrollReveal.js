"use client";

import { useEffect } from "react";

const MARGIN = 64; // px of headroom from the bottom edge before an element reveals
const POLL_MS = 400; // safety net: some mobile engines can delay/coalesce scroll & rAF events

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pending = Array.from(document.querySelectorAll("[data-reveal], [data-step]"));
    if (!pending.length) return;

    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > vh - MARGIN) return true;
        const step = el.hasAttribute("data-step")
          ? (parseInt(el.getAttribute("data-step"), 10) - 1) * 90
          : 0;
        setTimeout(() => el.setAttribute("data-visible", "true"), step);
        return false;
      });
      if (!pending.length) cleanup();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    // Scroll/resize + rAF is the primary, cheap path. A slow poll rides
    // alongside as a safety net: some mobile browser engines can delay or
    // coalesce scroll/rAF delivery, and content should never get stuck
    // permanently invisible because of that.
    const interval = setInterval(check, POLL_MS);

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(interval);
    }

    check(); // reveal anything already in view (e.g. a deep link to a section)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return cleanup;
  }, []);
}
