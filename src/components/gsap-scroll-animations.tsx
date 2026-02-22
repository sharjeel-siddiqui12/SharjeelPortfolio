"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GSAPScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Allow layout to fully paint before registering triggers
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // ─── 1. HERO PARALLAX BLOBS ───────────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".hero-blob").forEach((blob, i) => {
          gsap.to(blob, {
            y: i % 2 === 0 ? -180 : 130,
            x: i % 3 === 0 ? -60 : 40,
            ease: "none",
            scrollTrigger: {
              trigger: "#home",
              start: "top top",
              end: "bottom top",
              scrub: 2,
            },
          });
        });

        // ─── 2. HERO content slow parallax upward ────────────────────────
        gsap.to(".hero-content", {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // ─── 3. SECTION HEADING WORD REVEAL ──────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap-heading]").forEach((el) => {
          // Split into words and wrap
          const originalHTML = el.innerHTML;
          const text = el.innerText;

          // Create wrapper for clip-path reveal per line
          gsap.fromTo(
            el,
            { opacity: 0, y: 60, skewY: 4 },
            {
              opacity: 1,
              y: 0,
              skewY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ─── 4. SECTION SUBHEADINGS ──────────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap-subheading]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ─── 5. ABOUT — profile card reveal ─────────────────────────────
        gsap.fromTo(
          ".gsap-about-card",
          { opacity: 0, x: -80, rotateY: -15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-about-card",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // ─── 6. ABOUT — bio text lines stagger ──────────────────────────
        gsap.fromTo(
          ".gsap-bio-text",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.18,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".gsap-bio-text",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // ─── 7. ABOUT — stat counters ────────────────────────────────────
        gsap.utils.toArray<HTMLElement>(".gsap-stat-number").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0", 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + "+";
            },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // ─── 8. SKILLS — bento grid items stagger ───────────────────────
        const skillItems = gsap.utils.toArray<HTMLElement>(".gsap-skill-item");
        if (skillItems.length) {
          gsap.fromTo(
            skillItems,
            { opacity: 0, y: 50, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: { amount: 0.6, from: "start" },
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: skillItems[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ─── 9. EXPERIENCE — timeline line draw ─────────────────────────
        const timelineLine =
          document.querySelector<HTMLElement>(".gsap-timeline-line");
        if (timelineLine) {
          gsap.fromTo(
            timelineLine,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: timelineLine,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1.5,
              },
            }
          );
        }

        // ─── 10. EXPERIENCE CARDS — alternating slide in ─────────────────
        gsap.utils.toArray<HTMLElement>(".gsap-exp-card").forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: i % 2 === 0 ? -70 : 70, y: 20 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 83%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ─── 11. PROJECT CARDS — 3D card entrance stagger ────────────────
        const projectCards =
          gsap.utils.toArray<HTMLElement>(".gsap-project-card");
        if (projectCards.length) {
          gsap.fromTo(
            projectCards,
            { opacity: 0, y: 80, rotateX: 12, transformPerspective: 800 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              stagger: 0.18,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: projectCards[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ─── 12. SERVICE CARDS — cascade from bottom + rotation ──────────
        const serviceCards =
          gsap.utils.toArray<HTMLElement>(".gsap-service-card");
        if (serviceCards.length) {
          gsap.fromTo(
            serviceCards,
            { opacity: 0, y: 60, rotate: 2, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              stagger: 0.12,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: serviceCards[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ─── 13. CONTACT — info items stagger ───────────────────────────
        const contactItems =
          gsap.utils.toArray<HTMLElement>(".gsap-contact-item");
        if (contactItems.length) {
          gsap.fromTo(
            contactItems,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: contactItems[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ─── 14. CONTACT FORM slide in from right ────────────────────────
        gsap.fromTo(
          ".gsap-contact-form",
          { opacity: 0, x: 80, scale: 0.97 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-contact-form",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // ─── 15. CERTIFICATES section stagger ───────────────────────────
        const certItems = gsap.utils.toArray<HTMLElement>(".gsap-cert-item");
        if (certItems.length) {
          gsap.fromTo(
            certItems,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: { amount: 0.8, from: "start" },
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: certItems[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // ─── 16. INFINITE CAROUSEL sections fade-in ─────────────────────
        gsap.fromTo(
          ".gsap-carousel-row",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.25,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".gsap-carousel-row",
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );

        // ─── 17. FOOTER fade up ──────────────────────────────────────────
        gsap.fromTo(
          "footer",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "footer",
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );

        // ─── 18. BACKGROUND SECTION PARALLAX ────────────────────────────
        gsap.utils.toArray<HTMLElement>(".gsap-section-bg").forEach((bg) => {
          gsap.to(bg, {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: bg.parentElement ?? bg,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        });

        // ─── 19. TECH STACK tag chips — wave stagger ────────────────────
        gsap.utils.toArray<HTMLElement>(".gsap-tech-chip").forEach((chip, i) => {
          gsap.fromTo(
            chip,
            { opacity: 0, scale: 0.7, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              delay: (i % 8) * 0.06,
              duration: 0.55,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: chip,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
