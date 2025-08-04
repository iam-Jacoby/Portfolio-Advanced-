// src/components/BubbleOverlay.jsx
import React, { useEffect, useRef } from "react";

const BubbleOverlay = () => {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      bubblesRef.current.forEach((el) => {
        if (!el) return;
        const bubbleRect = el.getBoundingClientRect();
        const bx = bubbleRect.left + bubbleRect.width / 2 - rect.left;
        const by = bubbleRect.top + bubbleRect.height / 2 - rect.top;
        const dx = bx - mouseX;
        const dy = by - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const threshold = 120; // radius for effect

        if (distance < threshold) {
          // scatter away: vector normalized then scaled
          const strength = (threshold - distance) / threshold; // 0..1
          const offsetX = (dx / distance) * strength * 30; // max 30px
          const offsetY = (dy / distance) * strength * 30;
          el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
          el.style.opacity = "0.35";
        } else {
          // reset (let animation handle vertical motion)
          el.style.transform = "";
          el.style.opacity = "";
        }
      });
    };

    const handleMouseLeave = () => {
      bubblesRef.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.style.opacity = "";
      });
    };

    const wrapped = (e) => {
      // throttle via requestAnimationFrame
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", wrapped);
    container?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container?.removeEventListener("mousemove", wrapped);
      container?.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          className={`bubble bubble-${i + 1}`}
        />
      ))}
    </div>
  );
};

export default BubbleOverlay;
