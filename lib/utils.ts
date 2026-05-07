import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const luxuryTiming = {
  cinematic: 1.2,
  elegant: 0.8,
  subtle: 0.4,
  micro: 0.2,
} as const;

export const goldAccents = {
  primary: "#D4AF37",
  light: "#F0D98C",
  dark: "#B8972E",
} as const;