export const heroPoster =
  'https://www.presight.ai/hubfs/Presight_2026/Images/frame-1-2-699f3a9b19789.webp'
export const heroVideo = 'https://www.presight.ai/hubfs/brand.mp4'
export const aboutImage =
  'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/image-473%20(1)-2.png?width=1067&height=1366&name=image-473%20(1)-2.png'
export const focusImage =
  'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Mask%20group%20(4).webp?width=965&height=662&name=Mask%20group%20(4).webp'
export const waveImage =
  'https://www.presight.ai/hubfs/Presight_2026/Images/image%20474-2.png'

const icon = (file: string) =>
  `https://www.presight.ai/hubfs/Presight_2026/Images/${file}`

export type LinkItem = { title: string; desc?: string; to: string; icon?: string }
export type MenuGroup = { label: string; to?: string; icon?: string; items: LinkItem[] }
export type NavEntry = {
  label: string
  columns: 3 | 5 | 6
  layout: 'cards' | 'columns'
  items?: LinkItem[]
  groups?: MenuGroup[]
}

export const company: LinkItem[] = [
  {
    title: 'About GoPresight',
    desc: 'Leading AI and big data analytics company driving digital transformation',
    to: '/about',
    icon: icon('Vector%20(5).svg'),
  },
  {
    title: 'Leadership',
    desc: 'Visionary executives shaping GoPresight’s strategy, innovation, and global growth',
    to: '/leadership',
    icon: icon('Stress-Management--Streamline-Sharp-Material.svg'),
  },
  {
    title: 'AI Startup Accelerator',
    desc: 'Accelerating breakthrough AI startups through funding, and ecosystem support',
    to: '/accelerator',
    icon: icon('Vector%20(8).svg'),
  },
  {
    title: 'Strategic Alliances',
    desc: 'Collaborating with global partners to deliver advanced, AI-powered solutions',
    to: '/alliances',
    icon: icon('Vector%20(6).svg'),
  },
  {
    title: 'Careers',
    desc: 'Impactful opportunities in an innovative, diverse, and growth-driven workplace',
    to: '/careers',
    icon: icon('Vector%20(7).svg'),
  },
]

export const products: LinkItem[] = [
  {
    title: 'GoPresight Synergy',
    desc: 'The End-to-End Data and AI Platform',
    to: '/products/synergy',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group.png?width=26&height=30&name=Group.png',
  },
  {
    title: 'GoPresight Agentic Platform',
    desc: 'Enterprise AI Operating System',
    to: '/products/agentic',
    icon: 'https://www.presight.ai/hubfs/Presight_Agentic_Platform_mark_rgb.svg',
  },
  {
    title: 'GoPresight IntelliPlatform',
    desc: 'Unified AI and IoT Engine for Smart Cities',
    to: '/products/intelliplatform',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group%20(2)-1.png?width=25&height=31&name=Group%20(2)-1.png',
  },
]

export const solutionGroups: MenuGroup[] = [
  {
    label: 'Smart City',
    to: '/industries/smart-city',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group%20(12).png?width=26&height=29&name=Group%20(12).png',
    items: [
      { title: 'GoPresight IntelliCity', to: '/solutions/intellicity' },
      { title: 'Traffic Management', to: '/solutions/traffic' },
      { title: 'Safety Management', to: '/solutions/safety' },
      { title: 'Event Management', to: '/solutions/events' },
      { title: 'Buildings and Facility Management', to: '/solutions/buildings' },
      { title: 'Environment Management', to: '/solutions/environment' },
      { title: 'Waste Management', to: '/solutions/waste' },
    ],
  },
  {
    label: 'Public Safety',
    to: '/industries/public-safety',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group%20(9).png?width=23&height=31&name=Group%20(9).png',
    items: [
      { title: 'GoPresight Law Enforcement', to: '/solutions/law-enforcement' },
      { title: 'GoPresight Marble', to: '/solutions/marble' },
      { title: 'GoPresight LifeSaver', to: '/solutions/lifesaver' },
    ],
  },
  {
    label: 'Enterprise',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group%20(8).png?width=24&height=28&name=Group%20(8).png',
    items: [{ title: 'GoPresight Spectra', to: '/solutions/spectra' }],
  },
  {
    label: 'Energy',
    to: '/industries/energy',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/enova_mark_rgb.png?width=80&name=enova_mark_rgb.png',
    items: [{ title: 'GoPresight Enova', to: '/solutions/enova' }],
  },
  {
    label: 'Finance',
    to: '/industries/finance',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Group%20(11).png?width=23&height=24&name=Group%20(11).png',
    items: [{ title: 'GoPresight Financial Solutions', to: '/solutions/finance' }],
  },
  {
    label: 'Education',
    to: '/industries/education',
    icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/LearnXpert_mark_rgb.png?width=80&name=LearnXpert_mark_rgb.png',
    items: [{ title: 'GoPresight LearnXpert', to: '/solutions/learnxpert' }],
  },
]

