import {
  AlertCircle,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  Euro,
  Facebook,
  FileText,
  Heart,
  Instagram,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Target,
  Trophy,
  Twitter,
  Users,
  Waves,
  XCircle,
  Youtube,
  Zap,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  'alert-circle': AlertCircle,
  briefcase: Briefcase,
  calendar: Calendar,
  'check-circle': CheckCircle,
  clock: Clock,
  'credit-card': CreditCard,
  download: Download,
  euro: Euro,
  'file-text': FileText,
  heart: Heart,
  mail: Mail,
  'map-pin': MapPin,
  phone: Phone,
  shield: Shield,
  star: Star,
  target: Target,
  trophy: Trophy,
  users: Users,
  waves: Waves,
  'x-circle': XCircle,
  zap: Zap,
  // social platforms
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
}

export function Icon({ name, className }: { name?: string | null; className?: string }) {
  const Component = name ? icons[name] : undefined
  if (!Component) return null
  return <Component className={className} aria-hidden />
}
