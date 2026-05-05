import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DecisionTrack — Track Decisions from Async Discussions",
  description: "Monitor Slack and Discord threads to identify and track decisions, action items, and follow-ups. Built for remote team leads and project managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5c8ef5c0-f2cb-402b-af04-57034b0a8b08"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
