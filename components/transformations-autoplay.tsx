"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type TransformationItem = {
  src: string;
  alt: string;
  label?: string;
};

type Props = {
  items: readonly TransformationItem[];
  intervalMs?: number;
};

export function TransformationsAutoplay({ items, intervalMs = 4000 }: Props) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(scroller);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, inView, intervalMs, items.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const target = scroller.children[index] as HTMLElement | undefined;
    if (!target) return;

    const targetCenter = target.offsetLeft + target.clientWidth / 2;
    const newScrollLeft = targetCenter - scroller.clientWidth / 2;
    scroller.scrollTo({ left: Math.max(0, newScrollLeft), behavior: "smooth" });
  }, [index]);

  const handleUserPause = () => setPaused(true);

  return (
    <ul
      ref={scrollerRef}
      className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:px-8"
      role="region"
      aria-label="Antes e depois — transformações realizadas pela Dra. Juliane Florentino"
      tabIndex={0}
      onTouchStart={handleUserPause}
      onPointerDown={handleUserPause}
    >
      {items.map((item) => (
        <li key={item.src} className="snap-center shrink-0 basis-[78%]">
          <div className="border-border bg-muted relative aspect-[4/5] w-full overflow-hidden rounded-2xl border shadow-sm">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="78vw"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
