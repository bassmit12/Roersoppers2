// Full class strings so Tailwind can see them at build time
export const accentGradients: Record<string, string> = {
  'blue-cyan': 'from-blue-500 to-cyan-500',
  'cyan-teal': 'from-cyan-500 to-teal-500',
  'yellow-orange': 'from-yellow-500 to-orange-500',
  'purple-pink': 'from-purple-500 to-pink-500',
  'blue-indigo': 'from-blue-500 to-indigo-500',
  'rose-red': 'from-rose-500 to-red-500',
  'green-teal': 'from-green-500 to-teal-500',
}

export const accentHoverOverlays: Record<string, string> = {
  'blue-cyan': 'from-blue-500/20',
  'cyan-teal': 'from-cyan-500/20',
  'yellow-orange': 'from-yellow-500/20',
  'purple-pink': 'from-purple-500/20',
  'blue-indigo': 'from-indigo-500/20',
  'rose-red': 'from-rose-500/20',
  'green-teal': 'from-green-500/20',
}

export const cardHeaderGradients: Record<string, string> = {
  blue: 'from-blue-600 via-cyan-500 to-teal-500',
  cyan: 'from-cyan-600 via-blue-500 to-teal-500',
  teal: 'from-teal-600 via-cyan-500 to-blue-500',
}

export const featureColors: Record<string, { icon: string; bg: string }> = {
  red: { icon: 'text-red-500', bg: 'bg-red-100' },
  green: { icon: 'text-green-500', bg: 'bg-green-100' },
  yellow: { icon: 'text-yellow-500', bg: 'bg-yellow-100' },
  purple: { icon: 'text-purple-500', bg: 'bg-purple-100' },
  blue: { icon: 'text-blue-500', bg: 'bg-blue-100' },
}
