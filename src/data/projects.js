/**
 * src/data/projects.js
 *
 * Single source of truth for all project data.
 *
 * WHY THIS FILE EXISTS:
 * Project data previously lived in two separate arrays — one in Home.jsx
 * (rich narrative fields for featured cards) and one in projects/index.jsx
 * (compact fields for the archive grid). Routing links, role titles, and
 * tech stacks lived in both and could drift independently.
 *
 * This file unifies both. Consumers filter and render only the fields they need:
 *   - Home.jsx        → imports FEATURED_PROJECTS, uses tagline/problem/impact/image
 *   - projects/index  → imports ALL_PROJECTS, uses logo/desc
 *
 * SCHEMA (all fields on every project; unused fields are null):
 *
 *   Core (shared by all consumers):
 *     id             — URL-safe slug, used as React key
 *     title          — Full display title (home card h3, archive fallback text)
 *     company        — Company / context
 *     role           — Engineering role label
 *     tech           — Full technology array; consumers slice as needed
 *     casestudyRoute — Internal React Router path (/projects/slug), or null
 *     externalUrl    — Live site URL, or null
 *     githubUrl      — GitHub URL, or null
 *     status         — 'live' | 'archived' (archive badge)
 *     featured       — true → rendered in home page featured section
 *
 *   Home card fields (null on archive-only projects):
 *     image          — Full-size visual (screenshot or illustration)
 *     tagline        — 1-2 sentence home card subtitle
 *     problem        — THE PROBLEM block copy
 *     impact         — Impact / result line
 *
 *   Archive card fields:
 *     logo           — Brand mark SVG/PNG (white-inverted). null → title text fallback.
 *     desc           — One-sentence archive card description
 */

import simpooLogo   from '../assets/simpoo/logo.svg'
import doraImg      from '../assets/dora/dora.svg'
import doraLogo     from '../assets/dora/logo.svg'
import reicoImg     from '../assets/reico/body.svg'
import reicoLogo    from '../assets/reicoLogo.svg'
import paymableLogo from '../assets/paymable/logo.svg'
import feLogo       from '../assets/FE-logo.png'
import pmdLogo      from '../assets/pmdlogo.png'

/* ─────────────────────────────────────────────────────────────────────────── */

