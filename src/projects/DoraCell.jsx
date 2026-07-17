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
  FiPhoneCall,
  FiActivity,
  FiGlobe,
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
        Image Slot — Drop screenshot or WebRTC signaling architecture diagram here
      </span>
    </div>
  )
}

export default function DoraCellCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projectImages = [
    {
      id: 1,
      src: doraLogo,
      alt: 'Dora Cell Telephony Platform & SDK Architecture',
    },
  ]

  const technologies = [
    'Next.js 16 (Canary)',
    'React 19',
    'TypeScript',
    'WebRTC & SIP.js',
    'JsSIP',
    'Zustand',
    'TanStack Query',
    'Electron Desktop',
    'Monorepo SDK Workspace',
  ]

  return (
    <CasestudyLayout
      title="Dora Cell — Production WebRTC Browser Telephony Platform & Embeddable SDK Ecosystem"
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
          <p className="text-fg font-semibold text-sm mt-1">Monorepo (@dora-cell/sdk)</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Protocol</p>
          <p className="text-fg font-semibold text-sm mt-1">SIP Signaling · WebRTC · Janus</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Target Runtimes</p>
          <p className="text-fg font-semibold text-sm mt-1">Web Browser & Electron</p>
        </div>
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">Dora Cell</strong> is an enterprise browser-based VoIP and communication platform designed to replace bulky physical PBX desk phones and fragile desktop softphones with resilient, programmatic browser telephony. It enables high-volume enterprise teams—such as logistics dispatchers, customer support hubs, and sales centers—to place, receive, transfer, and record multi-line telephone calls directly inside their web browsers or native Electron desktop applications.
        </p>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I owned and architected the complete client telephony layer from scratch. Operating inside a cutting-edge Next.js 16 and React 19 monorepo workspace, I designed the deterministic state machines governing multi-line WebRTC peer negotiation, SIP signaling with Asterisk/Janus media servers, and authored the standalone published NPM SDKs (`@dora-cell/sdk`, `@dora-cell/sdk-react`, `@dora-cell/ghl`) that power enterprise integrations across web and native runtimes.
        </p>
      </section>
      {/* 2. THE ENGINEERING PROBLEM */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">The Engineering Problem: Browser Telephony at Scale</h2>
        <p className="text-secondary leading-relaxed">
          Building browser telephony that survives high-stakes enterprise workflows is notoriously complex. Off-the-shelf VoIP widgets and third-party communication wrappers routinely fail under the demands of real-time logistics and dispatch operations.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" /> NAT Traversal & Signaling Drop-offs
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              When network IP configurations change or symmetric firewalls block UDP ports, standard browser SIP sessions drop silently. Dispatchers experience one-way audio or dead calls during critical driver coordination.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-bg border border-border/80">
            <h4 className="text-fg font-semibold text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Multi-Line State Chaos
            </h4>
            <p className="text-muted text-xs leading-relaxed">
              Handling multiple concurrent calls—placing one call on hold while answering an incoming high-priority dispatch line—requires deterministic state synchronization across audio device routing, microphone locks, and WebSocket signaling channels.
            </p>
          </div>
        </div>
        <p className="text-secondary leading-relaxed">
          We needed an architecture engineered from the ground up to handle real-time WebRTC media streams, live NAT traversal, automatic session re-negotiation, and sub-100ms UI responsiveness across both standard browser tabs and background Electron desktop processes.
        </p>
      </section>

      {/* Image Placeholder 1: WebRTC Signaling Architecture */}
      <ImagePlaceholder
        title="WebRTC Signaling & Janus Media Server Peer Negotiation Pipeline"
        caption="Diagram showing SIP signaling over WebSocket, ICE candidate exchange, and audio device routing between browser and Asterisk PBX."
      />

      {/* 3. MY ROLE & ARCHITECTURAL OWNERSHIP */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & Architectural Ownership</h2>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I led the core technical vision, system architecture, and team delivery across all client repositories. I established strict standards around real-time state management, audio device handling, and SDK packaging.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Telephony Core Architecture:</strong> Built the unified telephony client wrapper around `SIP.js` and `JsSIP`, handling automated session registration, ICE restarts, and clean hangup/transfer handshakes.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Monorepo Workspace Design:</strong> Structured our workspace into clean modular packages (`@dora-cell/sdk`, `@dora-cell/sdk-react`, and `@dora-cell/ghl`) ensuring zero circular dependencies and pristine tree-shaking for external consumers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">High-Performance State Engine:</strong> Leveraged `Zustand` and `TanStack Query` to maintain zero-latency local call state while keeping historical call logs and billing records synchronized in real time via `Laravel Echo` and `Pusher`.</span>
          </li>
        </ul>
      </section>

      {/* 4. CORE MODULES & WHAT I BUILT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Core Architectural Modules I Built</h2>

        {/* Module 1: WebRTC & SIP Signaling Engine */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPhoneCall className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">1. Deterministic WebRTC & SIP.js Signaling Engine</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            I engineered the core telephony controller governing all SIP signaling and WebRTC peer connections. The engine encapsulates session handshakes, DTMF keypad signaling, attended/blind transfers, and automated audio device selection (headset auto-detection vs. speakerphone routing).
          </p>
          <div className="p-4 rounded-lg bg-bg border border-border/70 font-mono text-xs space-y-2">
            <p className="text-accent font-semibold">// Automatic ICE Candidate Recovery & Registration Retry</p>
            <p className="text-muted">
              WebSocket Disconnect → Instant exponential backoff reconnect<br />
              ICE Connection Failed → Automatic peer connection restart & candidate gathering<br />
              Audio Output Routing   → Deterministic `setSinkId` DOM media binding
            </p>
          </div>
        </div>

        {/* Module 2: Published NPM SDK Suite */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">2. Published Monorepo SDK Suite (`@dora-cell/sdk`)</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            To allow enterprise clients and internal products (like Dora Fleet) to embed telephony features directly inside existing applications, I architected our published NPM package suite:
          </p>
          <ul className="list-disc list-inside text-secondary text-sm space-y-1.5 pl-1">
            <li><strong className="text-fg">`@dora-cell/sdk`:</strong> Pure, framework-agnostic TypeScript client handling WebRTC signaling, auth tokens, and telephony state events.</li>
            <li><strong className="text-fg">`@dora-cell/sdk-react`:</strong> React 19 hook ecosystem (`useDoraCall`, `useAudioDevices`, `useTelephonyStatus`) allowing developers to build custom dialers in under 15 lines of code.</li>
            <li><strong className="text-fg">`@dora-cell/ghl`:</strong> Specialized integration connector bridging Dora telephony directly into GoHighLevel CRM workflows.</li>
          </ul>
        </div>

        {/* Image Placeholder 2: SDK Integration */}
        <ImagePlaceholder
          title="Monorepo Package Boundary & SDK Consumer Ecosystem"
          caption="Architectural overview showing how @dora-cell/sdk consumed by React applications, Electron clients, and third-party CRMs."
        />

        {/* Module 3: Electron & Real-Time Sync */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiMonitor className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Electron Desktop Client & Real-Time Event Sync</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            I led the development of our Electron desktop application, providing persistent system-tray background telephony, hardware shortcut support for answering/muted dispatch lines, and native OS notifications. All call events and recordings are synchronized across active browser and desktop instances in real time using `Laravel Echo` and `Pusher WebSockets`.
          </p>
        </div>
      </section>

      {/* 5. TECHNICAL DECISIONS & CHALLENGES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Key Technical Decisions & Challenges</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiCpu className="text-accent" /> Zustand over Redux for High-Frequency Telephony State
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              In real-time telephony, audio volume indicators, network packet-loss metrics, and multi-second call timers trigger state updates dozens of times per second. Traditional Redux store dispatches caused unnecessary re-renders across the dashboard layout. I adopted `Zustand` with atomic selector subscriptions, ensuring only the specific active call widget re-renders while the surrounding dashboard remains at zero overhead.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiShield className="text-accent" /> Strict Audio Permission & Device Sandbox
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Browser security policies restrict microphone enumeration until getUserMedia is granted. I designed a proactive audio onboarding wizard and hardware health check that verifies microphone permissions, tests speaker output, and verifies SIP WebSocket connectivity before a dispatcher shifts to active duty—preventing dropped calls during peak operating hours.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTION RESULTS & IMPACT */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Production Results & Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">99.9%</p>
            <p className="text-xs text-muted mt-1">Signaling & Call Reliability</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">3 SDKs</p>
            <p className="text-xs text-muted mt-1">Published Monorepo Packages</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">&lt; 50ms</p>
            <p className="text-xs text-muted mt-1">Audio Routing Latency</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Web + Desktop</p>
            <p className="text-xs text-muted mt-1">Unified Runtime Continuity</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Dora Cell now serves as the enterprise telephony backbone for logistics networks and enterprise sales teams. Our modular SDK architecture (`@dora-cell/sdk`) allowed us to seamlessly embed real-time VoIP dispatch right inside Dora Fleet and third-party customer relationship systems without rewriting telephony state logic.
        </p>
      </section>

      {/* 7. REFLECTION */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection & Future Enhancements
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          Building Dora Cell reinforced the critical importance of <strong className="text-fg">defensive network handling and real-time telemetry</strong> when bridging web browsers with SIP telecom hardware.
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          Looking ahead, we are expanding our WebRTC pipeline to incorporate browser-side AI noise suppression (using WebAssembly audio worklets) and automated real-time call transcription—further empowering enterprise dispatchers with intelligent communication tools right at their fingertips.
        </p>
      </section>
    </CasestudyLayout>
  )
}
