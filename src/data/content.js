// ---------------------------------------------------------------------------
// Central content model for the homepage.
// Keeping copy/data separate from components makes the page easy to maintain
// and lets every section render from a single source of truth.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO = {
  badge: 'Delhi NCR · Growth-Focused Digital Agency',
  titleTop: 'Scale Your Business With the',
  titleAccent: 'Best Digital Marketing',
  titleBottom: 'Agency in Delhi',
  lead:
    'Unlock your business potential and connect with your ideal customers. Xntrova blends creative ideas with data-driven execution to turn visibility into revenue.',
  stats: [
    { value: '500+', label: 'Happy clients' },
    { value: '120+', label: 'Projects delivered' },
    { value: '4.9★', label: 'Average client rating' },
  ],
}

export const CLIENTS = [
  'Scholar Scribe Solutions',
  'Etex',
  'Onsa',
  'Herbals Here',
  'Range Lilies',
  'Pitti Jewels & Pearls',
  'Berryan Luiz',
  'Amritya Wellness',
  'Fortune Mattresses',
  'NITDA',
  'Satvik',
  'Chetan Clinic',
  'Mahadev Tours',
  'Online Yoga Life',
  'Quality Tech Engineers',
  'Posh Wave',
  'Adoraa Grafully',
  'Envest Suru',
  'Insinc',
  'Umbrella Infocare',
  'Good Health Foundation',
]

export const TOOLS = [
  'Google Ads',
  'Google Analytics 4',
  'Meta Ads',
  'Ahrefs',
  'Semrush',
  'Moz',
  'Rank Math',
  'Search Console',
  'Canva',
  'HubSpot',
]

export const ABOUT = {
  eyebrow: 'About Xntrova',
  title: 'Driven by Ideas. Focused on Results.',
  paragraphs: [
    'At Xntrova, we believe the key to great marketing is understanding people. Every strategy we build is rooted in fresh ideas, robust planning and a clear focus on what truly matters — combining creativity with data-driven decisions to create experiences that connect, engage and inspire action.',
    'Whether you want to shape your brand story, improve visibility or drive conversions, we take a creative yet analytical approach to deliver measurable results that help your business climb the competitive ladder with confidence.',
  ],
  pillars: [
    {
      icon: 'lightbulb',
      title: 'Creative Ideas',
      text: 'Fresh thinking that builds powerful brand stories.',
    },
    {
      icon: 'target',
      title: 'Strategic Planning',
      text: 'Smart strategies backed by deep market insights.',
    },
    {
      icon: 'bar-chart',
      title: 'Data-Driven Decisions',
      text: 'Every decision tied to real impact and ROI.',
    },
    {
      icon: 'trending-up',
      title: 'Measurable Results',
      text: 'Real outcomes that drive long-term growth.',
    },
  ],
}

export const SERVICES = [
  {
    icon: 'search',
    title: 'Search Engine Optimization',
    text: 'Higher visibility and long-term organic growth through keyword strategy, on-page and technical SEO, and authority building that drives traffic and rankings.',
    tag: 'SEO',
  },
  {
    icon: 'megaphone',
    title: 'Paid Advertising',
    text: 'High-performance PPC campaigns across Google, Meta and more — reaching the right audience at the right time with messaging that converts.',
    tag: 'PPC',
  },
  {
    icon: 'share',
    title: 'Social Media Optimization',
    text: 'Creative storytelling, influencer collaborations and analytics-driven strategies that build engagement, relationships and community growth.',
    tag: 'SMO',
  },
  {
    icon: 'cart',
    title: 'E-Commerce Marketing',
    text: 'Product optimization, remarketing and conversion-focused campaigns that turn store visitors into loyal, repeat customers.',
    tag: 'E-COM',
  },
  {
    icon: 'pen',
    title: 'Content Marketing',
    text: 'Blogs, articles, infographics and storytelling campaigns aligned with your brand voice — strengthening authority and SEO performance.',
    tag: 'CONTENT',
  },
  {
    icon: 'code',
    title: 'Website Development',
    text: 'Fast, responsive, SEO-ready websites that balance performance with aesthetics — built around your goals and your users.',
    tag: 'WEB DEV',
  },
]

export const BENEFITS = [
  {
    title: 'Custom strategies, never templates',
    text: 'Every roadmap is built around your business, market and goals.',
  },
  {
    title: 'Data-driven, ROI-focused',
    text: 'Decisions backed by analytics — every rupee works toward results.',
  },
  {
    title: 'Complete transparency',
    text: 'Clear reporting, honest communication and no guesswork, ever.',
  },
  {
    title: 'Dedicated expert team',
    text: 'A proactive team that responds fast and treats your brand like its own.',
  },
  {
    title: 'Full-funnel expertise',
    text: 'From first impression to repeat purchase — every stage covered.',
  },
  {
    title: 'Proven track record',
    text: '500+ clients and 120+ projects delivered across industries.',
  },
]

export const STATS = [
  { end: 250, prefix: '+', suffix: '%', label: 'Average organic traffic growth' },
  { end: 120, prefix: '', suffix: '+', label: 'Projects delivered' },
  { end: 500, prefix: '', suffix: '+', label: 'Happy clients' },
  { end: 4.9, prefix: '', suffix: '/5', decimals: 1, label: 'Client satisfaction rating' },
]

