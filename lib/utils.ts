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

  // Add basePath for GitHub Pages deployment
  const basePath = '/DionyEscalante'

  return `${basePath}${normalizedPath}`
}
