import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Compliance Checker — Verify Classification Automatically',
  description: 'Analyze contractor agreements and work patterns to flag misclassification risks before audits. Built for HR teams and legal departments.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c565fc4-403e-4fcf-8ada-be596240beeb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
