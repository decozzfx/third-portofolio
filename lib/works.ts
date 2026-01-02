import { Work } from '@/types'

export const works: Work[] = [
  {
    slug: 'solidarirun-2025',
    title: 'Solidarirun 2025',
    year: '2025',
    description:
      'A running event website for Ponorogo that functions as a platform for registrars, information, and event management for annual solidarity run. With 500+ registered runners, this community-focused racing event provides seamless registration and participant management.',
    platform: 'Website',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Midtrans'],
    website: 'https://solidarirun.site/',
    images: [
      '/images/works/solidarirun-2025/1.png',
      '/images/works/solidarirun-2025/2.png',
      '/images/works/solidarirun-2025/3.png',
      '/images/works/solidarirun-2025/4.png',
      '/images/works/solidarirun-2025/5.png',
    ],
    category: 'freelance',
    featured: true,
  },
  {
    slug: 'pendekarun-2025',
    title: 'PendekaRun 2025',
    year: '2025',
    description:
      'A national running event website for Madiun City combining solidarity and fitness. The platform provides registration, event information, and management for 10K and 5K categories organized by HIPMI (Association of Young Indonesian Entrepreneurs).',
    platform: 'Website',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Midtrans'],
    website: 'https://madiun10k.com/',
    images: [
      '/images/works/pendekarun-2025/1.png',
      '/images/works/pendekarun-2025/2.png',
      '/images/works/pendekarun-2025/3.png',
    ],
    category: 'freelance',
    featured: true,
  },
  {
    slug: 'ushopid',
    title: 'USHOP ID',
    year: '2024',
    description: 'Ushopid is a top up gaming website for all online games in Indonesia.',
    platform: 'Website',
    stack: ['Next.js 15', 'NextUI', 'Express', 'MongoDB', 'Midtrans'],
    website: 'https://ushop.id/',
    images: [
      '/images/works/ushop/youshop-web-01.png',
      '/images/works/ushop/youshop-web-02.png',
      '/images/works/ushop/youshop-web-03.png',
      '/images/works/ushop/youshop-web-04.png',
      '/images/works/ushop/youshop-web-05.png',
      '/images/works/ushop/youshop-web-06.png',
    ],
    category: 'freelance',
    featured: true,
  },
  {
    slug: 'supree',
    title: 'Supree',
    year: '2024',
    description:
      'Supree is an attendance management app for workers in Sukolilo village government. The app is used to record the attendance of the workers. Built using React Native and Supabase.',
    platform: 'Android',
    stack: ['React Native', 'Supabase'],
    images: [
      '/images/works/supree01.png',
      '/images/works/supree02.png',
      '/images/works/supree03.png',
      '/images/works/supree04.png',
      '/images/works/supree05.png',
    ],
    category: 'freelance',
    featured: false,
  },
  {
    slug: 'iconvert-web',
    title: 'IConvert Web',
    year: '2024',
    description: 'Convert and Transfer Pulsa for all operators in Indonesia - Web version.',
    platform: 'Website',
    stack: ['React.js'],
    images: [
      '/images/works/iconvert-web/iconvert-web-01.png',
      '/images/works/iconvert-web/iconvert-web-02.png',
      '/images/works/iconvert-web/iconvert-web-03.png',
      '/images/works/iconvert-web/iconvert-web-04.png',
      '/images/works/iconvert-web/iconvert-web-05.png',
    ],
    category: 'freelance',
    featured: true,
  },
  {
    slug: 'iconvert',
    title: 'IConvert Mobile',
    year: '2024',
    description: 'Convert and Transfer Pulsa for all operators in Indonesia - Mobile app.',
    platform: 'Android',
    stack: ['React Native', 'Supabase'],
    images: [
      '/images/works/iconvert01.png',
      '/images/works/iconvert02.png',
      '/images/works/iconvert03.png',
      '/images/works/iconvert04.png',
      '/images/works/iconvert05.png',
      '/images/works/iconvert06.png',
      '/images/works/iconvert07.png',
    ],
    category: 'freelance',
    featured: true,
  },
]

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug)
}

export function getFeaturedWorks(): Work[] {
  return works.filter((work) => work.featured)
}

export function getWorksByCategory(category: Work['category']): Work[] {
  return works.filter((work) => work.category === category)
}
