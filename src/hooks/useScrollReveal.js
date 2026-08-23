"use client";

import { useEffect } from "react";

const MARGIN = 64; // px of headroom from the bottom edge before an element reveals
const POLL_MS = 400; // safety net: some mobile engines can delay/coalesce scroll & rAF events

function revealSteps(section) {
  section.querySelectorAll("[data-step]").forEach((el) => {
    if (el.getAttribute("data-visible") === "true") return;
    const delay = (parseInt(el.getAttribute("data-step"), 10) - 1) * 90;
    setTimeout(() => el.setAttribute("data-visible", "true"), delay);
  });
}

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only [data-reveal] sections are tracked independently. Any [data-step]
    // items inside one (the Trajetória timeline) cascade off their section's
    // own reveal instead of being tracked separately — one proven trigger
    // per section, not N+1 independent geometry checks that can each miss.
    let pending = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!pending.length) return;

    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > vh - MARGIN) return true;
        el.setAttribute("data-visible", "true");
        revealSteps(el);
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

    // Hard ceiling: whatever the cause, content must never stay invisible
    // forever. Anything still pending after a few seconds reveals as-is —
    // worse than a missed animation, better than vanished text.
    const forceTimeout = setTimeout(() => {
      pending.forEach((el) => {
        el.setAttribute("data-visible", "true");
        revealSteps(el);
      });
      pending = [];
      cleanup();
    }, 4000);

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(interval);
      clearTimeout(forceTimeout);
    }

    check(); // reveal anything already in view (e.g. a deep link to a section)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return cleanup;
  }, []);
}
