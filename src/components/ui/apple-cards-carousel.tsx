"use client";
import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface AppleCard {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  screenshots?: string[];
  tags?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface AppleCardsCarouselProps {
  cards: AppleCard[];
}

export function AppleCardsCarousel({ cards }: AppleCardsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
  }, [checkScrollability]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-scroll scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={checkScrollability}
      >
        <div className="w-4 shrink-0" />
        {cards.map((card, index) => (
          <motion.div
            key={`apple-card-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.15 * index,
                ease: "easeOut",
              },
            }}
            className="shrink-0 last:mr-4"
          >
            <AppleCardItem card={card} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="mt-4 flex justify-end gap-2 pr-4">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors disabled:opacity-30 dark:bg-neutral-800"
        >
          <FaChevronLeft className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors disabled:opacity-30 dark:bg-neutral-800"
        >
          <FaChevronRight className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-300" />
        </button>
      </div>
    </div>
  );
}

function AppleCardItem({ card, index }: { card: AppleCard; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const images = card.screenshots && card.screenshots.length > 0 ? card.screenshots : card.src ? [card.src] : [];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Card trigger */}
      <motion.div
        layoutId={`apple-card-${index}-${id}`}
        onClick={() => setIsOpen(true)}
        className="group relative w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-white/[0.1] dark:bg-neutral-950/80"
      >
        <div className="relative h-60 w-full overflow-hidden">
          {card.src ? (
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
              <span className="text-xs text-neutral-400">No image</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-neutral-950" />
        </div>

        <div className="p-5">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
            {card.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {card.category}
          </p>
          {card.tags && card.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {card.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          {(card.githubUrl || card.liveUrl) && (
            <div className="mt-3 flex gap-2">
              {card.githubUrl && (
                <a
                  href={card.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-neutral-200 py-1.5 text-xs font-medium text-neutral-700 transition-all hover:border-blue-500 hover:text-blue-500 dark:border-white/10 dark:text-neutral-300"
                >
                  <FaGithub className="h-3 w-3" />
                  Code
                </a>
              )}
              {card.liveUrl && (
                <a
                  href={card.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-500 py-1.5 text-xs font-medium text-white transition-all hover:bg-blue-600"
                >
                  <FaExternalLinkAlt className="h-2.5 w-2.5" />
                  Demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Expanded card overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            />

            {/* Expanded card */}
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                layoutId={`apple-card-${index}-${id}`}
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-white/[0.1] dark:bg-neutral-950"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  <FaTimes className="h-3.5 w-3.5" />
                </button>

                {/* Screenshot Carousel */}
                <div className="relative h-72 w-full bg-black">
                  {images.length > 0 ? (
                    <>
                      <Image
                        src={images[currentSlide]}
                        alt={`${card.title} ${currentSlide + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                          >
                            <FaChevronLeft className="h-3 w-3" />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                          >
                            <FaChevronRight className="h-3 w-3" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                            {images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1.5 rounded-full transition-all ${
                                  i === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">
                      <span className="text-neutral-400">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="max-h-[50vh] overflow-y-auto p-6">
                  {card.content}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
