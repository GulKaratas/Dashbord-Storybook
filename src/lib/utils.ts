import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "Az önce";
  if (diffInMinutes < 60) return `${diffInMinutes} dakika önce`;
  if (diffInMinutes < 1440)
    return `${Math.floor(diffInMinutes / 60)} saat önce`;
  return `${Math.floor(diffInMinutes / 1440)} gün önce`;
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
