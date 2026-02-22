"use client";

// GSAPScrollAnimations already has "use client" and returns null (no SSR markup),
// so a direct import is safe and avoids the double-dynamic-import indirection.
import { GSAPScrollAnimations } from "@/components/gsap-scroll-animations";

export function GSAPLoader() {
  return <GSAPScrollAnimations />;
}
