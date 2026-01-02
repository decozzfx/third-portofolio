export interface Work {
  slug: string
  title: string
  year: string
  description: string
  platform: string
  stack: string[]
  website?: string
  images: string[]
  category: 'freelance' | 'learning'
  featured: boolean
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
