"use client";
import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  cellX: number;
  cellY: number;
}

interface ParticlesBackgroundProps {
  quantity?: number;
  className?: string;
  color?: string;
  connectionDistance?: number;
}

export function ParticlesBackground({
  quantity = 40,
  className = "",
  color = "99, 102, 241",
  connectionDistance = 120,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const lastFrameTimeRef = useRef(0);
  const gridRef = useRef<Map<string, Particle[]>>(new Map());

  // Use spatial grid for O(n) connection checking instead of O(n²)
  const updateGrid = useCallback((particles: Particle[], cellSize: number) => {
    gridRef.current.clear();
    particles.forEach((p) => {
      p.cellX = Math.floor(p.x / cellSize);
      p.cellY = Math.floor(p.y / cellSize);
      const key = `${p.cellX},${p.cellY}`;
      if (!gridRef.current.has(key)) {
        gridRef.current.set(key, []);
      }
      gridRef.current.get(key)!.push(p);
    });
  }, []);

  const getNeighbors = useCallback((p: Particle): Particle[] => {
    const neighbors: Particle[] = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const key = `${p.cellX + dx},${p.cellY + dy}`;
        const cell = gridRef.current.get(key);
        if (cell) neighbors.push(...cell);
      }
    }
    return neighbors;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Auto-reduce on mobile
    const isMobile =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;
    const effectiveQuantity = isMobile ? Math.ceil(quantity * 0.5) : quantity;
    const effectiveConnectionDistance = isMobile ? Math.ceil(connectionDistance * 0.7) : connectionDistance;
    // Lower FPS on mobile for battery/perf
    const targetFPS = isMobile ? 20 : 30;
    const frameInterval = 1000 / targetFPS;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !animationRef.current) {
          lastFrameTimeRef.current = performance.now();
          animationRef.current = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Use device pixel ratio for sharp rendering, but cap it
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particlesRef.current = Array.from({ length: effectiveQuantity }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.15,
        cellX: 0,
        cellY: 0,
      }));
    };

    const draw = (currentTime: number) => {
      if (!isVisibleRef.current) {
        animationRef.current = 0;
        return;
      }

      const elapsed = currentTime - lastFrameTimeRef.current;
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameTimeRef.current = currentTime - (elapsed % frameInterval);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = particlesRef.current;
      
      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
      });

      // Update spatial grid
      updateGrid(particles, effectiveConnectionDistance);

      // Batch particle drawing
      ctx.fillStyle = `rgba(${color}, 0.3)`;
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections using spatial partitioning (much faster)
      ctx.lineWidth = 0.6;
      const checkedPairs = new Set<string>();
      
      particles.forEach((p) => {
        const neighbors = getNeighbors(p);
        neighbors.forEach((neighbor) => {
          if (p === neighbor) return;
          const pairKey = p.x < neighbor.x ? `${p.x},${p.y}-${neighbor.x},${neighbor.y}` : `${neighbor.x},${neighbor.y}-${p.x},${p.y}`;
          if (checkedPairs.has(pairKey)) return;
          checkedPairs.add(pairKey);
          
          const dx = p.x - neighbor.x;
          const dy = p.y - neighbor.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = effectiveConnectionDistance * effectiveConnectionDistance;
          
          if (distSq < maxDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / effectiveConnectionDistance) * 0.2;
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    lastFrameTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initParticles();
    };

    // Debounced resize handler
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }, [quantity, color, connectionDistance, updateGrid, getNeighbors]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ willChange: "auto" }}
    />
  );
}
