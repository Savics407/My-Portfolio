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
  FiNavigation,
  FiTruck,
  FiPhoneCall,
  FiMapPin,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import doraLogo from '../assets/dora/logo.svg'

/* Sleek Image Placeholder Slot for architectural diagrams and UI screenshots */
function ImagePlaceholder({ title, caption }) {
  return (
    <div className="my-8 rounded-xl border border-dashed border-border/80 bg-raised/50 p-6 flex flex-col items-center justify-center text-center group hover:border-accent/50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-bg border border-border flex items-center justify-center text-muted group-hover:text-accent transition-colors mb-3">
        <FiImage size={22} />
      </div>
      <p className="text-fg font-medium text-sm mb-1">{title}</p>
      <p className="text-muted text-xs max-w-md">{caption}</p>
      <span className="mt-3 text-[11px] font-mono text-accent/80 bg-accent/10 px-2.5 py-0.5 rounded border border-accent/20">
        Image Slot — Drop screenshot or real-time dispatch map architecture diagram here
      </span>
    </div>
  )
}

export default function DoraFleetCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [
    {
      id: 1,
      src: doraLogo,
      alt: 'Dora Fleet Logistics Platform Ecosystem',
    },
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
      title="Dora Fleet — Real-Time Enterprise Logistics, Dispatch & Driver Telemetry Platform"
      projectImages={projectImages}
      technologies={technologies}
      external="https://usedora.com"
    >
      {/* Executive Summary Callout Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-raised border border-border mb-10">
        <div>
          <p className="text-xs font-mono text-muted uppercase">Role</p>
          <p className="text-fg font-semibold text-sm mt-1">Founding Frontend Engineer</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Architecture</p>
          <p className="text-fg font-semibold text-sm mt-1">Real-Time Dispatch Dashboard</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Capabilities</p>
          <p className="text-fg font-semibold text-sm mt-1">Embedded VoIP · Live Geofencing</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Target Users</p>
          <p className="text-fg font-semibold text-sm mt-1">Fleet Managers & Dispatchers</p>
        </div>
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">Dora Fleet</strong> is an enterprise logistics and fleet operations platform engineered to synchronize drivers, dispatchers, and fleet managers across high-velocity delivery workflows. Combining live GPS tracking, automated route geofencing, real-time vehicle telemetry, and embedded VoIP telephony into a single mission control interface, Dora Fleet eliminates the operational blind spots that plague modern transportation networks.
        </p>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I led the architectural development of our Next.js 14 and TypeScript frontend ecosystem. I designed the real-time geographic dispatch map using `react-leaflet` with `@geoman-io/leaflet-geoman-free` geometry controls, integrated our proprietary `@dora-cell/sdk-react` directly into driver tracking cards for instant one-click dispatch calling, and engineered high-throughput state synchronization via `Socket.io` and `Pusher`.
        </p>
      </section>

      {/* 2. THE ENGINEERING PROBLEM */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Engineering Problem: Fragmented Dispatch & Telemetry Lag</h2>
        <p className="text-secondary leading-relaxed">
          In high-volume logistics, seconds of latency or disconnected tools can stall entire fleet operations. Traditional dispatch rooms rely on multiple fragmented systems: one window for GPS tracking, another for driver schedules, and separate desktop phones for driver communication.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" /> Map Rendering Overload
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Rendering hundreds of active vehicles with real-time GPS coordinate updates on standard DOM elements causes severe frame drops and browser freezes during peak dispatch hours.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Communication Friction
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              When a vehicle deviates from its assigned route or triggers an alert, dispatchers lose valuable time manually looking up driver phone numbers and switching to external phone applications to initiate contact.
            </p>
          </div>
        </div>
        <p className="text-secondary leading-relaxed">
          Our goal was to create a unified, high-performance web interface where real-time vehicle mapping, interactive geofence editing, and instant driver VoIP calling operated concurrently without interface stutter.
        </p>
      </section>

      {/* Image Placeholder 1: Dispatch Dashboard */}
      <ImagePlaceholder
        title="Dora Fleet Mission Control & Real-Time Geofencing Dashboard"
        caption="Screenshot showing live multi-vehicle tracking map alongside driver telemetry cards and embedded VoIP dialer."
      />

      {/* 3. MY ROLE & ENGINEERING LEADERSHIP */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & Engineering Leadership</h2>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I owned the frontend architecture and led the engineering team building our comprehensive logistics suite.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Map & Geofencing Architecture:</strong> Architected the interactive mapping layer using `Leaflet` and `@geoman-io/leaflet-geoman-free`, enabling dispatchers to draw custom polygonal geofences and delivery zones directly on live vector tiles.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Embedded Telephony Integration:</strong> Consumed our proprietary `@dora-cell/sdk-react` within the dispatch dashboard, enabling one-click WebRTC calling and live audio device routing right beside active vehicle cards.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Real-Time State Engine:</strong> Built the Redux Toolkit state engine backed by `Socket.io` and `Laravel Echo`, processing live driver GPS breadcrumbs and incident alerts without re-rendering unrelated UI panels.</span>
          </li>
        </ul>
      </section>

      {/* 4. WHAT I BUILT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">What I Built: Core Engine & Modules</h2>

        {/* Module 1: Geofencing Map Engine */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiMapPin className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">1. High-Performance Geofencing & Live Tracking Map Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            I engineered the primary dispatch map interface capable of tracking high-volume active fleets simultaneously. By leveraging Leaflet canvas layers and custom marker clustering, vehicle coordinates update smoothly at 60 FPS as real-time WebSocket coordinates stream into the browser.
          </p>
          <div className="p-4 rounded-lg bg-bg border border-border/70 font-mono text-xs space-y-2">
            <p className="text-accent font-semibold">// Polygon Geofence Validation Pipeline</p>
            <p className="text-muted">
              Dispatcher Draw Action → Geoman Polygon Geometry Capture<br />
              Client Ray-Casting      → Instant spatial check against active driver coordinates<br />
              Geofence Breach Alert   → Automated dispatch notification + instant call trigger
            </p>
          </div>
        </div>

        {/* Module 2: Embedded VoIP Telephony */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPhoneCall className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Native In-App Driver Telephony (`@dora-cell/sdk-react`)</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Rather than requiring dispatchers to dial numbers on external desk phones when a driver encounters a route exception, I embedded our `@dora-cell/sdk-react` directly inside the driver profile cards on the map. Dispatchers click "Call Driver" to establish an instant, crystal-clear WebRTC VoIP connection through our Asterisk/Janus media servers without ever leaving the tracking screen.
          </p>
        </div>

        {/* Image Placeholder 2: VoIP + Map Workflow */}
        <ImagePlaceholder
          title="Embedded VoIP Calling inside Live Driver Tracking Interface"
          caption="Architectural diagram illustrating how @dora-cell/sdk-react hooks interact with active map vehicle selection for one-click dispatch calling."
        />

        {/* Module 3: Operational Analytics & Reporting */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiTrendingUp className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Fleet Analytics & Maintenance Telemetry Dashboard</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            To support long-term fleet optimization, I built our comprehensive reporting dashboard using `Recharts`. Fleet managers can visualize fuel consumption trends, driver idling duration histograms, delivery SLA compliance rates, and automated maintenance schedule alerts with exportable PDF/Excel summary reports.
          </p>
        </div>
      </section>

      {/* 5. TECHNICAL DECISIONS & CHALLENGES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Key Technical Decisions & Challenges</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiRefreshCw className="text-accent" /> Throttling High-Frequency GPS Streams
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              When tracking large fleets, raw GPS pings arriving over WebSockets every second can easily flood state dispatches and lag map rendering. I implemented custom coordinate debounce and smooth spatial interpolation (`requestAnimationFrame` easing), ensuring markers glide naturally along road networks without thrashing the DOM.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiShield className="text-accent" /> Robust Observability & Error Sandboxing
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Logistics software must operate continuously. To ensure zero downtime, I integrated `Bugsnag` with custom React error boundaries around each individual map widget, telemetry panel, and dialer drawer—ensuring that if a third-party map tile service stalls, the telephony and dispatch tables continue functioning without disruption.
            </p>
          </div>
        </div>
      </section>

      {/* 6. RESULTS & IMPACT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Production Results & Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">60 FPS</p>
            <p className="text-xs text-muted mt-1">Map Vector Tracking Performance</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">1-Click</p>
            <p className="text-xs text-muted mt-1">Embedded VoIP Dispatch Calling</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">0ms</p>
            <p className="text-xs text-muted mt-1">Context Switch Latency for Dispatch</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Real-Time</p>
            <p className="text-xs text-muted mt-1">Geofence Breach & Incident Alerts</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Dora Fleet successfully unified vehicle tracking, geographic route planning, and instant driver communication into a cohesive operational command center. Our ability to embed the `@dora-cell/sdk` directly inside the dispatch map proved that our modular architecture could drastically reduce operational response times for enterprise logistics networks.
        </p>
      </section>

      {/* 7. REFLECTION */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection & Continuous Evolution
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          Architecting Dora Fleet demonstrated how <strong className="text-fg">decoupling telephony into standalone SDK hooks</strong> transforms ordinary dashboards into powerful operational command systems.
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          As our logistics ecosystem continues to expand, we are integrating predictive routing models and automated voice-broadcast dispatch alerts—ensuring that drivers and dispatchers remain seamlessly connected across every mile.
        </p>
      </section>
    </CasestudyLayout>
  )
}
