import React, { useEffect } from 'react'
import {
  FiCheckCircle,
  FiRefreshCw,
  FiShield,
  FiTrendingUp,
  FiPhoneCall,
  FiPackage,
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiNavigation,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import doraLanding from '../assets/dora/dora-landing-page.png'
import doraLogo from '../assets/dora/logo.svg'

export default function DoraFleetCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const projectImages = [
    { id: 1, src: doraLanding, alt: 'Dora Fleet — Modern Day Delivery Management Platform' },
  ]

  const technologies = [
    'Next.js 14',
    'TypeScript',
    'Redux Toolkit',
    '@dora-cell/sdk-react',
    'React-Leaflet & Geoman',
    'Socket.io & Pusher',
    'Recharts Analytics',
    'Bugsnag & Mixpanel',
  ]

  return (
    <CasestudyLayout
      title="Dora Fleet — Order & Delivery Management Infrastructure"
      projectImages={projectImages}
      technologies={technologies}
      external="https://fleet.usedora.com"
    >
      {/* Executive Summary Callout Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-raised border border-border mb-10">
        <div>
          <p className="text-xs font-mono text-muted uppercase">Role</p>
          <p className="text-fg font-semibold text-sm mt-1">Founding Engineer (Frontend Lead)</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Product</p>
          <p className="text-fg font-semibold text-sm mt-1">Delivery Management SaaS</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Workflow</p>
          <p className="text-fg font-semibold text-sm mt-1">Order → Assign → Track → Notify</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Target Users</p>
          <p className="text-fg font-semibold text-sm mt-1">Logistics, Restaurants, E-commerce</p>
        </div>
      </div>

      {/* Platform Screenshot */}
      <div className="my-8 rounded-xl overflow-hidden border border-border/60">
        <img
          src={doraLanding}
          alt="Dora Fleet — delivery management platform dashboard showing order management, rider assignment, and tracking"
          className="w-full object-cover"
        />
        <p className="text-xs text-muted text-center py-2.5 bg-raised border-t border-border/40">
          Dora Fleet — replace WhatsApp, Excel, and manual processes with a single delivery ops system
        </p>
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">Dora Fleet</strong> is an all-in-one delivery management platform that replaces the WhatsApp group chats, Excel spreadsheets, and fragmented manual processes that most local logistics businesses run on. It gives any business that does order delivery—restaurants, pharmacies, logistics companies, e-commerce stores, manufacturers—a single system to plan, create, assign, track, and notify across their entire fulfilment workflow.
        </p>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I owned the complete frontend architecture across the admin dashboard, rider-facing interfaces, and the customer notification layer. The stack ran on Next.js 14 and TypeScript with real-time event sync via <code className="text-accent">Socket.io</code> and <code className="text-accent">Pusher</code>, and embedded live telephony powered by our own <code className="text-accent">@dora-cell/sdk-react</code>.
        </p>

        {/* Target industries pill row */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['Logistics Companies', 'Restaurants', 'Pharmaceuticals', 'E-Commerce', 'Manufacturers'].map(label => (
            <span key={label} className="text-xs font-mono px-3 py-1 rounded-full bg-raised border border-border/80 text-secondary">{label}</span>
          ))}
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Problem: Delivery Operations Running on Manual Tools</h2>
        <p className="text-secondary leading-relaxed">
          Most small-to-medium delivery businesses in emerging markets coordinate through a patchwork of WhatsApp messages, phone calls, and spreadsheets. There's no central record of which rider is handling which order, no customer notification when a delivery is dispatched, and no way for managers to see the real state of their fulfilment pipeline without calling people individually.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" /> No Single Source of Truth
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Orders placed across multiple channels (phone calls, walk-ins, websites) live in different places. Dispatchers have no unified view—leading to missed deliveries, double-assignments, and confusion when customers call to ask where their order is.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Silent Fulfilment — Zero Customer Visibility
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Without automated customer notifications, every status update requires a manual phone call or WhatsApp message. This burns dispatcher time and leaves customers anxious about their delivery status.
            </p>
          </div>
        </div>
        <p className="text-secondary leading-relaxed">
          Dora Fleet's goal was to give these businesses a clean, fast, all-in-one system that handles everything from the moment an order is created to the moment it lands at the customer's door.
        </p>
      </section>

      {/* 3. MY ROLE */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & What I Owned</h2>
        <p className="text-secondary leading-relaxed">
          As the lead on the frontend, I designed and built the entire client-side product surface — the admin dispatch dashboard, rider management views, customer notification configuration, analytics, and the real-time event layer. In addition to technical execution, I led and mentored other developers on the team, driving clean architecture standards and regular pair programming sessions.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Order Management Dashboard:</strong> Built the core order pipeline UI where dispatchers create, view, filter, and manage all delivery requests in one place — replacing the WhatsApp-and-Excel workflow entirely.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Rider Assignment & Tracking Interface:</strong> Designed the rider management views and live map overlay using <code className="text-accent">react-leaflet</code>, letting dispatchers assign deliveries to available riders and monitor fulfilment progress in real time.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Customer Notification Layer:</strong> Implemented the configurable SMS and email status notification system — dispatchers set rules and Dora automatically sends updates (order confirmed, rider dispatched, delivery arrived) without manual intervention.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Embedded VoIP Telephony:</strong> Integrated <code className="text-accent">@dora-cell/sdk-react</code> directly into rider profile cards, giving dispatchers one-click WebRTC calling without leaving the ops dashboard.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Real-Time State Sync:</strong> Built the Redux Toolkit state layer backed by <code className="text-accent">Socket.io</code> and <code className="text-accent">Laravel Echo</code>, so delivery status changes, rider location updates, and new orders surface across the dashboard instantly.</span>
          </li>
        </ul>
      </section>

      {/* 4. CORE MODULES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Core Product Modules I Built</h2>

        {/* Module 1 */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">1. Order & Delivery Management Pipeline</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            The heart of the platform. I built the full order lifecycle UI — creation forms that capture delivery details, recipient info, and pickup addresses; a sortable/filterable order table showing status across the pipeline (pending → assigned → in-transit → delivered); and an individual order detail view where dispatchers can see full history, update status, and re-assign riders.
          </p>
          <div className="p-4 rounded-lg bg-bg border border-border/70 font-mono text-xs space-y-1.5">
            <p className="text-accent font-semibold">// Delivery Lifecycle States</p>
            <p className="text-muted">Pending → Assigned → Picked Up → In Transit → Delivered / Failed</p>
            <p className="text-muted">Each transition triggers a real-time dashboard update + optional customer SMS/email notification</p>
          </div>
        </div>

        {/* Module 2 */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiUsers className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Rider Management & Live Assignment Interface</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Built the rider management section covering onboarding, availability status, and active delivery count. Dispatchers see a live list of available vs. busy riders and can assign orders with one click. For businesses that need geographic context, I integrated a live map using <code className="text-accent">react-leaflet</code> with <code className="text-accent">@geoman-io/leaflet-geoman-free</code> for custom delivery zone drawing.
          </p>
        </div>

        {/* Module 3 */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiMessageSquare className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Customer Communication & Notification Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            One of Dora's key differentiators. I built the notification configuration UI where businesses define which SMS and email messages fire at each stage of the delivery journey. Once configured, customers automatically receive status updates — no dispatcher manually calling or messaging customers. This alone eliminates a significant chunk of inbound "where's my order?" support calls.
          </p>
        </div>

        {/* Module 4 */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPhoneCall className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">4. Embedded In-App Calling (<code className="text-accent font-mono text-sm">@dora-cell/sdk-react</code>)</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Dispatchers frequently need to call a rider when an order is at risk. Rather than making them leave the dashboard to dial a number, I embedded our <code className="text-accent">@dora-cell/sdk-react</code> directly into rider cards. One click establishes a WebRTC call through our Asterisk media servers — the dispatcher never context-switches out of the ops interface.
          </p>
        </div>

        {/* Module 5 */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiBarChart2 className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">5. Analytics & Business Reporting</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Built the analytics dashboard using <code className="text-accent">Recharts</code>, surfacing delivery completion rates, average fulfilment times, rider performance metrics, and revenue trends. Business owners get a clear picture of how their delivery operation is performing without digging through spreadsheets.
          </p>
        </div>
      </section>

      {/* 5. TECHNICAL DECISIONS */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Key Technical Decisions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiRefreshCw className="text-accent" /> Real-Time Without Polling
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Delivery status is time-sensitive. A rider marking an order delivered needs to reflect on the admin dashboard immediately. I built the state layer on <code className="text-accent">Redux Toolkit</code> with live <code className="text-accent">Socket.io</code> and <code className="text-accent">Laravel Echo</code> event listeners — status transitions propagate instantly to all connected dashboard sessions without polling.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiShield className="text-accent" /> Error Isolation for Reliability
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              In an operations context, a broken chart or a stale map tile should never kill the core order management UI. I integrated <code className="text-accent">Bugsnag</code> with React error boundaries around each isolated module — analytics, map, dialer — so failures in peripheral features never cascade to the order pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RESULTS */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">1 System</p>
            <p className="text-xs text-muted mt-1">Replaces WhatsApp, Excel & Phone Calls</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Auto</p>
            <p className="text-xs text-muted mt-1">Customer SMS/Email at Every Stage</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">Real-Time</p>
            <p className="text-xs text-muted mt-1">Order Status Sync Across All Sessions</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">1-Click</p>
            <p className="text-xs text-muted mt-1">VoIP Call to Rider Without Leaving Dashboard</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Dora Fleet gives any business doing deliveries — from a restaurant chain to a pharmaceutical distributor — the operational infrastructure to scale their delivery operation without scaling their admin headcount. The frontend I built turned a complex multi-actor workflow into a clean, fast interface that dispatchers can fully master within minutes of onboarding.
        </p>
      </section>

      {/* 7. REFLECTION */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          Building Dora Fleet taught me that the right abstraction for operations software is not about fancy features — it's about <strong className="text-fg">eliminating the manual coordination tax</strong> that consumes dispatchers' time. Every design decision centered on reducing the number of clicks between "order arrives" and "rider is on the way."
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          The platform continues to expand — we're integrating API webhooks for e-commerce platforms so orders from third-party storefronts flow into Dora automatically, eliminating even the manual order-creation step for online merchants.
        </p>
      </section>
    </CasestudyLayout>
  )
}
