/**
 * src/data/projects.js
 *
 * Single source of truth for all project data.
 *
 * SCHEMA (all fields on every project; unused fields are null):
 *
 *   Core (shared by all consumers):
 *     id               — URL-safe slug, used as React key
 *     title            — Full display title (home card h3, archive fallback text)
 *     company          — Company / context
 *     industry         — Industry domain label (e.g. Telecommunications, Enterprise SaaS)
 *     role             — Engineering role label
 *     categories       — Array of category IDs matching FILTER_TABS for archive filtering
 *     desc             — Short description / summary of the system
 *     tech             — Full technology array
 *     engineeringFocus — Key engineering focus areas and architectural problems solved
 *     status           — 'live' | 'offline' | 'archived'
 *     displayStatus    — Human-readable status label (e.g. 'Production', 'Not live', 'Maintenance')
 *     year             — Shipped or major release year ('2026', '2025', etc.)
 *     casestudyRoute   — Internal React Router path (/projects/slug), or null
 *     externalUrl      — Live site URL, or null
 *     githubUrl        — GitHub URL, or null
 *     caseStudyStatus  — Case study indicator string (e.g. 'Case Study Available', 'Coming next', 'Coming Soon'), or null
 *     featured         — true → rendered with 'Featured' badge in archive index
 *     flagship         — true → special flagship badge styling where appropriate
 *     thumbnail        — Hero/thumbnail image asset for archive grid (or null for clean code/UI placeholder)
 *
 *   Home card fields (null on archive-only projects):
 *     image            — Full-size visual for Home page cards
 *     tagline          — 1-2 sentence home card subtitle
 *     problem          — THE PROBLEM block copy
 *     impact           — Impact / result line
 *
 *   Archive card fields:
 *     logo             — Brand mark SVG/PNG. null → title text fallback.
 */

import simpooLogo    from '../assets/simpoo/logo.svg'
import simpooLanding from '../assets/simpoo/simpoobusiness-landingpage.png'
import simpooMarketCart from '../assets/simpoo-market/Cart.svg'
import doraLanding   from '../assets/dora/dora-landing-page.png'
import doraCellHero  from '../assets/dora-cell/Hero Section.png'
import doraLogo      from '../assets/dora/logo.svg'
import reicoImg      from '../assets/reico/body.svg'
import reicoLogo     from '../assets/reicoLogo.svg'
import paymableLogo  from '../assets/paymable/logo.svg'
import feLogo        from '../assets/FE-logo.png'
import pmdLogo       from '../assets/pmdlogo.png'
import africurveLogo from '../assets/africurve.svg'

/* ─────────────────────────────────────────────────────────────────────────── */

