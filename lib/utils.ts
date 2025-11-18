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

  // Only add basePath in production build (when output is 'export')
  // In development, Next.js serves from root
  if (typeof window === 'undefined') {
    // Server-side: check if we're in production
    const isProduction = process.env.NODE_ENV === 'production'
    if (isProduction) {
      const basePath = '/DionyEscalante'
      return `${basePath}${normalizedPath}`
    }
  } else {
    // Client-side: check if basePath is in the current pathname
    const currentPath = window.location.pathname
    if (currentPath.startsWith('/DionyEscalante')) {
      const basePath = '/DionyEscalante'
      return `${basePath}${normalizedPath}`
    }
  }

  // In development or when basePath is not needed, return path as is
  return normalizedPath
}
