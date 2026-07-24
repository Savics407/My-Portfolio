import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiRefreshCw,
  FiShield,
  FiTerminal,
  FiTrendingUp,
  FiShoppingCart,
  FiTag,
  FiDollarSign,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import simpooLogo from '../assets/simpoo/logo.svg'
import cartImg from '../assets/simpoo-market/Cart.svg'
import checkoutImg from '../assets/simpoo-market/checkout.svg'
import darkNavBarImg from '../assets/simpoo-market/Dark Nav Bar.svg'

export default function SimpooMarketCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [
    {
      id: 1,
      src: darkNavBarImg,
      alt: 'Simpoo Marketplace — Navigation and Storefront Header Layout',
    },
    {
      id: 2,
      src: cartImg,
      alt: 'Simpoo Marketplace — Split Cart Management',
    },
    {
      id: 3,
      src: checkoutImg,
      alt: 'Simpoo Marketplace — Secure Checkout Flow',
    },
  ]

  const technologies = [
    'Next.js 14',
    'TypeScript',
    'Redux Toolkit',
    'TanStack Query & Table',
    'Zod & React Hook Form',
    'Tailwind CSS & Radix UI',
    'Swiper & Lightbox',
    'Multi-Vendor Checkout Engine',
  ]

  return (
    <CasestudyLayout
      title="Simpoo Marketplace — Enterprise Multi-Vendor Retail & Digital Commerce Ecosystem"
      projectImages={projectImages}
      technologies={technologies}
      external="https://simpoobusiness.com"
    >
      {/* Executive Summary Callout Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-raised border border-border mb-10">
        <div>
          <p className="text-xs font-mono text-muted uppercase">Role</p>
          <p className="text-fg font-semibold text-sm mt-1">Lead Frontend Engineer</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Architecture</p>
          <p className="text-fg font-semibold text-sm mt-1">Multi-Vendor E-Commerce Engine</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Capabilities</p>
          <p className="text-fg font-semibold text-sm mt-1">Split Carts · Live Inventory Sync</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Ecosystem Sync</p>
          <p className="text-fg font-semibold text-sm mt-1">SimpooBusiness POS & Store Ledgers</p>
        </div>
      </div>

      {/* 1. OVERVIEW & SOLUTION */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview & Solution</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">Simpoo Marketplace</strong> is a high-performance digital commerce platform built to extend our SimpooBusiness retail ecosystem directly into consumer e-commerce. It empowers multi-location brick-and-mortar retailers and independent merchants to sell their physical inventories online across a central multi-vendor marketplace, with every order, discount, and stock count synchronized in real time with their physical in-store POS terminals.
        </p>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Lead Frontend Engineer</strong>, I architected and built the marketplace frontend using Next.js 14 and TypeScript. I designed our split-cart checkout engine capable of routing mixed customer carts to individual store inventory ledgers, implemented strict schema validation using `Zod` and `React Hook Form`, and built rich media product galleries using `Swiper` and `Lightbox` with zero-shift layout performance.
        </p>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Problem: Multi-Vendor Inventory & Cart Complexity</h2>
        <p className="text-secondary leading-relaxed">
          Building a standard single-store e-commerce site is straightforward, but operating a multi-vendor marketplace connected to real-time physical store inventory introduces immense synchronization challenges.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" /> Multi-Merchant Split Carts
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              When a consumer adds items from three different retail merchants into a single shopping cart, the system must split order fulfillment, compute localized delivery fees per vendor, and handle partial payment authorizations without confusing the buyer.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Race Conditions with Physical POS
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              If an online customer adds the last remaining unit of an item to their cart while a physical in-store cashier scans that same barcode at the POS counter, the marketplace must instantaneously detect stock reservation conflicts before payment processing.
            </p>
          </div>
        </div>
        <p className="text-secondary leading-relaxed">
          We needed a client architecture that provided instantaneous search filtering, resilient multi-vendor cart state management, and real-time inventory reservation handshakes to guarantee order fulfillment reliability.
        </p>
      </section>

      {/* Marketplace UI Screenshot */}
      <div className="my-8 rounded-xl overflow-hidden border border-border/60">
        <img
          src={cartImg}
          alt="Simpoo Marketplace — Split Cart Checkout UI"
          className="w-full object-cover"
        />
        <p className="text-xs text-muted text-center py-2.5 bg-raised border-t border-border/40">
          Simpoo Marketplace — Multi-vendor cart management splitting orders across merchant locations
        </p>
      </div>

      {/* 3. MY ROLE & ENGINEERING LEADERSHIP */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & Engineering Leadership</h2>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Lead Frontend Engineer</strong>, I owned the marketplace codebase and drove technical execution alongside our backend and product teams.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Multi-Vendor Cart Architecture:</strong> Built the Redux Toolkit cart engine (`@reduxjs/toolkit` v2) that partitions items by vendor store ID, computing vendor-specific shipping rates and sub-order structures.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Type-Safe Form & Checkout Pipelines:</strong> Integrated `Zod` schema validation with `React Hook Form` (`@hookform/resolvers`), guaranteeing zero malformed order payloads during high-traffic checkout flows.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Optimized Media & UI Performance:</strong> Designed fluid product galleries using `Swiper` and `yet-another-react-lightbox`, combined with Next.js image optimization to achieve top Core Web Vitals across mobile devices.</span>
          </li>
        </ul>
      </section>

      {/* 4. THE SOLUTION: CORE MODULES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Solution: Core Modules I Built</h2>

        {/* Module 1: Split Cart Checkout Engine */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiShoppingCart className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">1. Multi-Merchant Split Cart & Order Fulfillment Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            I engineered the central cart state machine capable of grouping heterogeneous product selections into structured sub-orders. During checkout, the client dynamically validates stock availability against each individual merchant's SimpooBusiness warehouse ledger.
          </p>
          <div className="p-4 rounded-lg bg-bg border border-border/70 font-mono text-xs space-y-2">
            <p className="text-accent font-semibold">// Cart Partitioning & Reservation Protocol</p>
            <p className="text-muted">
              Cart Mutation Action → Redux Store splits items by `store_id`<br />
              Checkout Initialization → TanStack Query validates live stock availability across branches<br />
              Payment Authorization → Atomic multi-order split dispatch with rollback safety
            </p>
          </div>
        </div>

        {/* Module 2: Type-Safe Checkout Forms */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiShield className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Bulletproof Zod + React Hook Form Checkout Validation</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            E-commerce conversion rates depend heavily on frictionless, error-free checkout experiences. By coupling `Zod` runtime validation schemas directly with `React Hook Form`, we eliminated UI re-render delays while enforcing strict validation across multi-step delivery addresses, payment gateway selection, and coupon application workflows.
          </p>
        </div>

        {/* Module 3: Vendor Storefront Management */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiTag className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Vendor Storefronts & High-Speed Product Discovery</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Using `TanStack Query` and `TanStack Table`, I built the vendor storefront views and high-throughput product discovery filtering. Shoppers can filter across thousands of SKUs by category, price tier, and merchant location with instant client-side pagination and cached background revalidation.
          </p>
        </div>
      </section>

      {/* 5. ENGINEERING CHALLENGES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Engineering Challenges</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiCpu className="text-accent" /> TanStack Query vs. Static Caching for Inventory
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Because merchants sell from physical shelves concurrently with online sales, aggressive static page caching (`force-static`) caused out-of-stock items to appear available. I configured fine-grained `TanStack Query` stale-time policies and optimistic background revalidation (`staleTime: 15000`), ensuring shoppers always see accurate stock counts without sacrificing page load speed.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiRefreshCw className="text-accent" /> Seamless POS & Marketplace Price Parity
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              When a store manager updates an item price or creates a promotional flash sale on their physical SimpooBusiness POS, the marketplace product page must reflect that price delta immediately. We engineered shared data hooks that consume real-time price updates across both runtime environments.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RESULTS & BUSINESS IMPACT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Results & Business Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">100%</p>
            <p className="text-xs text-muted mt-1">POS & Marketplace Inventory Sync</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Sub-100ms</p>
            <p className="text-xs text-muted mt-1">Product Filter & Cart Split Speed</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">0</p>
            <p className="text-xs text-muted mt-1">Stock Reservation Collisions</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Multi-Store</p>
            <p className="text-xs text-muted mt-1">Unified E-Commerce Architecture</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Simpoo Marketplace successfully bridged the gap between offline retail store management and online digital commerce. By sharing data architecture across SimpooBusiness and Simpoo Marketplace, we enabled our retail partners to scale revenue streams without managing duplicate inventory databases.
        </p>
      </section>

      {/* 7. REFLECTION */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection & Continuous Scaling
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          Architecting Simpoo Marketplace demonstrated the immense value of <strong className="text-fg">strict type contracts and centralized cart state modeling</strong> when dealing with multi-vendor systems.
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          As our ecosystem evolves, we are introducing automated vendor payout reconciliation workflows and AI-assisted product search recommendations to further elevate the shopping experience across all merchant storefronts.
        </p>
      </section>
    </CasestudyLayout>
  )
}
