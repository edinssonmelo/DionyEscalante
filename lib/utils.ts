import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to get the correct image path for GitHub Pages
 * Automatically handles basePath if configured
 * Works in both development and production
 */
export function getImagePath(path: string): string {
  // If path is already a full URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Next.js with basePath will automatically handle the path during build
  // For static export, we need to ensure the path is correct
  // The basePath is automatically injected by GitHub Pages workflow
  return normalizedPath
}
