import React, { useEffect } from 'react'
import {
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiPackage,
  FiRefreshCw,
  FiShield,
  FiTerminal,
  FiTrendingUp,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import simpooPosTotal from '../assets/simpoo/simpoobusiness-pos-show-total.png'
import simpooDashboard from '../assets/simpoo/simpoobusiness-dashboard.png'
import simpooPos from '../assets/simpoo/simpoobusiness-pos.png'
import simpooLanding from '../assets/simpoo/simpoobusiness-landingpage.png'

export default function SimpooCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const projectImages = [
    { id: 3, src: simpooLanding,   alt: 'SimpooBusiness Marketing Landing Page' },

    { id: 1, src: simpooDashboard, alt: 'SimpooBusiness Dashboard — Business Worth, Sales Overview & Revenue' },
    { id: 2, src: simpooPos,       alt: 'SimpooBusiness POS Terminal — Product Grid, Cart & Sales Details' },
    { id: 4, src: simpooPosTotal,       alt: 'SimpooBusiness POS Terminal — Product Grid, Cart & Sales Details' },
  ]

  const technologies = [
    'React', 'Next.js 14', 'TypeScript', 'Electron Desktop',
    'Redux Toolkit', 'TanStack Query & Table', 'Tiptap Document Editor',
    'Client-Side PDF & Excel Engine', 'Tailwind CSS & Radix UI', 'Rollup SDK',
  ]

  return (
    <CasestudyLayout
      title="SimpooBusiness — Enterprise POS & Multi-Location Retail Management Platform"
      projectImages={projectImages}
      technologies={technologies}
      external="https://simpoobusiness.com"
    >
      {/* Executive Summary Callout Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-raised border border-border mb-10">
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
        
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">SimpooBusiness</strong> is an enterprise business management platform designed to help retail operators and multi-location SMEs digitize their daily operations. It centralizes inventory management, high-speed Point of Sale (POS), real-time financial reporting, multi-branch stock transfers, and e-commerce marketplace operations into a single cloud platform—while providing native offline-first continuity via an Electron desktop runtime.
        </p>
        <p className="text-secondary leading-relaxed">
          When I joined the project at product inception, my mandate went far beyond implementing UI layouts. I led the frontend engineering effort end-to-end: architecting the core state engine (<code className="text-accent">Redux Toolkit</code> + <code className="text-accent">TanStack Query</code>), designing resilient transaction pipelines, embedding rich document editing (<code className="text-accent">Tiptap</code>), building high-performance client-side document processing utilities (<code className="text-accent">jspdf</code>, <code className="text-accent">xlsx</code>, <code className="text-accent">react-barcode</code>), and publishing the standalone <code className="text-accent">@simpoobusiness/sdk</code> that lets third-party platforms embed live inventory widgets with a single script tag.
        </p>
      </section>

      {/* Dashboard Screenshot */}
      <div className="my-8 rounded-xl overflow-hidden border border-border/60">
        <img
          src={simpooDashboard}
          alt="SimpooBusiness Dashboard — Business Worth, Sales Overview and Financial Reporting"
          className="w-full object-cover"
        />
        <p className="text-xs text-muted text-center py-2.5 bg-raised border-t border-border/40">
          SimpooBusiness Dashboard — centralised Business Worth, Revenue tracking, and multi-location Sales Overview
        </p>
      </div>

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
          The core engineering challenge was architecting a fault-tolerant distributed system where high-throughput checkout workflows, multi-warehouse inventory ledgers, and offline desktop terminals remained deterministically synchronized.
        </p>
      </section>

      {/* 3. MY ROLE */}
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
              Active Cart State  → Redux Memory Store (0ms UI latency)<br />
              Local Persistence  → Serialized to sessionStorage + localStorage on every change<br />
              Cloud Auto-Save    → Background debounce worker syncs session to server
            </p>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            If a browser crashes or power flickers mid-transaction, reopening the terminal automatically restores the cashier's exact cart state—down to custom discounts and suspended items—without duplicate billing.
          </p>
        </div>

        {/* POS Screenshot */}
        <div className="rounded-xl overflow-hidden border border-border/60">
          <img
            src={simpooPos}
            alt="SimpooBusiness POS Terminal — product grid with category filters, cart panel, and sales details"
            className="w-full object-cover"
          />
          <p className="text-xs text-muted text-center py-2.5 bg-raised border-t border-border/40">
            Live POS Terminal — barcode/SKU search, category filters, suspended sales, and one-tap payment flow
          </p>
        </div>

        {/* Module 2: Inventory */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Enterprise Inventory & Multi-Location Stock Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Built the full inventory management UI covering SKUs, barcode variants, batch serials, and inter-branch stock transfers. My work was on the frontend layer: wiring API responses into local state, building the product tables and filter views using <code className="text-accent">TanStack Table</code>, and managing optimistic UI updates so stock counts reflect immediately after a sale without waiting for a server round-trip. The backend handled the actual ledger logic; my responsibility was ensuring the interface surfaced it accurately and responsively across all locations.
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

        {/* Module 4: Tiptap */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiDatabase className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">4. Tiptap Document Editor & Client-Side Export Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Retail enterprises require rich invoicing, customized quotes, and accounting report generation. I integrated <code className="text-accent">Tiptap</code> with custom image handlers, tables, and typography extensions allowing merchants to format proforma documents natively. Furthermore, I built our zero-server-load document export pipeline using <code className="text-accent">jspdf</code>, <code className="text-accent">jspdf-autotable</code>, <code className="text-accent">xlsx</code>, and <code className="text-accent">react-barcode</code>—enabling cashiers and accountants to generate printable barcode sheets, PDF invoices, and multi-thousand-row Excel financial audits directly in the browser.
          </p>
        </div>

        {/* Module 5: SDK */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-4">
          <div className="flex items-center gap-2.5">
            <FiLayers className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">
              5. Published Embeddable Inventory SDK (<code className="text-accent font-mono text-sm">@simpoobusiness/sdk</code>)
            </h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            I authored and published a standalone embeddable SDK that allows any third-party platform—HTML pages, PHP apps, Next.js apps, WordPress—to embed live SimpooBusiness inventory and sales widgets with a single script tag. No framework or npm install required on the consumer side.
          </p>

          {/* CDN Quick Start */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">CDN Quick Start</p>
            <div className="rounded-lg bg-bg border border-border/70 font-mono text-xs overflow-x-auto">
              <div className="px-4 py-2 border-b border-border/50 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="text-muted ml-2">index.html</span>
              </div>
              <pre className="p-4 text-secondary leading-relaxed overflow-x-auto whitespace-pre">{`<!-- 1. Include the SDK script -->
<script src="https://unpkg.com/@simpoobusiness/sdk/dist/simpoo-sdk.js"></script>

<!-- 2. Mount point -->
<div id="inventory-widget"></div>

<!-- 3. Init & render -->
<script>
  SimpooSDK.init({
    apiKey: "YOUR_API_KEY",
    env: "prod"   // 'dev' | 'prod' — defaults to 'dev'
  });

  const widget = await SimpooSDK.renderWidget("inventory", "#inventory-widget");

  // Clean up when done
  // widget.unmount();
</script>`}</pre>
            </div>
          </div>

          {/* API surface */}
          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-bg border border-border/70">
              <p className="text-accent font-mono font-semibold mb-1.5">SimpooSDK.init(config)</p>
              <p className="text-muted leading-relaxed">
                Initializes the SDK. Accepts <span className="text-fg font-medium">apiKey</span> (required) and <span className="text-fg font-medium">env</span> (<code className="text-accent">'dev' | 'prod'</code>, defaults to <code className="text-accent">'dev'</code>).
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-bg border border-border/70">
              <p className="text-accent font-mono font-semibold mb-1.5">SimpooSDK.renderWidget(name, target)</p>
              <p className="text-muted leading-relaxed">
                Renders a named widget (<code className="text-accent">"inventory"</code> or <code className="text-accent">"sales_report"</code>) into any CSS selector or DOM element. Returns <span className="text-fg font-medium">&#123; unmount() &#125;</span>.
              </p>
            </div>
          </div>

          <p className="text-secondary text-sm leading-relaxed">
            The SDK bundles React internally and injects its own styles — zero dependency footprint for the consumer. Third-party engineers can embed a full live inventory widget in under 10 lines of code with no CSS namespace collisions or state conflicts with the host application.
          </p>
        </div>
      </section>

      {/* 5. ENGINEERING CHALLENGES */}
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
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">&lt;100ms</p>
            <p className="text-xs text-muted mt-1">POS UI Checkout Latency</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">npm</p>
            <p className="text-xs text-muted mt-1">Published @simpoobusiness/sdk</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Today, SimpooBusiness serves as the daily operational backbone for 138 retail businesses across 185 store locations. The architectural foundation we established has allowed the platform to continuously absorb new capabilities—from e-commerce marketplace sync to the published <code className="text-accent">@simpoobusiness/sdk</code> enabling third-party integrations—without degrading runtime performance or stability.
        </p>
      </section>

      {/* 7. REFLECTION */}
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
