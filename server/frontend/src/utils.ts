export function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function timeUntil(iso: string): string {
  const seconds = Math.floor((new Date(iso).getTime() - Date.now()) / 1000)
  if (seconds <= 0) return "expired"
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  return `${days}d`
}

export function secondsUntil(iso: string): number {
  return Math.floor((new Date(iso).getTime() - Date.now()) / 1000)
}

export function confidenceColor(c: number): string {
  if (c < 0.3) return "text-red-600 dark:text-red-400"
  if (c < 0.5) return "text-amber-600 dark:text-amber-400"
  if (c < 0.7) return "text-yellow-500 dark:text-yellow-400"
  return "text-green-600 dark:text-green-400"
}
