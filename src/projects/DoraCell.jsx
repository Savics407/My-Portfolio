import React, { useEffect } from 'react'
import {
  FiCheckCircle,
  FiLayers,
  FiPackage,
  FiMonitor,
  FiRefreshCw,
  FiShield,
  FiTrendingUp,
  FiPhoneCall,
} from 'react-icons/fi'
import CasestudyLayout from '../components/layout/CasestudyLayout'
import doraCellHero from '../assets/dora-cell/Hero Section.png'
import incomingCalls from '../assets/dora-cell/Incoming Calls.svg'
import openingDialer from '../assets/dora-cell/Opening dialer.svg'
import outgoingCalls from '../assets/dora-cell/Outgoing Calls.svg'

export default function DoraCellCaseStudy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const projectImages = [
    { id: 1, src: doraCellHero,    alt: 'Dora Cell — Make Calls. Turn Every Call Into an Action.' },
    { id: 2, src: incomingCalls,   alt: 'Dora Cell — Incoming Call UI with caller ID and answer controls' },
    { id: 3, src: openingDialer,   alt: 'Dora Cell — Opening Dialer with extension and number input' },
    { id: 4, src: outgoingCalls,   alt: 'Dora Cell — Outgoing Call in progress with mute/hangup controls' },
  ]

  const technologies = [
    'Next.js 16 (Canary)',
    'React 19',
    'TypeScript',
    'WebRTC & SIP.js',
    'JsSIP',
    'Zustand',
    'TanStack Query',
    'Monorepo SDK Workspace',
  ]

  return (
    <CasestudyLayout
      title="Dora Cell — Production WebRTC Browser Telephony Platform & Embeddable SDK Ecosystem"
      projectImages={projectImages}
      technologies={technologies}
      external="https://cell.usedora.com"
    >
      {/* Executive Summary Callout Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-raised border border-border mb-10">
        <div>
          <p className="text-xs font-mono text-muted uppercase">Role</p>
          <p className="text-fg font-semibold text-sm mt-1">Founding Engineer (Frontend Lead)</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Architecture</p>
          <p className="text-fg font-semibold text-sm mt-1">Monorepo (@dora-cell/sdk)</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Core Protocol</p>
          <p className="text-fg font-semibold text-sm mt-1">SIP Signaling · WebRTC</p>
        </div>
        <div>
          <p className="text-xs font-mono text-muted uppercase">Target Runtimes</p>
          <p className="text-fg font-semibold text-sm mt-1">Web Browser & CRM Integrations</p>
        </div>
      </div>

      {/* Hero Screenshot */}
      <div className="my-8 rounded-xl overflow-hidden border border-border/60">
        <img
          src={doraCellHero}
          alt="Dora Cell — Make Calls. Turn Every Call Into an Action."
          className="w-full object-cover"
        />
        <p className="text-xs text-muted text-center py-2.5 bg-raised border-t border-border/40">
          Dora Cell — reliable voice infrastructure for businesses; from order confirmations to full call centre operations
        </p>
      </div>

      {/* 1. OVERVIEW */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Overview</h2>
        <p className="text-secondary leading-relaxed">
          <strong className="text-fg">Dora Cell</strong> is an enterprise browser-based VoIP and communication platform designed to replace bulky physical PBX desk phones and fragile desktop softphones with resilient, programmatic browser telephony. It enables high-volume enterprise teams—such as logistics dispatchers, customer support hubs, and sales centers—to place, receive, transfer, and record multi-line telephone calls directly inside their web browsers and embedded CRM integrations.
        </p>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I owned and architected the complete client telephony layer from scratch. Operating inside a cutting-edge Next.js 16 and React 19 monorepo workspace, I designed the deterministic state machines governing multi-line WebRTC peer negotiation, SIP signaling with Asterisk media servers, and authored the standalone published NPM SDKs (<code className="text-accent">@dora-cell/sdk</code>, <code className="text-accent">@dora-cell/sdk-react</code>, <code className="text-accent">@dora-cell/ghl</code>) that power enterprise integrations across web and CRM runtimes.
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
          We needed an architecture engineered from the ground up to handle real-time WebRTC media streams, live NAT traversal, automatic session re-negotiation, and sub-100ms UI responsiveness across both standard browser tabs and embedded CRM iframe contexts.
        </p>
      </section>

      {/* Call UI Screenshots */}
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="rounded-xl overflow-hidden border border-border/60">
          <img src={incomingCalls}  alt="Incoming call UI" className="w-full object-cover bg-[#111]" />
          <p className="text-xs text-muted text-center py-2 bg-raised border-t border-border/40">Incoming Call</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-border/60">
          <img src={openingDialer} alt="Opening dialer" className="w-full object-cover bg-white" />
          <p className="text-xs text-muted text-center py-2 bg-raised border-t border-border/40">Opening Dialer</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-border/60">
          <img src={outgoingCalls}  alt="Outgoing call in progress" className="w-full object-cover bg-[#111]" />
          <p className="text-xs text-muted text-center py-2 bg-raised border-t border-border/40">Active Outbound Call</p>
        </div>
      </div>

      {/* 3. MY ROLE & ARCHITECTURAL OWNERSHIP */}
      <section className="space-y-4 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">My Role & Architectural Ownership</h2>
        <p className="text-secondary leading-relaxed">
          As <strong className="text-fg">Chief Frontend Engineer</strong>, I led the core technical vision, system architecture, and team delivery across all client repositories. In addition to individual architectural execution, I led and mentored other developers on the team, establishing robust code review guidelines, component styling standards, and testing patterns.
        </p>
        <ul className="space-y-2.5 text-secondary text-sm my-4">
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Telephony Core Architecture:</strong> Built the unified telephony client wrapper around <code className="text-accent">SIP.js</code> and <code className="text-accent">JsSIP</code>, handling automated session registration, ICE restarts, and clean hangup/transfer handshakes.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">Monorepo Workspace Design:</strong> Structured our workspace into clean modular packages (<code className="text-accent">@dora-cell/sdk</code>, <code className="text-accent">@dora-cell/sdk-react</code>, and <code className="text-accent">@dora-cell/ghl</code>) ensuring zero circular dependencies and pristine tree-shaking for external consumers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={15} />
            <span><strong className="text-fg">High-Performance State Engine:</strong> Leveraged <code className="text-accent">Zustand</code> and <code className="text-accent">TanStack Query</code> to maintain zero-latency local call state while keeping historical call logs and billing records synchronized in real time via <code className="text-accent">Laravel Echo</code> and <code className="text-accent">Pusher</code>.</span>
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
              Audio Output Routing   → Deterministic <code className="text-accent">setSinkId</code> DOM media binding
            </p>
          </div>
        </div>

        {/* Module 2: Published NPM SDK Suite */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-4">
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">
              2. Published Monorepo SDK Suite (<code className="text-accent font-mono text-sm">@dora-cell/sdk</code>)
            </h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            To allow enterprise clients and internal products (like Dora Fleet) to embed telephony features directly inside existing applications, I architected and published our NPM package suite. The Core SDK handles everything from SIP registration to call events:
          </p>

          {/* Core SDK quick start */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">Core SDK — Quick Start</p>
            <div className="rounded-lg bg-bg border border-border/70 font-mono text-xs overflow-x-auto">
              <div className="px-4 py-2 border-b border-border/50 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="text-muted ml-2">index.js</span>
              </div>
              <pre className="p-4 text-secondary leading-relaxed overflow-x-auto whitespace-pre">{`import { DoraCell } from "@dora-cell/sdk";

const sdk = new DoraCell({
  auth: {
    type: "login",
    userType: "agent",
    email: "agent@example.com",
    password: "password",
  },
  environment: "production",
  debug: false
});

sdk.on("connection:status", ({ status, extension, error }) => {
  console.log("Connection:", status, extension, error);
});

await sdk.initialize();

// Place an outbound call
const call = await sdk.call("+2348000000000", {
  metadata: { customerId: "cus_123" }
});

call.mute();
call.hangup();

// Answer an incoming call
sdk.on("call:incoming", async (call) => {
  console.log("Incoming call from:", call.remoteNumber);
  await sdk.answerCall();
});

// Bind remote audio stream
sdk.on("call:stream", (call, stream) => {
  const audio = document.querySelector("audio#remote-audio");
  if (audio) audio.srcObject = stream;
});`}</pre>
            </div>
          </div>

          {/* React SDK */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">React SDK — DoraCellProvider + Hooks</p>
            <div className="rounded-lg bg-bg border border-border/70 font-mono text-xs overflow-x-auto">
              <div className="px-4 py-2 border-b border-border/50 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="text-muted ml-2">Dialer.tsx</span>
              </div>
              <pre className="p-4 text-secondary leading-relaxed overflow-x-auto whitespace-pre">{`import { DoraCellProvider } from "@dora-cell/sdk-react";
import "@dora-cell/sdk-react/styles.css";

// Wrap your app tree with the provider
export default function RootLayout({ children }) {
  return (
    <DoraCellProvider
      config={{
        auth: { type: "login", userType: "agent", email: "...", password: "..." },
        environment: "production"
      }}
      autoInitialize={true}
    >
      {children}
    </DoraCellProvider>
  );
}

// Consume call state anywhere in the tree
import { useCall, useConnectionStatus } from "@dora-cell/sdk-react";

export function Dialer() {
  const { call, callStatus, callDuration } = useCall();
  const { isConnected, connectionStatus } = useConnectionStatus();

  return (
    <div>
      <p>Status: {connectionStatus}</p>
      {callStatus === "ongoing" && <p>{callDuration}</p>}
      <button
        onClick={() => call("+2348000000000")}
        disabled={!isConnected || callStatus !== "idle"}
      >
        {callStatus === "idle" ? "Call" : "Calling..."}
      </button>
    </div>
  );
}`}</pre>
            </div>
          </div>

          {/* SDK package list */}
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-bg border border-border/70">
              <p className="text-accent font-mono font-semibold mb-1.5">@dora-cell/sdk</p>
              <p className="text-muted leading-relaxed">Framework-agnostic TypeScript client. Handles WebRTC, SIP registration, auth, and telephony state events.</p>
            </div>
            <div className="p-3.5 rounded-lg bg-bg border border-border/70">
              <p className="text-accent font-mono font-semibold mb-1.5">@dora-cell/sdk-react</p>
              <p className="text-muted leading-relaxed">React 19 provider + hooks (<code className="text-accent">useCall</code>, <code className="text-accent">useConnectionStatus</code>, <code className="text-accent">useWallet</code>, <code className="text-accent">useExtensions</code>).</p>
            </div>
            <div className="p-3.5 rounded-lg bg-bg border border-border/70">
              <p className="text-accent font-mono font-semibold mb-1.5">@dora-cell/ghl</p>
              <p className="text-muted leading-relaxed">Bridges live call state into GoHighLevel CRM — contact lookups, call logging, and disposition tagging.</p>
            </div>
          </div>
        </div>

        {/* Module 3: Real-Time Event Sync */}
        <div className="p-6 rounded-xl bg-raised border border-border space-y-3">
          <div className="flex items-center gap-2.5">
            <FiMonitor className="text-accent" size={18} />
            <h3 className="text-fg font-semibold text-base">3. Real-Time Call Event Sync & CRM Integration</h3>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            The backend handles all call event persistence and SIP configuration sync. On the frontend, call history, recording status, and telephony state are surfaced by consuming server state through our REST APIs — keeping the client layer clean and stateless with respect to call records. The <code className="text-accent">@dora-cell/ghl</code> package uses the same pattern to bridge call state into GoHighLevel CRM workflows, enabling contact lookups, call logging, and disposition tagging without leaving the browser tab.
          </p>
        </div>
      </section>

      {/* 5. TECHNICAL DECISIONS & CHALLENGES */}
      <section className="space-y-6 mb-12">
        <h2 className="text-fg text-xl font-bold tracking-tight">Key Technical Decisions & Challenges</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiRefreshCw className="text-accent" /> Zustand over Redux for High-Frequency Telephony State
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              In real-time telephony, audio volume indicators, network packet-loss metrics, and multi-second call timers trigger state updates dozens of times per second. Traditional Redux store dispatches caused unnecessary re-renders across the dashboard layout. I adopted <code className="text-accent">Zustand</code> with atomic selector subscriptions, ensuring only the specific active call widget re-renders while the surrounding dashboard remains at zero overhead.
            </p>
          </div>

          <div className="card p-6">
            <h4 className="text-fg font-semibold text-base mb-2 flex items-center gap-2">
              <FiShield className="text-accent" /> Strict Audio Permission & Device Sandbox
            </h4>
            <p className="text-secondary text-sm leading-relaxed">
              Browser security policies restrict microphone enumeration until <code className="text-accent">getUserMedia</code> is granted. I designed a proactive audio onboarding wizard and hardware health check that verifies microphone permissions, tests speaker output, and verifies SIP WebSocket connectivity before a dispatcher shifts to active duty—preventing dropped calls during peak operating hours.
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
            <p className="text-2xl md:text-3xl font-bold text-accent font-mono">&lt;50ms</p>
            <p className="text-xs text-muted mt-1">Audio Routing Latency</p>
          </div>
          <div className="p-5 rounded-xl bg-raised border border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-fg font-mono">Web</p>
            <p className="text-xs text-muted mt-1">Unified Runtime Continuity</p>
          </div>
        </div>
        <p className="text-secondary text-sm leading-relaxed">
          Dora Cell now serves as the enterprise telephony backbone for logistics networks and enterprise sales teams. Our modular SDK architecture allowed us to seamlessly embed real-time VoIP dispatch right inside Dora Fleet and third-party customer relationship systems without rewriting telephony state logic.
        </p>
      </section>

      {/* 7. REFLECTION */}
      <section className="p-6 md:p-8 rounded-xl bg-raised border border-border/80 mb-8" style={{ borderLeft: '4px solid #4ade80' }}>
        <h3 className="text-fg font-bold text-base md:text-lg mb-3 flex items-center gap-2">
          <FiTrendingUp className="text-accent" /> Reflection
        </h3>
        <p className="text-secondary text-sm leading-relaxed mb-3">
          Building Dora Cell reinforced something I hadn't fully appreciated before: <strong className="text-fg">browser telephony is unforgiving</strong>. Unlike typical web apps where a failed API call shows an error toast, a dropped SIP session during an active dispatch call has real operational consequences. This shaped every architectural decision — from how we handle ICE restarts to the audio onboarding flow — around resilience first.
        </p>
        <p className="text-secondary text-sm leading-relaxed">
          The SDK-first packaging approach also proved its value early. Having a clean, versioned <code className="text-accent">@dora-cell/sdk</code> meant Dora Fleet could embed telephony without touching the core Cell codebase, and third-party integrations like the GHL connector could be built and shipped independently. That separation of concerns is something I'd carry into any platform product I work on going forward.
        </p>
      </section>
    </CasestudyLayout>
  )
}