export const PROCESS_STEPS = [
  {
    icon: 'search',
    title: 'Discover & Audit',
    text: 'We learn your business, audience and goals — then run a complete audit of your digital presence and competitors.',
  },
  {
    icon: 'map',
    title: 'Strategy & Roadmap',
    text: 'You get a custom growth plan with clear channels, KPIs, timelines and budgets. No guesswork, no fluff.',
  },
  {
    icon: 'rocket',
    title: 'Execute & Launch',
    text: 'Design, content, campaigns and development move in focused sprints — shipped fast, checked twice.',
  },
  {
    icon: 'line-chart',
    title: 'Measure & Scale',
    text: 'We track every metric that matters, report transparently, and double down on what performs.',
  },
]

export const CASE_STUDIES = [
  {
    industry: 'D2C · Skincare',
    service: 'SEO + Content Marketing',
    title: 'Organic growth engine for a D2C skincare brand',
    text: 'A technical SEO overhaul plus a content engine took the brand from page 5 to featured snippets.',
    headline: '+312%',
    headlineLabel: 'organic traffic in 6 months',
    metrics: [
      { value: '4.2×', label: 'more qualified leads' },
      { value: '38', label: 'keywords in top 3' },
    ],
    gradient: 'linear-gradient(135deg, #0e4356 0%, #001f2b 60%)',
  },
  {
    industry: 'E-Commerce · Furniture',
    service: 'Performance Marketing',
    title: 'Scaling paid ROAS for a furniture e-commerce store',
    text: 'Restructured campaigns, creative testing and remarketing funnels cut waste and scaled revenue.',
    headline: '5.2×',
    headlineLabel: 'return on ad spend',
    metrics: [
      { value: '-38%', label: 'customer acquisition cost' },
      { value: '+215%', label: 'monthly revenue' },
    ],
    gradient: 'linear-gradient(135deg, #7a4b00 0%, #3d2600 60%)',
  },
  {
    industry: 'Healthcare · Clinic',
    service: 'Local SEO + Web Dev',
    title: 'Local dominance for a multi-specialty clinic',
    text: 'Google Business optimization, local landing pages and a faster website filled the appointment calendar.',
    headline: '+180%',
    headlineLabel: 'appointment bookings',
    metrics: [
      { value: '#1', label: 'in the local map pack' },
      { value: '62%', label: 'faster page loads' },
    ],
    gradient: 'linear-gradient(135deg, #1d3a2f 0%, #0b1f18 60%)',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'What impressed us most about Xntrova was their strategic mindset. Unlike other agencies, they didn\u2019t give us a one-size-fits-all solution — they created customized strategies for our business. Their proactive communication and data-driven approach gave us confidence in every decision.',
    name: 'Amit Verma',
    role: 'Founder',
  },
  {
    quote:
      'Xntrova is truly the best digital marketing agency in Delhi. Their team brought fresh ideas and clear direction for our business. They listened to all of our concerns, built strategies accordingly, and the results were beyond expectations.',
    name: 'Neha Kapoor',
    role: 'Director',
  },
  {
    quote:
      'What sets Xntrova apart is the way they combine expertise with a human touch. They celebrate your wins, tackle challenges alongside you, and stay focused on creating long-term value. It\u2019s the kind of partnership every growing business hopes to find.',
    name: 'Rahul Sharma',
    role: 'CEO',
  },
  {
    quote:
      'What started as a simple project quickly turned into a long-term partnership. The team was approachable, proactive, and always willing to explore new ideas. Their dedication and attention to detail gave us confidence our brand was in the right hands.',
    name: 'Ankit Gupta',
    role: 'Founder',
  },
  {
    quote:
      'Xntrova combines creativity with practicality in a way that\u2019s hard to find. Every recommendation had a purpose, and every conversation left us more confident in our direction. They don\u2019t just deliver services — they bring real value.',
    name: 'Priya',
    role: 'CEO',
  },
]

export const FAQS = [
  {
    q: 'How long does it take to see results from digital marketing?',
    a: 'It depends on the channel and your goals. Paid advertising can generate leads within days, while SEO is a compounding strategy that typically shows meaningful movement in 8–12 weeks and strong results in 4–6 months. We set realistic milestones upfront and report progress at every step.',
  },
  {
    q: 'How do you create marketing strategies for businesses?',
    a: 'Every engagement starts with discovery: we study your business, audience, competitors and current digital footprint. Then we build a custom roadmap with the right channel mix, KPIs and timelines — so every activity has a clear purpose and measurable outcome.',
  },
  {
    q: 'Will I receive regular updates on campaign performance?',
    a: 'Yes. You get scheduled performance reports and dashboards, plus a dedicated point of contact. We believe in complete transparency — you will always know what is running, what it costs and what it returns.',
  },
  {
    q: 'Which digital marketing service is right for my business?',
    a: 'There is no single right answer — it depends on your stage, budget and goals. Book a free audit and we\u2019ll recommend the highest-impact starting point, whether that\u2019s SEO, paid ads, social, e-commerce marketing or a new website.',
  },
  {
    q: 'What makes Xntrova different from other agencies?',
    a: 'Strategy over templates, data over guesswork, and partnership over transactions. We combine creative ideas with rigorous measurement, communicate proactively, and stay accountable to the results that matter to your business.',
  },
]

export const SERVICE_OPTIONS = [
  'SEO (Search Engine Optimisation)',
  'PPC (Pay-Per-Click)',
  'Social Media Marketing',
  'E-Commerce Marketing',
  'Content Marketing',
  'Web Development',
  'Email Marketing',
  'Performance Marketing',
  'Other',
]

export const CONTACT_INFO = {
  phone: '+91 86838 28646',
  phoneHref: 'tel:+918683828646',
  email: 'hello@xntrova.com',
  emailHref: 'mailto:hello@xntrova.com',
  address: 'Dwarka, New Delhi, Delhi NCR, India',
  whatsapp: 'https://wa.me/918683828646',
}
