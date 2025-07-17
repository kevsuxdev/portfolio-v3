import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const successResponse = (message: string) => {
  return { success: true, message }
}

export const errorResponse = (message: string) => {
  return { success: false, message }
}

export const serverErrorResponse = (message?: string) => {
  return { success: false, message: message ?? 'An unexpected error occurred.' }
}
