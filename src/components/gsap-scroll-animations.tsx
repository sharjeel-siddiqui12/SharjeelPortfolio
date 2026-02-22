"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── helpers ────────────────────────────────────────────────────────────────
function makeOrb(
  color: string,
  size: string,
  pos: { top?: string; bottom?: string; left?: string; right?: string },
  blur = "40px"
): HTMLDivElement {
  const el = document.createElement("div");
  el.style.cssText = `
    position: absolute;
    border-radius: 50%;
    width: ${size}; height: ${size};
    ${pos.top != null ? `top: ${pos.top};` : ""}
    ${pos.bottom != null ? `bottom: ${pos.bottom};` : ""}
    ${pos.left != null ? `left: ${pos.left};` : ""}
    ${pos.right != null ? `right: ${pos.right};` : ""}
    background: radial-gradient(circle, ${color}, transparent 70%);
    filter: blur(${blur});
    pointer-events: none;
    will-change: transform;
  `;
  return el;
}

function makeContainer(): HTMLDivElement {
  const el = document.createElement("div");
  el.className = "gsap-parallax-layer";
  el.setAttribute("aria-hidden", "true");
  el.style.cssText =
    "position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;";
  return el;
}

export function GSAPScrollAnimations() {
  /**
   * Track every element injected into the DOM so we can surgically remove
   * them on unmount — gsap.context().revert() only reverts tweens, not DOM.
   */
  const injectedEls = useRef<HTMLElement[]>([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // ════════════════════════════════════════════════════════════════
        //  A. MULTI-LAYER DEPTH PARALLAX ORBS — injected into each section
        // ════════════════════════════════════════════════════════════════
        const sectionDefs: { id: string; colors: [string, string, string] }[] =
          [
            { id: "#about",        colors: ["rgba(59,130,246,0.13)", "rgba(139,92,246,0.10)", "rgba(6,182,212,0.08)"] },
            { id: "#skills",       colors: ["rgba(6,182,212,0.13)",  "rgba(59,130,246,0.10)", "rgba(99,102,241,0.08)"] },
            { id: "#experience",   colors: ["rgba(139,92,246,0.13)", "rgba(6,182,212,0.10)",  "rgba(59,130,246,0.08)"] },
            { id: "#projects",     colors: ["rgba(59,130,246,0.13)", "rgba(168,85,247,0.10)", "rgba(6,182,212,0.08)"] },
            { id: "#services",     colors: ["rgba(6,182,212,0.13)",  "rgba(99,102,241,0.10)", "rgba(139,92,246,0.08)"] },
            { id: "#certificates", colors: ["rgba(139,92,246,0.13)", "rgba(59,130,246,0.10)", "rgba(6,182,212,0.08)"] },
            { id: "#contact",      colors: ["rgba(59,130,246,0.13)", "rgba(6,182,212,0.10)",  "rgba(139,92,246,0.08)"] },
          ];

        sectionDefs.forEach(({ id, colors }) => {
          const section = document.querySelector<HTMLElement>(id);
          if (!section) return;
          if (getComputedStyle(section).position === "static") section.style.position = "relative";

          const container = makeContainer();
          const orbDeep    = makeOrb(colors[0], "520px", { top: "-80px",  left: "-80px"  }, "50px");
          const orbMid     = makeOrb(colors[1], "360px", { top: "30%",    right: "-60px" }, "38px");
          const orbShallow = makeOrb(colors[2], "220px", { bottom: "40px",left: "38%"   }, "28px");
          container.appendChild(orbDeep);
          container.appendChild(orbMid);
          container.appendChild(orbShallow);
          section.insertBefore(container, section.firstChild);
          injectedEls.current.push(container);

          gsap.to(orbDeep,    { y: -140,              ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 3.5 } });
          gsap.to(orbMid,     { y: -220, x: 40,       ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.2 } });
          gsap.to(orbShallow, { y: -90,  x: -25,      ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.5 } });
        });

        // ════════════════════════════════════════════════════════════════
        //  B. HORIZONTAL SCROLL-SCRUBBED MARQUEE TEXT STRIPS
        // ════════════════════════════════════════════════════════════════
        const marqueeConfigs = [
          { id: "#skills",   text: "REACT • NEXT.JS • NODE.JS • TYPESCRIPT • MONGODB • EXPRESS", dir: -1, top: true  },
          { id: "#projects", text: "FULLSTACK • MERN • REST API • DEPLOY • OPTIMIZE • SCALE",    dir:  1, top: false },
          { id: "#services", text: "DESIGN • DEVELOP • TEST • LAUNCH • MAINTAIN • GROWTH",       dir: -1, top: true  },
        ];

        marqueeConfigs.forEach(({ id, text, dir, top }) => {
          const section = document.querySelector<HTMLElement>(id);
          if (!section) return;

          const wrapper = document.createElement("div");
          wrapper.setAttribute("aria-hidden", "true");
          wrapper.style.cssText = `
            position: absolute;
            ${top ? "top: 12px" : "bottom: 12px"};
            left: 0; right: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
            opacity: 0.045;
          `;
          const strip = document.createElement("div");
          strip.style.cssText = `
            white-space: nowrap;
            font-size: 6rem;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            line-height: 1;
            display: inline-block;
            color: currentColor;
            will-change: transform;
          `;
          strip.textContent = `${text}    ${text}    ${text}`;
          wrapper.appendChild(strip);
          section.insertBefore(wrapper, section.firstChild);
          injectedEls.current.push(wrapper);

          gsap.set(strip, { x: dir === -1 ? "0%" : "-25%" });
          gsap.to(strip, {
            x: dir === -1 ? "-25%" : "0%",
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.5 },
          });
        });

        // ════════════════════════════════════════════════════════════════
        //  C. DECORATIVE FLOATING SECTION NUMBERS
        // ════════════════════════════════════════════════════════════════
        const sectionNums = [
          { id: "#about", num: "01" }, { id: "#skills", num: "02" },
          { id: "#experience", num: "03" }, { id: "#projects", num: "04" },
          { id: "#services", num: "05" }, { id: "#certificates", num: "06" },
          { id: "#contact", num: "07" },
        ];
        sectionNums.forEach(({ id, num }) => {
          const section = document.querySelector<HTMLElement>(id);
          if (!section) return;
          const numEl = document.createElement("div");
          numEl.setAttribute("aria-hidden", "true");
          numEl.textContent = num;
          numEl.style.cssText = `
            position: absolute; right: -20px; top: 40px;
            font-size: clamp(8rem, 18vw, 16rem);
            font-weight: 900; letter-spacing: -0.04em; line-height: 1;
            color: currentColor; opacity: 0.028;
            pointer-events: none; user-select: none; z-index: 0;
            will-change: transform;
          `;
          section.insertBefore(numEl, section.firstChild);
          injectedEls.current.push(numEl);
          gsap.to(numEl, { y: -90, ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2.8 } });
        });

        // ════════════════════════════════════════════════════════════════
        //  D. AMBIENT FIXED GLOW — color shifts as user scrolls
        // ════════════════════════════════════════════════════════════════
        const ambientGlow = document.createElement("div");
        ambientGlow.setAttribute("aria-hidden", "true");
        ambientGlow.classList.add("gsap-ambient-glow");
        ambientGlow.style.cssText = `
          position: fixed; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 900px; height: 900px; border-radius: 50%;
          pointer-events: none; z-index: 0; will-change: background;
          background: radial-gradient(circle, rgba(59,130,246,0.035), transparent 70%);
        `;
        document.body.appendChild(ambientGlow);
        injectedEls.current.push(ambientGlow);

        ScrollTrigger.create({
          trigger: document.documentElement,
          start: "top top", end: "bottom bottom",
          onUpdate: (self) => {
            const p = self.progress;
            const r = Math.round(59  + p * 100);
            const g = Math.round(130 - p * 55);
            const b = Math.round(246 - p * 60);
            ambientGlow.style.background = `radial-gradient(circle, rgba(${r},${g},${b},0.04), transparent 70%)`;
          },
        });

        // ════════════════════════════════════════════════════════════════
        //  E. HERO — multi-depth blob parallax + content exit
        // ════════════════════════════════════════════════════════════════
        gsap.utils.toArray<HTMLElement>(".hero-blob").forEach((blob, i) => {
          gsap.to(blob, {
            y: i % 2 === 0 ? -200 : 155,
            x: i % 3 === 0 ? -75 : 55,
            scale: i % 2 === 0 ? 1.18 : 0.86,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: 1.8 + i * 0.35,
            },
          });
        });

        // Hero content fades, lifts, and scales away as user scrolls
        gsap.to(".hero-content", {
          y: -130,
          scale: 0.94,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "65% top",
            scrub: 1.5,
          },
        });

        // ════════════════════════════════════════════════════════════════
        //  F. SECTION HEADINGS & SUBHEADINGS
        // ════════════════════════════════════════════════════════════════
        gsap.utils.toArray<HTMLElement>("[data-gsap-heading]").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 65, skewY: 4 },
            { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-gsap-subheading]").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.85, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" } }
          );
        });

        // ════════════════════════════════════════════════════════════════
        //  G. ABOUT — card reveal, bio stagger, stat counters
        // ════════════════════════════════════════════════════════════════
        gsap.fromTo(".gsap-about-card",
          { opacity: 0, x: -80, rotateY: -15 },
          { opacity: 1, x: 0, rotateY: 0, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: ".gsap-about-card", start: "top 80%", toggleActions: "play none none none" } }
        );

        gsap.fromTo(".gsap-bio-text",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, stagger: 0.18, duration: 0.85, ease: "power2.out",
            scrollTrigger: { trigger: ".gsap-bio-text", start: "top 85%", toggleActions: "play none none none" } }
        );

        gsap.utils.toArray<HTMLElement>(".gsap-stat-number").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target, duration: 2.4, ease: "power2.out",
            onUpdate: () => { el.textContent = Math.round(obj.val) + "+"; },
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });

        // ════════════════════════════════════════════════════════════════
        //  H. SKILLS — bento grid stagger
        // ════════════════════════════════════════════════════════════════
        const skillItems = gsap.utils.toArray<HTMLElement>(".gsap-skill-item");
        if (skillItems.length) {
          gsap.fromTo(skillItems,
            { opacity: 0, y: 55, scale: 0.91 },
            { opacity: 1, y: 0, scale: 1, stagger: { amount: 0.65, from: "start" }, duration: 0.78, ease: "power3.out",
              scrollTrigger: { trigger: skillItems[0], start: "top 85%", toggleActions: "play none none none" } }
          );
        }

        // ════════════════════════════════════════════════════════════════
        //  I. EXPERIENCE — timeline line draw + alternating card reveal
        // ════════════════════════════════════════════════════════════════
        const timelineLine = document.querySelector<HTMLElement>(".gsap-timeline-line");
        if (timelineLine) {
          gsap.fromTo(timelineLine,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, ease: "none",
              scrollTrigger: { trigger: timelineLine, start: "top 80%", end: "bottom 20%", scrub: 1.5 } }
          );
        }

        gsap.utils.toArray<HTMLElement>(".gsap-exp-card").forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, x: i % 2 === 0 ? -72 : 72, y: 22 },
            { opacity: 1, x: 0, y: 0, duration: 0.92, ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 84%", toggleActions: "play none none none" } }
          );
        });

        // ════════════════════════════════════════════════════════════════
        //  J. PROJECTS — 3-D entrance stagger
        // ════════════════════════════════════════════════════════════════
        const projectCards = gsap.utils.toArray<HTMLElement>(".gsap-project-card");
        if (projectCards.length) {
          gsap.fromTo(projectCards,
            { opacity: 0, y: 85, rotateX: 14, transformPerspective: 900 },
            { opacity: 1, y: 0, rotateX: 0, stagger: 0.19, duration: 0.95, ease: "power3.out",
              scrollTrigger: { trigger: projectCards[0], start: "top 86%", toggleActions: "play none none none" } }
          );
        }

        // ════════════════════════════════════════════════════════════════
        //  K. SERVICES — cascade + micro rotation
        // ════════════════════════════════════════════════════════════════
        const serviceCards = gsap.utils.toArray<HTMLElement>(".gsap-service-card");
        if (serviceCards.length) {
          gsap.fromTo(serviceCards,
            { opacity: 0, y: 65, rotate: 2.5, scale: 0.94 },
            { opacity: 1, y: 0, rotate: 0, scale: 1, stagger: 0.13, duration: 0.82, ease: "power3.out",
              scrollTrigger: { trigger: serviceCards[0], start: "top 86%", toggleActions: "play none none none" } }
          );
        }

        // ════════════════════════════════════════════════════════════════
        //  L. CONTACT
        // ════════════════════════════════════════════════════════════════
        const contactItems = gsap.utils.toArray<HTMLElement>(".gsap-contact-item");
        if (contactItems.length) {
          gsap.fromTo(contactItems,
            { opacity: 0, x: -55 },
            { opacity: 1, x: 0, stagger: 0.15, duration: 0.72, ease: "power2.out",
              scrollTrigger: { trigger: contactItems[0], start: "top 85%", toggleActions: "play none none none" } }
          );
        }

        gsap.fromTo(".gsap-contact-form",
          { opacity: 0, x: 85, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.05, ease: "power3.out",
            scrollTrigger: { trigger: ".gsap-contact-form", start: "top 80%", toggleActions: "play none none none" } }
        );

        // ════════════════════════════════════════════════════════════════
        //  M. CERTIFICATES stagger
        // ════════════════════════════════════════════════════════════════
        const certItems = gsap.utils.toArray<HTMLElement>(".gsap-cert-item");
        if (certItems.length) {
          gsap.fromTo(certItems,
            { opacity: 0, y: 45, scale: 0.94 },
            { opacity: 1, y: 0, scale: 1, stagger: { amount: 0.85, from: "start" }, duration: 0.72, ease: "power2.out",
              scrollTrigger: { trigger: certItems[0], start: "top 86%", toggleActions: "play none none none" } }
          );
        }

        // ════════════════════════════════════════════════════════════════
        //  N. CAROUSEL + FOOTER
        // ════════════════════════════════════════════════════════════════
        gsap.fromTo(".gsap-carousel-row",
          { opacity: 0, y: 42 },
          { opacity: 1, y: 0, stagger: 0.26, duration: 0.9, ease: "power2.out",
            scrollTrigger: { trigger: ".gsap-carousel-row", start: "top 88%", toggleActions: "play none none none" } }
        );

        gsap.fromTo("footer",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
            scrollTrigger: { trigger: "footer", start: "top 95%", toggleActions: "play none none none" } }
        );

        // ════════════════════════════════════════════════════════════════
        //  O. EXISTING .gsap-section-bg PARALLAX
        // ════════════════════════════════════════════════════════════════
        gsap.utils.toArray<HTMLElement>(".gsap-section-bg").forEach((bg) => {
          gsap.to(bg, {
            y: -65, ease: "none",
            scrollTrigger: { trigger: bg.parentElement ?? bg, start: "top bottom", end: "bottom top", scrub: 2.2 },
          });
        });

        // ════════════════════════════════════════════════════════════════
        //  P. TECH CHIP WAVE STAGGER
        // ════════════════════════════════════════════════════════════════
        gsap.utils.toArray<HTMLElement>(".gsap-tech-chip").forEach((chip, i) => {
          gsap.fromTo(chip,
            { opacity: 0, scale: 0.68, y: 22 },
            { opacity: 1, scale: 1, y: 0, delay: (i % 8) * 0.06, duration: 0.58, ease: "back.out(1.6)",
              scrollTrigger: { trigger: chip, start: "top 92%", toggleActions: "play none none none" } }
          );
        });

        ScrollTrigger.refresh();
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
        // Remove all dynamically injected DOM nodes
        injectedEls.current.forEach((el) => el.remove());
        injectedEls.current = [];
      };
    }, 420);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

