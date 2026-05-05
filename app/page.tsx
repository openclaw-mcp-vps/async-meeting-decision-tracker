export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For remote teams on Slack &amp; Discord
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Never lose a decision<br />made in async chat
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          DecisionTrack monitors your Slack and Discord threads, uses AI to surface decisions and action items, and gives your team a single place to track them.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start tracking for $16/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">AI</div>
            <div className="text-sm text-[#8b949e] mt-1">Decision detection</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e] mt-1">Webhook updates</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">One place</div>
            <div className="text-sm text-[#8b949e] mt-1">All action items</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect Slack & Discord workspaces",
              "AI-powered decision & action item detection",
              "Real-time webhook listeners",
              "Decision history & search",
              "Weekly digest emails",
              "Up to 10 channels monitored"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which platforms are supported?",
              a: "DecisionTrack connects to Slack and Discord via their official APIs and webhooks. Setup takes under 5 minutes per workspace."
            },
            {
              q: "How does the AI detect decisions?",
              a: "We analyze message context and language patterns to identify when a decision has been reached or an action item assigned, then log it automatically."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} DecisionTrack. All rights reserved.
      </footer>
    </main>
  )
}
