import { Work } from '@/types'

export const works: Work[] = [
  {
    slug: 'veritask-ai',
    title: 'Veritask AI',
    year: '2025',
    description:
      'Legal AI platform for Indonesian compliance-focused enterprises. Combines a regulatory database of 300,000+ regulations, 3,000,000+ clauses, and 1,000,000+ court decisions with AI-powered legal research, document drafting, document review, compliance tracking, and risk scoring in a single workspace.',
    platform: 'Website',
    stack: ['Remix', 'React', 'TypeScript', 'Tailwind CSS', 'React Query', 'i18next'],
    website: 'https://veritask.ai/id',
    images: [
      '/images/works/veritask-ai/1.png',
      '/images/works/veritask-ai/2.png',
      '/images/works/veritask-ai/3.png',
      '/images/works/veritask-ai/4.png',
    ],
    category: 'freelance',
    featured: true,
  },
  {
    slug: 'maha-job',
    title: 'Maha-Job Ecosystem',
    year: '2025',
    description:
      'Indonesia–Japan workforce ecosystem with three integrated products: Maha-Job employer portal for job placement, MahaEvent for event ticketing across music, sports, seminars, and community events, and Maha Gakkou for Japanese-language school and training management. Built as a multi-product SaaS for staffing agencies and event organizers.',
    platform: 'Website',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    website: [
      { label: 'Employer', url: 'https://maha-job.com/employer' },
      { label: 'Events', url: 'https://events.maha-job.com/' },
      { label: 'Gakkou', url: 'https://gakkou.maha-job.com/id' },
    ],
    images: [
      '/images/works/maha-job/1.png',
      '/images/works/maha-job/2.png',
      '/images/works/maha-job/3.png',
    ],
    category: 'freelance',
    featured: true,
  },
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
  {
    slug: 'grip-os',
    title: 'Grip OS',
    year: '2023',
    description:
      'Operations and supply chain reporting system for Ismaya Group, supporting inventory management, stock transfers, demand forecasting, anomaly detection, and task monitoring. Contributed as Frontend Engineer building dashboard interfaces and data visualization for restaurant operations.',
    platform: 'Website',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack React Query', 'Material UI'],
    images: ['/images/works/grip-os/1.jpg'],
    category: 'freelance',
    featured: false,
  },
  {
    slug: 'grip-force',
    title: 'Grip Force',
    year: '2023',
    description:
      'Mobile app for operational checklists and real-time inventory tracking at Ismaya Group, ensuring SOP compliance and seamless integration with Grip OS. Contributed as Frontend Engineer to inventory features including goods receipt, production tracking, and location-based pick recommendations.',
    platform: 'Mobile App',
    stack: ['React Native', 'TypeScript', 'TanStack React Query', 'React Redux'],
    images: ['/images/works/grip-force/1.jpg'],
    category: 'freelance',
    featured: false,
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