const PROJECTS = [
  /* ── 2026 ── */
  {
    id: 'records',
    title: 'Records',
    company: 'NoemDek',
    industry: 'Business Intelligence',
    role: 'Senior Frontend Engineer',
    categories: ['business-intelligence', 'enterprise-saas'],
    desc: 'Enterprise research platform allowing users to discover companies, evaluate organizations and access structured business information.',
    tech: ['React', 'TypeScript', 'Enterprise SaaS', 'Data Visualization', 'Business Intelligence', 'REST APIs'],
    engineeringFocus: ['Enterprise SaaS', 'Data Visualization', 'Business Intelligence'],
    status: 'live',
    displayStatus: 'Production',
    year: '2026',
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Proprietary Product',
    featured: true,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    quickSpec: {
      responsibilities: [
        'Architected front-end data visualization interfaces for company evaluation and market research.',
        'Engineered high-throughput table search, filtering, and structured business reporting workflows.',
        'Designed modular UI components optimized for heavy data grids and executive analytics summaries.'
      ],
      constraints: ['Strict organizational data privacy, high query density, enterprise RBAC governance.'],
    },
    tagline: null, problem: null, impact: null,
  },

  /* ── 2025 ── */
  {
    id: 'dora',
    title: 'Dora Cell',
    company: 'Dora',
    industry: 'Telecommunications',
    role: 'Founding Engineer (Frontend Lead)',
    categories: ['telecommunications', 'developer-tooling'],
    desc: 'Browser-based VoIP platform providing reliable communication infrastructure for businesses.',
    tech: ['React', 'Next.js', 'SIP.js', 'WebRTC', 'Socket.io', 'Asterisk PBX', 'Client SDK'],
    engineeringFocus: ['WebRTC', 'SIP', 'Asterisk', 'SDK Development', 'Real-time Systems'],
    status: 'live',
    displayStatus: 'Production',
    year: '2025',
    casestudyRoute: '/projects/dora',
    externalUrl: 'https://usedora.com',
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: true,
    flagship: true,
    // Home card narrative fields
    image: doraCellHero,
    thumbnail: doraCellHero,
    tagline: 'Production browser telephony infrastructure powered by WebRTC peer negotiation, SIP signaling, and Asterisk PBX integration.',
    problem:
      'Off-the-shelf communication widgets broke down under enterprise logistics dispatch—dropping NAT sessions, introducing high audio latency, and providing zero programmatic control over multi-line SIP telephony states inside web browsers.',
    impact:
      'Architected and shipped the complete client telephony layer. Engineered deterministic audio device routing, live NAT traversal, and real-time SIP state synchronization across web clients and CRM integrations.',
    logo: doraLogo,
  },

  {
    id: 'konvoy',
    title: 'Konvoy',
    company: 'NoemDek',
    industry: 'Transportation',
    role: 'Senior Frontend Engineer',
    categories: ['logistics', 'enterprise-saas'],
    desc: 'Transport operations platform supporting drivers, sales teams and operations through role-based workflows.',
    tech: ['React', 'TypeScript', 'Role-based Systems', 'REST APIs', 'Fleet Management', 'Operations Workflows'],
    engineeringFocus: ['Fleet Management', 'Operations', 'Sales', 'Role-based Systems'],
    status: 'live',
    displayStatus: 'Production',
    year: '2025',
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Proprietary Product',
    featured: true,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    quickSpec: {
      responsibilities: [
        'Built multi-step operational dispatch and fleet tracking dashboards across driver, sales, and operations roles.',
        'Implemented stateful role-based access control (RBAC) ensuring clean separation of operational privileges.',
        'Engineered real-time fleet activity tracking, trip lifecycle management, and automated status alerts.'
      ],
      constraints: ['Multi-role synchronization, low-latency status updates, mobile-responsive driver dispatch views.'],
    },
    tagline: null, problem: null, impact: null,
  },

  {
    id: 'paystream',
    title: 'Paystream',
    company: 'NoemDek',
    industry: 'Payroll',
    role: 'Senior Frontend Engineer',
    categories: ['internal-systems', 'enterprise-saas'],
    desc: 'Internal payroll platform streamlining employee payment workflows and administrative operations.',
    tech: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Payroll Workflows', 'Internal Dashboard'],
    engineeringFocus: ['Payroll', 'Business Operations', 'Internal Systems'],
    status: 'live',
    displayStatus: 'Production',
    year: '2025',
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Proprietary Product',
    featured: true,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    quickSpec: {
      responsibilities: [
        'Architected internal employee payment workflows, salary calculations, and administrative approval chains.',
        'Engineered secure data submission forms with multi-tier validation for high-stakes financial operations.',
        'Created automated reporting and export utilities for accounting reconciliation and historical audit logs.'
      ],
      constraints: ['High-precision numerical accuracy, strict security compliance, multi-tier approval state machines.'],
    },
    tagline: null, problem: null, impact: null,
  },

  {
    id: 'petrodata',
    title: 'PetroData',
    company: 'NoemDek',
    industry: 'Enterprise',
    role: 'Senior Frontend Engineer',
    categories: ['enterprise-saas', 'internal-systems'],
    desc: 'Enterprise software maintained and modernized through continuous feature development and platform improvements.',
    tech: ['React', 'TypeScript', 'Legacy Architecture', 'Data Analytics', 'REST APIs'],
    engineeringFocus: ['Maintenance', 'Modernization', 'Legacy Systems'],
    status: 'live',
    displayStatus: 'Production',
    year: '2025',
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Proprietary Product',
    featured: true,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    quickSpec: {
      responsibilities: [
        'Led ongoing modernization and refactoring of legacy enterprise data analytics pipelines and UI layers.',
        'Improved rendering performance and data table responsiveness across mission-critical enterprise workflows.',
        'Introduced TypeScript type safety and component standardization without breaking existing client integrations.'
      ],
      constraints: ['Zero-downtime legacy migration, backward compatibility, complex enterprise data schemas.'],
    },
    tagline: null, problem: null, impact: null,
  },
    {
    id: 'simpoo-marketplace',
    title: 'Simpoo Marketplace',
    company: 'Jiffypay',
    industry: 'E-Commerce',
    role: 'Lead Frontend Engineer',
    categories: ['e-commerce', 'enterprise-saas'],
    desc: 'Marketplace platform connected directly to SimpooBusiness allowing businesses to synchronize products from inventory into an online storefront.',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Inventory Sync'],
    engineeringFocus: ['Marketplace', 'Inventory Sync', 'Commerce', 'Product Integrations'],
    status: 'live',
    displayStatus: 'Production',
    year: '2025',
    casestudyRoute: '/projects/simpoo-marketplace',
    externalUrl: 'https://simpoobusiness.com',
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: true,
    flagship: false,
    image: simpooMarketCart,
    thumbnail: simpooMarketCart,
    logo: simpooLogo,
    tagline: null, problem: null, impact: null,
  },

  /* ── 2024 ── */
  {
    id: 'simpoo',
    title: 'SimpooBusiness',
    company: 'Jiffypay',
    industry: 'Enterprise SaaS',
    role: 'Lead Frontend Engineer',
    categories: ['enterprise-saas'],
    desc: 'Enterprise inventory management, POS, reporting and multi-location platform.',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'REST APIs', 'Electron'],
    engineeringFocus: ['Inventory', 'POS', 'Offline Support', 'Electron', 'SDK', 'Architecture'],
    status: 'live',
    displayStatus: 'Production',
    year: '2024',
    casestudyRoute: '/projects/simpoo',
    externalUrl: 'https://simpoobusiness.com',
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: true,
    flagship: true,
    // Home card narrative fields
    image: simpooLanding,
    thumbnail: simpooLogo,
    tagline: 'Enterprise retail management suite featuring sub-second POS checkout, multi-warehouse inventory synchronization, and granular role-based access control.',
    problem:
      'Multi-location retail merchants were forced to run fragmented POS terminals and manual spreadsheets for warehouse stock—causing frequent inventory mismatches and missing permission boundaries across staff roles.',
    impact:
      'Delivered the production web platform end-to-end. Engineered optimistic UI updates for sub-second POS transactions, live multi-store inventory sync, and strict RBAC security supporting daily enterprise retail operations.',
    logo: simpooLogo,
  },



  {
    id: 'sdk',
    title: 'Embeddable Client SDKs & Developer Tooling',
    company: 'Enterprise Tooling & Open Source',
    industry: 'Developer Tooling',
    role: 'Platform & SDK Engineer',
    categories: ['developer-tooling'],
    desc: 'Standalone embeddable TypeScript SDKs and build tooling for VoIP telephony and checkout integration.',
    tech: ['TypeScript', 'Rollup', 'npm', 'Tailwind CSS Encapsulation', 'API Design'],
    engineeringFocus: ['SDK Architecture', 'Style Encapsulation', 'Tree-Shaking', 'Developer Experience'],
    status: 'live',
    displayStatus: 'Production',
    year: '2024',
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: 'https://github.com/Savics407',
    caseStudyStatus: 'Proprietary Product',
    featured: true,
    flagship: false,
    // Home card narrative fields
    image: null,
    thumbnail: null,
    tagline: null, problem: null, impact: null,
    logo: null,
    quickSpec: {
      responsibilities: [
        'Authored standalone embeddable TypeScript libraries bundled via Rollup for third-party host applications.',
        'Designed strict CSS encapsulation and shadow-DOM isolation preventing namespace collisions with host platforms.',
        'Enforced tree-shaken ESM and CommonJS exports with zero external UI dependencies.'
      ],
      constraints: ['Zero style leakage, sub-15KB gzipped footprint, cross-framework compatibility.'],
    },
  },

  {
    id: 'paymable',
    title: 'Paymable',
    company: 'Paymable',
    industry: 'Fintech / Payments',
    role: 'Frontend Engineer',
    categories: ['enterprise-saas', 'e-commerce'],
    desc: 'Virtual payment processing platform with modern checkout flows, secure merchant onboarding, and API integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    engineeringFocus: ['Payment Processing', 'Checkout Flows', 'Merchant Onboarding', 'API Integration'],
    status: 'live',
    displayStatus: 'Production',
    year: '2024',
    casestudyRoute: null,
    externalUrl: 'https://paymable.co',
    githubUrl: null,
    caseStudyStatus: 'Proprietary Product',
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: paymableLogo,
    quickSpec: {
      responsibilities: [
        'Engineered secure multi-step merchant onboarding and KYC verification flows.',
        'Implemented PCI-DSS compliant checkout tokenization components and virtual card management screens.',
        'Built real-time transaction history tables and financial settlement reporting charts.'
      ],
      constraints: ['Strict financial security compliance, zero data retention on client, high availability.'],
    },
    tagline: null, problem: null, impact: null,
  },

  {
    id: 'portfolio',
    title: 'My Portfolio & Engineering Directory',
    company: 'Personal Architecture',
    industry: 'Developer Portfolio',
    role: 'Senior Software Engineer',
    categories: ['personal-projects', 'developer-tooling'],
    desc: 'Central engineering index and interactive portfolio built with modular design systems, Framer Motion animations, and unified data architecture.',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Component Architecture'],
    engineeringFocus: ['Information Architecture', 'Design Systems', 'Micro-animations', 'Single Source of Truth'],
    status: 'live',
    displayStatus: 'Production',
    year: '2024',
    casestudyRoute: null,
    externalUrl: 'https://github.com/Savics407/My-Portfolio',
    githubUrl: 'https://github.com/Savics407/My-Portfolio',
    caseStudyStatus: null,
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    tagline: null, problem: null, impact: null,
  },

  /* ── 2023 ── */
  {
    id: 'dora-fleet',
    title: 'Dora Fleet',
    company: 'Dora',
    industry: 'Logistics',
    role: 'Founding Engineer (Frontend Lead)',
    categories: ['logistics', 'enterprise-saas'],
    desc: 'Fleet management platform helping logistics companies manage drivers, deliveries and operational workflows.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Socket.io', 'Real-time Tracking', 'Enterprise SaaS'],
    engineeringFocus: ['Fleet Operations', 'Driver Management', 'Business Workflows', 'Enterprise SaaS'],
    status: 'live',
    displayStatus: 'Production',
    year: '2023',
    casestudyRoute: '/projects/dora-fleet',
    externalUrl: 'https://usedora.com',
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: true,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: doraLogo,
    tagline: null, problem: null, impact: null,
  },

  /* ── 2022 ── */
  {
    id: 'hxafrica',
    title: 'HxAfrica Platform',
    company: 'HxAfrica',
    industry: 'Real Estate / Blockchain',
    role: 'Principal Frontend Engineer',
    categories: ['enterprise-saas', 'real-estate'],
    desc: 'Blockchain-powered real estate investment platform connecting investors with institutional property opportunities across Africa.',
    tech: ['React', 'Tailwind CSS', 'Figma', 'REST APIs', 'Web3 Architecture'],
    engineeringFocus: ['Asset Tokenization', 'KYC Onboarding', 'Portfolio Reporting', 'Web3 Integration'],
    status: 'live',
    displayStatus: 'Production',
    year: '2022',
    casestudyRoute: '/projects/hxafrica',
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: true,
    flagship: false,
    // Home card narrative fields
    image: reicoImg,
    thumbnail: reicoImg,
    tagline: 'Blockchain-powered real estate investment platform connecting investors with institutional property opportunities across Africa.',
    problem:
      'Tokenized asset ownership platforms often overwhelm investors with dense regulatory hurdles and confusing wallet onboarding flows that cause drop-offs.',
    impact:
      'Delivered the production web application from architectural design to deployment. Implemented seamless asset discovery, structured KYC onboarding flows, and real-time financial portfolio reporting.',
    logo: reicoLogo,
  },

  {
    id: 'africurve',
    title: 'Africurve',
    company: 'Africurve',
    industry: 'Agency Web Platform',
    role: 'WordPress Developer',
    categories: ['client-work', 'agency-web-platform'],
    desc: 'Custom WordPress web platform for a modelling agency featuring bespoke Elementor themes and performance-optimized animations.',
    tech: ['WordPress', 'Elementor', 'RevSlider', 'Custom PHP', 'CSS Animations'],
    engineeringFocus: ['Custom Theme Architecture', 'Animation Optimization', 'CMS Performance'],
    status: 'offline',
    displayStatus: 'Offline',
    year: '2022',
    casestudyRoute: '/projects/africurve',
    externalUrl: null,
    githubUrl: null,
    caseStudyStatus: 'Case Study Available',
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: africurveLogo,
    tagline: null, problem: null, impact: null,
  },

  {
    id: 'acimt',
    title: 'ACIMT',
    company: 'ACIMT',
    industry: 'Education',
    role: 'WordPress Developer',
    categories: [  'education'],
    desc: 'Official institutional web portal for the African College of Information and Medical Technology built with WordPress and Elementor.',
    tech: ['WordPress', 'Elementor', 'Custom CSS', 'Institutional CMS'],
    engineeringFocus: ['Institutional Portal Architecture', 'Content Governance', 'Accessibility'],
    status: 'live',
    displayStatus: 'Production',
    year: '2022',
    casestudyRoute: null,
    externalUrl: 'https://acimt.org/',
    githubUrl: null,
    caseStudyStatus: null,
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: null,
    tagline: null, problem: null, impact: null,
  },

  /* ── 2021 ── */
  {
    id: 'fe',
    title: 'Fabulous Edutainment',
    company: 'Fabulous Edutainment',
    industry: 'Talent Management',
    role: 'Frontend Developer',
    categories: ['client-work', 'performance-engineering'],
    desc: 'Talent management agency website engineered with vanilla JavaScript, HTML5, and CSS3 for maximum performance and sub-second page loads.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Performance Engineering'],
    engineeringFocus: ['Sub-second Page Loads', 'Zero-dependency Architecture', 'Responsive UI'],
    status: 'offline',
    displayStatus: 'Offline',
    year: '2021',
    casestudyRoute: null,
    externalUrl: 'https://fabulousedutainment.com/',
    githubUrl: 'https://github.com/Savics407/Fabulous-Edutainment',
    caseStudyStatus: null,
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: feLogo,
    tagline: null, problem: null, impact: null,
  },

  {
    id: 'pmdafrica',
    title: 'PmdAfrica',
    company: 'PmdAfrica',
    industry: 'Non-Profit / NGO',
    role: 'WordPress Developer',
    categories: ['client-work', 'non-profit'],
    desc: 'Non-governmental organization web platform featuring structured donation workflows and event management.',
    tech: ['WordPress', 'Elementor', 'Payment Gateways', 'CMS'],
    engineeringFocus: ['Donation Workflows', 'Event Management System', 'Security Architecture'],
    status: 'offline',
    displayStatus: 'Offline',
    year: '2021',
    casestudyRoute: null,
    externalUrl: 'http://povertymustdie.africa/',
    githubUrl: null,
    caseStudyStatus: null,
    featured: false,
    flagship: false,
    image: null,
    thumbnail: null,
    logo: pmdLogo,
    tagline: null, problem: null, impact: null,
  },
]

/* ─── Convenience exports ─────────────────────────────────────────────────── */

/** All 16 projects — used by the /projects archive page. Ordered from latest to oldest. */
export const ALL_PROJECTS = PROJECTS

/** The featured projects with full narrative copy — used by the home page featured section. */
export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured && p.tagline && p.problem && p.impact)

export default PROJECTS
