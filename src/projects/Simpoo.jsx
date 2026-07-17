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
  FiImage,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import simpooLogo from '../assets/simpoo/logo.svg'

/* Sleek Image Placeholder Slot for user to add architecture/UI screenshots later */
function ImagePlaceholder({ title, caption, height = 'h-64' }) {
  return (
    <div className="my-8 rounded-xl border border-dashed border-border/80 bg-raised/50 p-6 flex flex-col items-center justify-center text-center group hover:border-accent/50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-bg border border-border flex items-center justify-center text-muted group-hover:text-accent transition-colors mb-3">
        <FiImage size={22} />
      </div>
      <p className="text-fg font-medium text-sm mb-1">{title}</p>
      <p className="text-muted text-xs max-w-md">{caption}</p>
      <span className="mt-3 text-[11px] font-mono text-accent/80 bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
        Image Slot — Drop screenshot or architectural diagram here
      </span>
    </div>
  )
}

export default function SimpooCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [
    {
      id: 1,
      src: simpooLogo,
      alt: 'SimpooBusiness Platform Ecosystem',
    },
  ]

  const technologies = [
    'React',
    'Next.js 14',
    'TypeScript',
    'Electron Desktop',
    'Redux Toolkit',
    'TanStack Query & Table',
    'Tiptap Document Editor',
    'Client-Side PDF & Excel Engine',
    'Tailwind CSS & Radix UI',
    'Rollup SDK',
  ]

  return (
    <CasestudyLayout
      title="SimpooBusiness — Enterprise POS & Multi-Location Retail Management Platform"
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
          <p className="text-xs font-mono text-muted uppercase">Production Scale</p>
          <p className="text-fg font-semibold text-sm mt-1">138 Businesses • 185 Stores</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Focus</p>
          <p className="text-fg font-semibold text-sm mt-1">Offline-First POS & SDK</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Team Composition</p>
          <p className="text-fg font-semibold text-sm mt-1">4 Engineers + PM & Design</p>
        </div>
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">SimpooBusiness</strong> is an enterprise business management platform designed to help retail operators and multi-location SMEs digitize their daily operations. It centralizes inventory management, high-speed Point of Sale (POS), real-time financial reporting, multi-branch stock transfers, and e-commerce marketplace operations into a single cloud platform—while providing native offline-first continuity via an Electron desktop runtime.
        </p>
        <p className="text-secondary leading-relaxed">
          When I joined the project at product inception, my mandate went far beyond implementing UI layouts. I led the frontend engineering effort end-to-end: architecting the core state engine (`Redux Toolkit` + `TanStack Query`), designing resilient transaction pipelines, embedding rich document editing (`Tiptap`), and building high-performance client-side document processing utilities (`jspdf`, `xlsx`, `react-barcode`) to ship a mission-critical platform operating across 185 retail locations daily.
        </p>
      </section>

      {/* 2. THE BUSINESS PROBLEM */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Business Problem</h2>
        <p className="text-secondary leading-relaxed">
          High-volume retail operators frequently suffer from severe software fragmentation. A typical multi-location merchant runs disconnected legacy terminals for POS checkout, manual spreadsheets for warehouse stock tracking, and separate accounting packages for tax reporting.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" /> Operational Friction
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              When sales occur in one tool and stock lives in another, inventory counts drift immediately. Cashiers oversell out-of-stock items, and multi-store transfers turn into reconciliation nightmares.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Network Fragility
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Pure web applications grind to a halt when retail store internet connectivity drops. A downed connection during peak checkout hours causes lost revenue, angry queues, and untracked cash transactions.
            </p>
          </div>
        </div>
        <p className="text-secondary leading-relaxed">
          The core engineering challenge wasn't simply building isolated CRUD modules—it was architecting a fault-tolerant distributed system where high-throughput checkout workflows, multi-warehouse inventory ledgers, and offline desktop terminals remained deterministically synchronized.
        </p>
      </section>

      {/* Image Placeholder 1: Executive Dashboard / POS Screen */}
      <ImagePlaceholder
        title="SimpooBusiness High-Speed POS & Multi-Store Dashboard"
        caption="Screenshot showing sub-second cashier checkout interface alongside real-time multi-location inventory stock indicators."
      />

      {/* 3. MY ROLE & COLLABORATION */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & Engineering Leadership</h2>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Lead Frontend Engineer</strong>, I owned the frontend architecture from day zero through production scale. I led a dedicated team alongside another frontend engineer and two backend engineers, establishing technical rigor across code reviews, API contracts, and state management conventions.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Architectural Direction:</strong> Designed the core Redux Toolkit + TanStack Query caching layer, establishing clear boundaries between server truth and optimistic client UI state.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Complex Domain Modeling:</strong> Translated multi-tier tax regimes, proforma invoicing, split payments, and RBAC permission trees into predictable frontend models.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Mentorship & Enablement:</strong> Mentored junior frontend engineering talent, introduced component design systems, and authored internal technical guidelines.</span>
          </li>
        </ul>
      </section>

      {/* 4. WHAT I BUILT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">What I Built: Core Engine & Modules</h2>

        {/* Module 1: POS */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiTerminal className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">1. Fault-Tolerant Point of Sale (POS) Checkout Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Rather than treating checkout as a basic web form, I engineered a specialized POS engine designed for sub-second cashier input and real-world edge cases. Cashiers can search tens of thousands of SKUs instantaneously, apply custom price overrides, suspend/resume carts across shifts, and generate proforma invoices.
          </p>
          <div className="p-4 rounded-lg bg-bg border border-border/70 font-mono text-xs space-y-2">
            <p className="text-accent font-semibold">// 3-Tier Cart Resilience Strategy</p>
            <p className="text-muted">
              Active Cart State → Redux Memory Store (0ms UI latency)<br />
              Local Persistence → Serialized to IndexedDB / localStorage on change<br />
              Cloud Auto-Save  → Background debounce worker syncs session to server
            </p>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            If a browser crashes or power flickers mid-transaction, reopening the terminal automatically restores the cashier's exact cart state—down to custom discounts and suspended items—without duplicate billing.
          </p>
        </div>

        {/* Image Placeholder 2: POS Resilience Diagram */}
        <ImagePlaceholder
          title="POS State Persistence & Recovery Pipeline"
          caption="Architectural diagram illustrating how active carts sync between Redux memory, local storage, and cloud auto-save sessions."
        />

        {/* Module 2: Inventory */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Enterprise Inventory & Multi-Location Stock Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Built the central inventory module governing SKUs, barcode variants, batch serials, and stock transfers across 185 branch locations. Designed optimistic stock deduction hooks so that when a cashier completes a sale, local branch inventory updates instantaneously while background tasks reconcile multi-warehouse ledgers.
          </p>
        </div>

        {/* Module 3: Electron Desktop */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiMonitor className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Offline-First Electron Desktop Application</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            To support stores with unreliable ISP connectivity, I contributed to wrapping and adapting our web application into a hardened Electron desktop client.
          </p>
          <ul className="list-disc list-inside text-secondary text-sm space-y-1 pl-1">
            <li>Downloads and caches location-specific product catalogs locally during initial setup.</li>
            <li>Continues processing sales, updating local stock tables, and printing hardware thermal receipts completely offline.</li>
            <li>Executes an automated background reconciliation queue that synchronizes local ledger deltas to the cloud immediately upon internet re-establishment.</li>
          </ul>
        </div>

        {/* Module 4: Tiptap & Client-Side Document Export Engine */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiDatabase className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">4. Tiptap Document Editor & Client-Side Export Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Retail enterprises require rich invoicing, customized quotes, and accounting report generation. I integrated `Tiptap` with custom image handlers, tables, and typography extensions allowing merchants to format proforma documents natively. Furthermore, I built our zero-server-load document export pipeline using `jspdf`, `jspdf-autotable`, `xlsx`, and `react-barcode`—enabling cashiers and accountants to generate printable barcode sheets, PDF invoices, and multi-thousand-row Excel financial audits directly in the browser memory.
          </p>
        </div>

        {/* Module 5: Standalone Developer SDK */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiLayers className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">5. Reusable Embeddable Developer SDK</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Authored a standalone TypeScript SDK bundled via Rollup that allows enterprise partners to embed SimpooBusiness inventory and checkout flows directly inside third-party SaaS applications.
          </p>
          <div className="p-3.5 rounded-lg bg-bg border border-border/80 font-mono text-xs text-secondary overflow-x-auto">
            <code>
              import &#123; createSimpooClient &#125; from '@simpoo/sdk'<br /><br />
              const simpoo = createSimpooClient(&#123; apiKey: process.env.SIMPOO_KEY &#125;)<br />
              await simpoo.checkout.renderWidget(&#123; containerId: '#checkout-slot', storeId: 'loc_185' &#125;)
            </code>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Enforced strict CSS encapsulation and tree-shaken ESM exports so partner engineering teams could integrate core modules in under 10 lines of code with zero CSS or state collision.
          </p>
        </div>
      </section>

      {/* Image Placeholder 3: SDK / Architecture Diagram */}
      <ImagePlaceholder
        title="Embeddable SDK Architecture & Host Application Decoupling"
        caption="Diagram showing how third-party applications embed Simpoo SDK modules without CSS namespace or state collisions."
      />

      {/* 5. ENGINEERING CHALLENGES & KEY DECISIONS */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Key Technical Decisions & Challenges</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiRefreshCw className="text-accent" /> Optimistic UI vs. Server Validation
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              In a busy POS checkout line, waiting 600ms for round-trip server validation after every item scan degrades cashier throughput. I implemented optimistic cart updates and local price computations—validating cryptographic totals only at final payment commit while maintaining sub-100ms interface responsiveness.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiShield className="text-accent" /> Strict Multi-Tenant RBAC Security
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Multi-branch enterprises require granular permission boundaries. Cashiers cannot see store profit margins; store managers cannot transfer inventory across regions without audit authorization. I designed higher-order permission guards and token claims that enforce security at both view rendering and action dispatch levels.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RESULTS & IMPACT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Production Results & Business Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">138</p>
            <p className="text-xs text-muted mt-1">Active Enterprise Businesses</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">185</p>
            <p className="text-xs text-muted mt-1">Active Store Locations</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">&lt; 100ms</p>
            <p className="text-xs text-muted mt-1">POS UI Checkout Latency</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">100%</p>
            <p className="text-xs text-muted mt-1">Offline Continuity (Electron)</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Today, SimpooBusiness serves as the daily operational backbone for 138 retail businesses across 185 store locations. The architectural foundation we established has allowed the platform to continuously absorb new capabilities—from e-commerce marketplace sync to third-party SDK consumer integrations—without degrading runtime performance or stability.
        </p>
      </section>

      {/* 7. REFLECTION (WHAT I'D DO DIFFERENTLY TODAY) */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection: What I'd Do Differently Today
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          If I were architecting SimpooBusiness from day one today, I would invest earlier in <strong className="text-fg">stricter domain-driven module boundaries</strong> between Inventory, POS, and Marketplace.
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          Early on, shared utility state across modules accelerated initial feature delivery. However, as the product scaled to 185 locations with distinct offline desktop requirements, decoupling domain logic into truly independent packages (e.g., dedicated workspaces in a monorepo) would have made isolated testing, micro-frontend loading, and SDK extraction even faster. That discipline is now a core principle in how I approach large-scale engineering systems.
        </p>
      </section>
    </CasestudyLayout>
  )
}
