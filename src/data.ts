import {
  Globe, Smartphone, Bot, Mail,
  TrendingUp, Users, Clock, DollarSign,
  CheckCircle2, BarChart3, ShoppingCart,
  Package, CreditCard, Search,
} from 'lucide-react';

export const SITE_DATA = {
  personal: {
    name: 'Yehonatan',
    brand: 'Signal Lab',
    email: 'buskilayehonatan6@gmail.com',
    emailSubject: 'I want a Free AI Audit — Signal Lab',
    instagram: 'https://www.instagram.com/signal.lab_/',
    instagramHandle: '@signal.lab_',
    tiktok: 'https://www.tiktok.com/@signal.lab',
    tiktokHandle: '@signal.lab',
    facebook: 'https://www.facebook.com/profile.php?id=100086763585884',
  },

  nav: {
    links: [
      { name: 'Home',     href: '#hero' },
      { name: 'Work',     href: '#showcase' },
      { name: 'Services', href: '#services' },
      { name: 'Results',  href: '#testimonials' },
      { name: 'Process',  href: '#process' },
    ],
    cta: 'Book a Call',
  },

  hero: {
    badge: 'AI Agency · Automation · Revenue',
    eyebrow: 'Signal Lab',
    headline1: 'We turn AI',
    headline2: 'into revenue.',
    sub: "We're not a typical agency. We build AI agents, automations, full-stack websites, and mobile apps — everything a modern business needs to grow, under one roof.",
    stats: [
      { num: 5000,  suffix: '+', label: 'Products shipped' },
      { num: 3,     suffix: '',  label: 'Full products built from 0' },
      { num: 100,   suffix: '%', label: 'Client satisfaction' },
    ],
  },

  ticker: [
    'React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
    'Expo', 'Supabase', 'PostgreSQL', 'Stripe', 'OpenAI',
    'Claude AI', 'Gemini', 'n8n', 'Make', 'WhatsApp API',
    'Meta Ads', 'Vercel', 'Firebase', 'Node.js', 'Next.js',
    'Shopify', 'WooCommerce', 'Zapier', 'Cal.com', 'Resend',
  ],

  painPoint: {
    headline: "You're leaving money on the table.",
    sub: 'Every day without the right systems is revenue your competitors are capturing instead.',
    pains: [
      { icon: Clock,      text: 'Hours wasted on manual tasks that AI could handle in seconds' },
      { icon: Users,      text: 'Leads going cold because there is no automated follow-up system' },
      { icon: TrendingUp, text: 'Website that looks like a business card, not a sales machine' },
      { icon: DollarSign, text: 'Missing payments because there is no 24/7 checkout flow' },
    ],
  },

  showcase: [
    {
      id: 'tomer-site',
      title: 'Tomer Friedman',
      type: 'Sales Website',
      desc: 'Full React sales machine. VSL, course marketplace, quiz funnel, 5 WhatsApp lead forms, and a floating CTA that never misses.',
      stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      url: 'https://tf-nutritionist.com',
      metric: '12',
      metricLabel: 'sections, all converting',
      accentHex: '#ff6b35',
      theme: 'energy' as const,
    },
    {
      id: 'tomer-app',
      title: 'TF Tracker',
      type: 'iOS & Android App',
      desc: 'AI-powered nutrition tracker — point your camera at food and it counts the macros automatically.',
      stack: ['Expo', 'Supabase', 'Gemini AI', 'TypeScript'],
      url: null,
      metric: 'AI',
      metricLabel: 'food photo recognition',
      accentHex: '#10b981',
      theme: 'health' as const,
    },
    {
      id: 'ron-ecom',
      title: "Ron's Store",
      type: 'E-Commerce Platform',
      desc: '5,000+ SKU catalog with advanced filtering, real-time search, Stripe checkout, and a full admin dashboard.',
      stack: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      url: null,
      metric: '5,000+',
      metricLabel: 'live products',
      accentHex: '#00b4ff',
      theme: 'ecom' as const,
    },
  ],

  capabilities: {
    label: 'What we build',
    headline: 'Every weapon in the arsenal.',
    sub: "We don't specialize in one thing. We build the whole system.",
    items: [
      'AI Agents & Custom Bots', 'Sales Funnels & Websites',
      'Mobile Apps (iOS + Android)', 'Email Automation Systems',
      'Lead Generation Machines', 'CRM Integration & Setup',
      'Instagram & Facebook Ads', 'WhatsApp Automation',
      'Quiz & Survey Funnels', 'AI Content Systems',
      'Payment & Subscription Systems', 'Data Dashboards & Analytics',
      'n8n / Make / Zapier Workflows', 'Supabase & Firebase Backend',
      'SEO & Organic Growth', 'Business Strategy & Roadmaps',
    ],
  },

  services: [
    {
      icon: Bot,
      color: 'signal' as const,
      title: 'AI Agents & Automation',
      desc: 'Custom AI agents that handle lead follow-up, customer support, content creation, and operations — 24/7, zero staff.',
      tags: ['n8n', 'Make', 'OpenAI', 'Claude'],
    },
    {
      icon: Globe,
      color: 'violet' as const,
      title: 'Sales Websites & Funnels',
      desc: 'React + Vite. Fast, modern, conversion-optimized. VSL sections, lead forms, popups, WhatsApp float — built to sell.',
      tags: ['React', 'Vite', 'Tailwind', 'Framer'],
    },
    {
      icon: Smartphone,
      color: 'pink' as const,
      title: 'Mobile Applications',
      desc: 'iOS and Android apps with AI built-in. Expo + Supabase backend. Subscriptions, payments, cloud sync.',
      tags: ['Expo', 'Supabase', 'TypeScript'],
    },
    {
      icon: ShoppingCart,
      color: 'green' as const,
      title: 'E-Commerce Platforms',
      desc: 'Custom storefronts handling thousands of SKUs. Advanced filtering, real-time search, Stripe checkout, admin dashboard.',
      tags: ['React', 'Stripe', 'PostgreSQL', 'Node.js'],
    },
    {
      icon: Mail,
      color: 'signal' as const,
      title: 'Email & Lead Systems',
      desc: 'Reactivate cold lists, build automated welcome sequences, segment leads, and fill your calendar with qualified calls.',
      tags: ['Sequences', 'Segmentation', 'CRM'],
    },
    {
      icon: BarChart3,
      color: 'violet' as const,
      title: 'Strategy & Growth',
      desc: 'Growth roadmaps, competitive analysis, ad campaigns (Instagram + Facebook), and data dashboards to track it all.',
      tags: ['Meta Ads', 'Analytics', 'SEO'],
    },
  ],

  caseStudies: {
    tomer: {
      label: 'Case Study — Nutrition & Health',
      client: 'Tomer Friedman',
      clientTitle: 'Nutritionist & Fitness Coach · 22 years experience',
      summary: "Tomer had a WordPress site that wasn't selling, 2,000 dormant leads nobody was activating, and tools nobody knew how to use. We built him a complete sales machine from scratch.",
      deliverables: [
        'Full React sales website — 12 sections, VSL, Courses, Quiz Funnel, 5 WhatsApp lead forms',
        'Mobile tracker app with AI food recognition (Gemini) — Expo + Supabase',
        'Interactive lead quiz that filters clients by program and connects to WhatsApp',
        '5-7 email reactivation sequence for 2,000 dormant leads with hot/warm/cold segmentation',
        'Sales battlecard + strategy for closing calls',
      ],
      metrics: [
        { num: '2,000', label: 'Leads reactivated',  sub: 'Dormant list to automation' },
        { num: '3',     label: 'Digital products',    sub: 'Site / App / Funnel' },
        { num: '12',    label: 'Website sections',    sub: 'Hero / VSL / Courses / FAQ' },
        { num: '5',     label: 'Lead capture forms',  sub: 'All wired to WhatsApp' },
      ],
      built: [
        { icon: Globe,        color: 'signal' as const, title: 'React Sales Website', desc: 'Hero, VSL, Courses, Pathfinder quiz, App Showcase, FAQ — React/Vite/Tailwind/Framer Motion.' },
        { icon: Smartphone,   color: 'violet' as const, title: 'AI Tracker App',      desc: 'Calorie and macro tracking. AI identifies food from photos. Expo + Supabase cloud backend.' },
        { icon: CheckCircle2, color: 'green'  as const, title: 'Lead Quiz Funnel',    desc: 'Interactive quiz that filters clients by program and fires a WhatsApp message automatically.' },
        { icon: Mail,         color: 'pink'   as const, title: 'Email Reactivation',  desc: '5-email sequence to revive 2,000 cold leads with hot / warm / cold segmentation.' },
      ],
      before: [
        'WordPress site that never converted',
        '2,000 leads sitting untouched in a spreadsheet',
        'No social proof or testimonials',
        'No app for clients',
        'Everything done manually',
        '3-10 leads per month',
      ],
      after: [
        'Fast React site converting 24/7',
        'Automated email system hitting entire list',
        'Social proof + measurable results',
        'AI-powered client tracking app',
        '5 forms auto-routing to WhatsApp',
        'Target: 80-100 qualified leads/month',
      ],
    },

    ron: {
      label: 'Case Study — E-Commerce',
      client: "Ron's Store",
      clientTitle: 'E-Commerce · 5,000+ Products',
      summary: "Ron needed a custom e-commerce platform capable of handling a massive product catalog. Off-the-shelf solutions couldn't keep up. We built a tailored storefront that scales.",
      deliverables: [
        'Custom React storefront with real-time search and advanced multi-filter system',
        'Full product catalog management — 5,000+ SKUs, variants, and inventory tracking',
        'Stripe Checkout + subscription support with webhook-powered order automation',
        'Admin dashboard: orders, inventory, analytics, and customer management',
        'Performance-optimized — sub-2s load times even with thousands of products',
      ],
      metrics: [
        { num: '5,000+', label: 'Live products',    sub: 'Full catalog management' },
        { num: '<2s',    label: 'Page load time',   sub: 'Even with 5K SKUs' },
        { num: '100%',   label: 'Custom-built',     sub: 'No Shopify limitations' },
        { num: '24/7',   label: 'Auto fulfillment', sub: 'Webhook-powered orders' },
      ],
      built: [
        { icon: ShoppingCart, color: 'signal' as const, title: 'Custom Storefront',  desc: 'React storefront with real-time search, advanced filtering by category, price, and attributes.' },
        { icon: Package,      color: 'violet' as const, title: 'Catalog Engine',      desc: '5,000+ SKUs with variants, inventory, bulk import/export, and category management.' },
        { icon: CreditCard,   color: 'green'  as const, title: 'Stripe Checkout',    desc: 'Full payment flow with webhook automation — order confirmed, inventory updated, customer notified.' },
        { icon: Search,       color: 'pink'   as const, title: 'Admin Dashboard',    desc: 'Full back-office: orders, customers, analytics, and inventory management in one place.' },
      ],
      before: [
        'Shopify limitations blocking growth',
        'Slow load times with large catalog',
        'No custom filtering capabilities',
        'Manual order management',
        'No real analytics or insights',
        'Paying high monthly SaaS fees',
      ],
      after: [
        'Custom storefront with zero limitations',
        'Sub-2s load even with 5,000+ products',
        'Advanced multi-attribute filtering',
        'Fully automated order fulfillment',
        'Real-time analytics dashboard',
        'One-time build cost — own your platform',
      ],
    },
  },

  testimonials: [
    {
      name: 'Tomer Friedman',
      role: 'Nutritionist & Coach · tf-nutritionist.com',
      initials: 'TF',
      color: 'signal' as const,
      text: 'Yehonatan built my website, app, and entire marketing system from scratch. Unlike other agencies, he actually understands business. He is not just a contractor — he is a partner who delivers real results. He built in weeks what would have taken agencies months.',
    },
    {
      name: 'Ron',
      role: 'E-Commerce Founder',
      initials: 'R',
      color: 'violet' as const,
      text: 'Yehonatan is the kind of person you meet once in your career. Deep technical knowledge combined with real business thinking. He took our massive product catalog and built a platform that actually performs. The ROI was clear from day one.',
    },
  ],

  process: [
    { num: '01', title: 'Discovery Call', desc: "Free call. We understand your business, what exists, what is missing, and what will bring results fastest." },
    { num: '02', title: 'The Plan',       desc: 'We define exactly what to build, in what order, and what gets you ROI first. No vague proposals.' },
    { num: '03', title: 'We Build',       desc: 'Code, systems, automations. Fully transparent — you see progress at every step. We move fast.' },
    { num: '04', title: 'Results',        desc: "Deploy, measure, optimize. We do not disappear after launch. We track the numbers with you." },
  ],

  cta: {
    headline: 'Ready to build a system that gets you clients?',
    sub: 'First conversation is free. No commitment. No long contracts.',
    primary: 'Get My Free AI Audit',
    secondary: 'Follow @signal.lab_',
  },

  leadMagnet: {
    // Popup + inline CTA
    badge: 'FREE · Limited Spots',
    headline: 'Get Your Free AI Growth Audit',
    subheadline: "Here's exactly what you get:",
    bullets: [
      'A breakdown of which AI systems would 10x your revenue',
      'The #1 bottleneck killing your growth right now',
      'A prioritized roadmap — what to build first and why',
      'Honest assessment: what we would build if this were our business',
    ],
    why: "Most agencies pitch you a package before they understand your business. We do the homework first — so you get a real plan, not a sales deck.",
    ctaLabel: 'Send Me the Free Audit',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    businessPlaceholder: 'Your website or business (optional)',
    disclaimer: 'Delivered to your inbox within 48h. Zero spam. Zero pitch.',
    successTitle: 'You are in.',
    successSub: 'Check your inbox in the next 48 hours. We will send you a personalized breakdown — built specifically for your business.',
    // Popup triggers
    scrollTrigger: 55,   // % scroll depth
    exitIntent: true,
    delayTrigger: 45,    // seconds on page
  },
};