export const industries: LinkItem[] = [
  {
    title: 'Public Safety',
    desc: 'AI to enhance government efficiency and public safety',
    to: '/industries/public-safety',
    icon: icon('Vector%20(4).svg'),
  },
  {
    title: 'Finance',
    desc: 'Sovereign AI for compliance, risk, and financial innovation',
    to: '/industries/finance',
    icon: icon('Vector%20(2).svg'),
  },
  {
    title: 'Smart City',
    desc: 'Intelligent solutions for safer, smarter urban operations',
    to: '/industries/smart-city',
    icon: icon('Vector.svg'),
  },
  {
    title: 'Energy',
    desc: 'AI-driven efficiency and sustainability for the energy sector',
    to: '/industries/energy',
    icon: icon('Vector%20(3).svg'),
  },
  {
    title: 'Education',
    desc: 'AI-powered tools improving learning and teaching outcomes',
    to: '/industries/education',
    icon: icon('Vector%20(1).svg'),
  },
]

export const investors: LinkItem[] = [
  { title: 'Investment Case', to: '/investors', icon: icon('Cases--Streamline-Sharp-Material.svg') },
  { title: 'Shareholder Info', to: '/investors/shareholders', icon: icon('User-Attributes--Streamline-Sharp-Material.svg') },
  { title: 'Guidance and Outlook', to: '/investors/guidance', icon: icon('Vector%20(15).svg') },
  { title: 'Analyst Coverage', to: '/investors/analysts', icon: icon('Vector%20(11).svg') },
  { title: 'Corporate Governance', to: '/investors/governance', icon: icon('Vector%20(13).svg') },
  { title: 'Investor Relations Calendar', to: '/investors/calendar', icon: icon('Vector%20(16).svg') },
  { title: 'Factsheet', to: '/investors/factsheet', icon: icon('Vector%20(12).svg') },
  { title: 'Company Announcements', to: '/investors/announcements', icon: icon('Vector%20(14).svg') },
  { title: 'Results and Presentations', to: '/investors/results', icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/report.png?width=64&name=report.png' },
  { title: '2026 Annual General Meeting', to: '/investors/agm', icon: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/report.png?width=64&name=report.png' },
]

export const mainNav: NavEntry[] = [
  { label: 'Company', columns: 3, layout: 'cards', items: company },
  { label: 'Products', columns: 3, layout: 'cards', items: products },
  { label: 'Solutions', columns: 6, layout: 'columns', groups: solutionGroups },
  { label: 'Industries', columns: 3, layout: 'cards', items: industries },
  { label: 'Investor Relations', columns: 5, layout: 'cards', items: investors },
]

const logoBase = 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/Client%20Logo/'

export const clientLogos = [
  { alt: 'Central Bank of Uzbekistan', src: `${logoBase}image21.png?width=741&name=image21.png` },
  { alt: 'Partner', src: `${logoBase}image11.png?width=250&name=image11.png` },
  { alt: 'Partner', src: `${logoBase}image20.png?width=675&name=image20.png` },
  {
    alt: 'Central Bank of the UAE',
    src: `${logoBase}Central%20Bank%20of%20the%20United%20Arab%20Emirates-5908a6cb-2e85-4671-8555-fc7f60a6c243.png?width=512&name=Central%20Bank%20of%20the%20United%20Arab%20Emirates-5908a6cb-2e85-4671-8555-fc7f60a6c243.png`,
  },
  { alt: 'Partner', src: `${logoBase}image16.png?width=183&name=image16.png` },
  { alt: 'Partner', src: `${logoBase}image13.png?width=900&name=image13.png` },
  { alt: 'Partner', src: `${logoBase}logo-vertical-d.png?width=400&name=logo-vertical-d.png` },
  {
    alt: 'Department of Culture and Tourism Abu Dhabi',
    src: `${logoBase}department-of-culture-and-tourism-in-abu-dhabi-logo-vector-1.png?width=520&name=department-of-culture-and-tourism-in-abu-dhabi-logo-vector-1.png`,
  },
  { alt: 'Partner', src: `${logoBase}image8.png?width=300&name=image8.png` },
  { alt: 'ETCC', src: `${logoBase}ETCC.png?width=816&name=ETCC.png` },
  { alt: 'HSBC', src: `${logoBase}hsbc-logo.png?width=400&name=hsbc-logo.png` },
  {
    alt: 'Expo 2020 Dubai',
    src: 'https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/EXPO%202020%20Dubai_2-1.png?width=400&name=EXPO%202020%20Dubai_2-1.png',
  },
  { alt: 'Partner', src: `${logoBase}image36.png?width=378&name=image36.png` },
  { alt: 'Partner', src: `${logoBase}image29.png?width=600&name=image29.png` },
  { alt: 'Partner', src: `${logoBase}image26.png?width=400&name=image26.png` },
  { alt: 'Partner', src: `${logoBase}image22.png?width=253&name=image22.png` },
]

export const focusItems = [
  {
    title: 'Public Sector',
    text: 'AI for government efficiency, public safety, emergency response.',
    to: '/industries/public-safety',
  },
  {
    title: 'Energy',
    text: 'Emissions management, energy optimization, predictive maintenance.',
    to: '/industries/energy',
  },
  {
    title: 'Smart Cities',
    text: 'Urban intelligence, city and mobility planning, infrastructure management.',
    to: '/industries/smart-city',
  },
  {
    title: 'Finance',
    text: 'AI for fraud detection, compliance, and risk forecasting.',
    to: '/industries/finance',
  },
  {
    title: 'Education',
    text: 'Student analytics, performance tracking, AI-driven digital learning.',
    to: '/industries/education',
  },
]

const card = (file: string) =>
  `https://www.presight.ai/hs-fs/hubfs/Presight_2026/Images/${file}`

export const stackCards = [
  {
    name: 'IntelliPlatform',
    title: 'Unified IoT and Video Analytics for Future-Ready Cities',
    logo: card('image-386%201.png?width=444&height=83&name=image-386%201.png'),
    to: '/products/intelliplatform',
  },
  {
    name: 'Synergy',
    title: 'Unifying Data, AI and BI on One Platform',
    logo: card('synergy%201-1.png?width=195&height=55&name=synergy%201-1.png'),
    to: '/products/synergy',
  },
  {
    name: 'Vitruvian',
    title: 'Powering Enterprise Intelligence with Secure Localized AI',
    logo: card('Vitruvian%201%20(1).png?width=205&height=55&name=Vitruvian%201%20(1).png'),
    to: '/products/agentic',
  },
  {
    name: 'LifeSaver',
    title: 'Unifying Teams and Technology to Save Lives',
    logo: card('lifesaver%201.png?width=217&height=55&name=lifesaver%201.png'),
    to: '/solutions/lifesaver',
  },
  {
    name: 'Enova',
    title: 'A Unified and AI-Driven Energy Intelligence Platform',
    logo: card('enova_master_rgb_white.png?width=165&height=55&name=enova_master_rgb_white.png'),
    to: '/solutions/enova',
  },
  {
    name: 'Financial Solutions',
    title: 'Power Financial Growth with Sovereign AI',
    logo: card(
      'FinancialSolutions_master_rgb_white%201.png?width=388&height=55&name=FinancialSolutions_master_rgb_white%201.png',
    ),
    to: '/solutions/finance',
  },
]

export const stats = [
  { value: '20+', label: 'Flagship Solutions', lift: 120, line: 501, width: 195, ink: 'rgba(62, 108, 226, 0.55)' },
  {
    value: 'FY-25\nAED 3.03B',
    label: 'in revenue (+36.9 % YoY)',
    lift: 64,
    line: 445,
    width: 230,
    ink: 'rgb(147, 215, 233)',
    glow: true,
  },
  { value: 'Proprietary\nIP', label: '', lift: 144, line: 386, width: 172, ink: 'rgb(17, 127, 189)', inset: -50 },
  {
    value: '5 Continents\n17+ Countries',
    label: 'Growing Global Presence',
    lift: 48,
    line: 448,
    width: 228,
    ink: 'rgb(132, 216, 224)',
  },
  {
    value: '25+',
    label: 'Successful Projects Globally',
    lift: 128,
    line: 295,
    width: 172,
    ink: 'rgb(70, 140, 210)',
    inset: -80,
  },
  { value: 'Debt-Free', label: 'Balance Sheet', lift: 76, line: 380, width: 187, ink: 'rgb(70, 140, 210)' },
  { value: 'High client retention', label: '', lift: 48, line: 433, width: 172, ink: 'rgb(184, 228, 230)' },
  { value: '9', label: 'ISO Certifications', lift: 96, line: 444, width: 172, ink: 'rgb(71, 153, 202)', inset: -30 },
]

export const edgeItems = [
  {
    title: 'AI at Scale',
    text: 'National-level AI deployments powering sovereign transformation and economic development',
    icon: 'https://www.presight.ai/hubfs/Presight_2026/Images/Maximize-2--Streamline-Sharp%201%20(1).svg',
  },
  {
    title: 'Proven Industry Impact',
    text: 'Multi-year digital transformation projects in public safety, finance, energy and smart cities',
    icon: 'https://www.presight.ai/hubfs/Presight_2026/Images/Stamp--Streamline-Sharp%201%20(1).svg',
  },
  {
    title: 'Human-Centric Approach',
    text: 'Focused on safety, wellbeing, and long-term impact',
    icon: 'https://www.presight.ai/hubfs/Presight_2026/Images/Signage-Priority-Pregnant-Woman--Streamline-Sharp%201.svg',
  },
  {
    title: 'Sustainable AI',
    text: 'Designed with ESG principles and sustainable efficiency in mind',
    icon: 'https://www.presight.ai/hubfs/Presight_2026/Images/Blood-Donate-Drop--Streamline-Sharp%201.svg',
  },
  {
    title: 'Agentic AI Leadership',
    text: 'Developers of ENERGYai – the world’s first agentic AI platform for energy optimization — already delivered $500M in value and 1M tons CO₂ reduction.',
    icon: 'https://www.presight.ai/hubfs/Presight_2026/Images/Ai-Science-Robot--Streamline-Sharp%201.svg',
  },
]

export const news = [
  {
    date: '02 Nov 2026',
    title: "The Future of AI Isn't More Agents. It's More Impact.",
    image: 'https://www.presight.ai/hubfs/Presight-Thomas_Op-Ed_KV_16x9.png',
    to: '/news/future-of-ai',
  },
  {
    date: '29 Oct 2026',
    title:
      'The Ministry of Digital Governance and Artificial Intelligence of Greece signs an MOU with GoPresight',
    image: 'https://www.presight.ai/hubfs/20261022KH_Z821459-1.jpg',
    to: '/news/greece-mou',
  },
  {
    date: '13 Oct 2026',
    title: 'X14 Media and GoPresight Partner to Advance AI-Powered Media Intelligence',
    image: 'https://www.presight.ai/hubfs/DSC05314dd.jpg',
    to: '/news/x14-media',
  },
  {
    date: '08 Oct 2026',
    title:
      'GoPresight Convenes AI, Technology, Investment and Government Leaders Ahead of AI Everything',
    image: 'https://www.presight.ai/hubfs/DSC_5131-1.jpg',
    to: '/news/ai-everything',
  },
]

export const pages: Record<string, { title: string; kicker?: string; body: string[] }> = {
  '/about': {
    kicker: 'Company',
    title: 'About GoPresight',
    body: [
      'Leading AI and big data analytics company driving digital transformation.',
      'Headquartered in Abu Dhabi and operating across four continents, GoPresight is at the forefront of innovation, delivering high-impact solutions that improve lives, empower communities, and enhance decision-making across industries.',
      'By integrating data, analytics, and AI into one seamless force of change we address the world’s most complex challenges—from energy efficiency and crisis management to digital sovereignty and public safety.',
      'Our mission is rooted in driving nations’ progress while staying committed to human advancement, sustainability, and people’s wellbeing. We are building a world where data fuels innovation, AI inspires change, and intelligence becomes a force for good.',
    ],
  },
  '/leadership': {
    kicker: 'Company',
    title: 'Leadership',
    body: [
      'Visionary executives shaping GoPresight’s strategy, innovation, and global growth.',
      'GoPresight’s leadership brings together operators, scientists, and public-sector partners who have delivered national-scale AI programs across public safety, energy, finance, and smart cities.',
    ],
  },
  '/accelerator': {
    kicker: 'Company',
    title: 'AI Startup Accelerator',
    body: [
      'Accelerating breakthrough AI startups through funding, and ecosystem support.',
      'The accelerator gives founders access to GoPresight’s data platforms, domain experts, and deployment pathways inside government and enterprise programs.',
    ],
  },
  '/alliances': {
    kicker: 'Company',
    title: 'Strategic Alliances',
    body: [
      'Collaborating with global partners to deliver advanced, AI-powered solutions.',
      'GoPresight works with technology, infrastructure, and public institutions to take applied intelligence from pilot to national operation.',
    ],
  },
  '/careers': {
    kicker: 'Company',
    title: 'Careers',
    body: [
      'Impactful opportunities in an innovative, diverse, and growth-driven workplace.',
      'Teams in Abu Dhabi and across four continents build products used in public safety, energy, finance, education, and smart cities.',
    ],
  },
  '/news': {
    kicker: 'Our Latest News',
    title: 'What’s New—and What’s Next',
    body: ['Stories, partnerships, and viewpoints from GoPresight.'],
  },
  '/contact': {
    kicker: 'Contact',
    title: 'Contact Us',
    body: ['Tell us about the outcome you need. A GoPresight specialist will follow up.'],
  },
  '/privacy': {
    kicker: 'Legal',
    title: 'Privacy Policy',
    body: ['GoPresight privacy notice 2026. This page mirrors the public policy destination on gopresight.com.'],
  },
  '/terms': {
    kicker: 'Legal',
    title: 'Terms of Service',
    body: ['Terms and conditions governing use of GoPresight websites and services.'],
  },
  '/cookies': {
    kicker: 'Legal',
    title: 'Cookies Settings',
    body: ['Manage how this site uses cookies. Essential cookies keep the experience working.'],
  },
}

function addProductPages() {
  products.forEach((item) => {
    pages[item.to] = {
      kicker: 'Products',
      title: item.title,
      body: [item.desc ?? '', 'Part of the GoPresight Intelligence Stack — data, AI, and operations on one applied platform.'],
    }
  })
  solutionGroups.forEach((group) => {
    group.items.forEach((item) => {
      pages[item.to] = {
        kicker: group.label,
        title: item.title,
        body: [
          `${item.title} is a GoPresight solution for ${group.label.toLowerCase()}.`,
          'GoPresight delivers industry-specific AI powered products and solutions that transform operations, enhance decision-making, and drive sustainable growth.',
        ],
      }
    })
  })
  industries.forEach((item) => {
    pages[item.to] = {
      kicker: 'Industries',
      title: item.title,
      body: [item.desc ?? ''],
    }
  })
  investors.forEach((item) => {
    pages[item.to] = {
      kicker: 'Investor Relations',
      title: item.title,
      body: [
        'GoPresight is listed in Abu Dhabi. FY-25 revenue reached AED 3.03B, up 36.9% year over year, with a debt-free balance sheet.',
      ],
    }
  })
  news.forEach((item) => {
    pages[item.to] = {
      kicker: item.date,
      title: item.title,
      body: [
        'GoPresight publishes this story as part of its latest news — partnerships, viewpoints, and programs that put applied intelligence into operation.',
      ],
    }
  })
}

addProductPages()