const PROJECTS = [

  /* ── Featured ── shown on home page ────────────────────────────────────── */

  {
    id: 'dora',
    title: 'Dora VoIP System',
    company: 'Dora',
    role: 'Lead Telephony & Frontend Engineer',
    tech: ['React', 'Next.js', 'Electron', 'SIP.js', 'WebRTC', 'Socket.io', 'Janus Media Server', 'Asterisk PBX', 'Client SDK'],
    casestudyRoute: null,
    externalUrl: 'https://usedora.com',
    githubUrl: null,
    status: 'live',
    featured: true,
    flagship: true,
    // Home card
    image: doraImg,
    tagline: 'Production browser telephony infrastructure powered by WebRTC peer negotiation, SIP signaling, Asterisk/Janus PBX integration, and an Electron desktop app.',
    problem:
      'Off-the-shelf communication widgets broke down under enterprise logistics dispatch—dropping NAT sessions, introducing high audio latency, and providing zero programmatic control over multi-line SIP telephony states inside web browsers.',
    impact:
      'Architected and shipped the complete client telephony layer. Engineered deterministic audio device routing, live NAT traversal, and real-time SIP state synchronization across web and Electron desktop clients.',
    // Archive card
    logo: doraLogo,
    desc: 'Production browser telephony infrastructure with WebRTC, SIP signaling, Asterisk/Janus PBX, and Electron desktop app.',
  },

  {
    id: 'simpoo',
    title: 'Simpoo Business Platform',
    company: 'Jiffypay',
    role: 'Lead Frontend Engineer',
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS', 'REST APIs'],
    casestudyRoute: null,
    externalUrl: 'https://simpoobusiness.com',
    githubUrl: null,
    status: 'live',
    featured: true,
    // Home card
    image: simpooLogo,
    tagline: 'Enterprise retail management suite featuring sub-second POS checkout, multi-warehouse inventory synchronization, and granular role-based access control.',
    problem:
      'Multi-location retail merchants were forced to run fragmented POS terminals and manual spreadsheets for warehouse stock—causing frequent inventory mismatches and missing permission boundaries across staff roles.',
    impact:
      'Delivered the production web platform end-to-end. Engineered optimistic UI updates for sub-second POS transactions, live multi-store inventory sync, and strict RBAC security supporting daily enterprise retail operations.',
    // Archive card
    logo: simpooLogo,
    desc: 'Enterprise retail management suite with sub-second POS checkout, multi-warehouse inventory, and RBAC.',
  },

  {
    id: 'sdk',
    title: 'Embeddable Client SDKs & Developer Tooling',
    company: 'Enterprise Tooling & Open Source',
    role: 'Platform & SDK Engineer',
    tech: ['TypeScript', 'Rollup', 'npm', 'Tailwind CSS Encapsulation', 'API Design'],
    casestudyRoute: null,
    externalUrl: null,
    githubUrl: 'https://github.com/Savics407',
    status: 'live',
    featured: true,
    // Home card
    image: null,
    tagline: 'Standalone embeddable TypeScript SDKs enabling partner engineering teams to integrate telephony and POS checkout workflows in under 10 lines of code.',
    problem:
      'Partner engineering teams integrating communication and checkout modules repeatedly ran into global CSS namespace collisions, fragile initialization scripts, and complex state synchronization across host applications.',
    impact:
      'Authored and published reusable TypeScript client SDKs bundled with Rollup—featuring automated style encapsulation, tree-shaken ESM/CJS exports, and zero-collision integration across distributed host applications.',
    // Archive card
    logo: null,
    desc: 'Standalone embeddable TypeScript SDKs and build tooling for VoIP telephony and checkout integration.',
  },

  {
    id: 'hxafrica',
    title: 'HxAfrica Platform',
    company: 'HxAfrica',
    role: 'Frontend Engineer',
    tech: ['React', 'Tailwind CSS', 'Figma', 'REST APIs'],
    casestudyRoute: '/projects/hxafrica',
    externalUrl: null,
    githubUrl: null,
    status: 'live',
    featured: true,
    // Home card
    image: reicoImg,
    tagline: 'Blockchain-powered real estate investment platform connecting investors with institutional property opportunities across Africa.',
    problem:
      'Tokenized asset ownership platforms often overwhelm investors with dense regulatory hurdles and confusing wallet onboarding flows that cause drop-offs.',
    impact:
      'Delivered the production web application from architectural design to deployment. Implemented seamless asset discovery, structured KYC onboarding flows, and real-time financial portfolio reporting.',
    // Archive card
    logo: reicoLogo,
    desc: 'Blockchain-powered real estate investment platform connecting investors with property opportunities.',
  },

  /* ── Archive only ── not shown on home page ─────────────────────────────── */

  {
    id: 'paymable',
    title: 'Paymable',
    company: 'Paymable',
    role: 'Frontend Engineer',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    casestudyRoute: null,
    externalUrl: 'https://paymable.co',
    githubUrl: null,
    status: 'live',
    featured: false,
    image: null,
    tagline: null, problem: null, impact: null,
    logo: paymableLogo,
    desc: 'Virtual payment processing platform with modern checkout flows, secure merchant onboarding, and API integration.',
  },

  {
    id: 'africurve',
    title: 'Africurve',
    company: 'Africurve',
    role: 'WordPress Developer',
    tech: ['WordPress', 'Elementor', 'RevSlider'],
    casestudyRoute: '/projects/africurve',
    externalUrl: null,
    githubUrl: null,
    status: 'live',
    featured: false,
    image: null,
    tagline: null, problem: null, impact: null,
    logo: null,
    desc: 'Custom WordPress web platform for a modelling agency featuring bespoke Elementor themes and performance-optimized animations.',
  },

  {
    id: 'fe',
    title: 'Fabulous Edutainment',
    company: 'Fabulous Edutainment',
    role: 'Frontend Developer',
    tech: ['JavaScript', 'HTML', 'CSS3'],
    casestudyRoute: null,
    externalUrl: 'https://fabulousedutainment.com/',
    githubUrl: 'https://github.com/Savics407/Fabulous-Edutainment',
    status: 'live',
    featured: false,
    image: null,
    tagline: null, problem: null, impact: null,
    logo: feLogo,
    desc: 'Talent management agency website engineered with vanilla JavaScript, HTML5, and CSS3 for maximum performance and sub-second page loads.',
  },

  {
    id: 'acimt',
    title: 'ACIMT',
    company: 'ACIMT',
    role: 'WordPress Developer',
    tech: ['WordPress', 'Elementor'],
    casestudyRoute: null,
    externalUrl: 'https://acimt.org/',
    githubUrl: null,
    status: 'live',
    featured: false,
    image: null,
    tagline: null, problem: null, impact: null,
    logo: null,
    desc: 'Official institutional web portal for the African College of Information and Medical Technology built with WordPress and Elementor.',
  },

  {
    id: 'pmdafrica',
    title: 'PmdAfrica',
    company: 'PmdAfrica',
    role: 'WordPress Developer',
    tech: ['WordPress', 'Elementor'],
    casestudyRoute: null,
    externalUrl: 'http://povertymustdie.africa/',
    githubUrl: null,
    status: 'live',
    featured: false,
    image: null,
    tagline: null, problem: null, impact: null,
    logo: pmdLogo,
    desc: 'Non-governmental organization web platform featuring structured donation workflows and event management.',
  },
]

/* ─── Convenience exports ─────────────────────────────────────────────────── */

/** All 9 projects — used by the /projects archive page. */
export const ALL_PROJECTS = PROJECTS

/** The 4 featured projects — used by the home page featured section. */
export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured)

export default PROJECTS
