import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {ReactNode} from 'react'

import headshot from "../assets/headshot.jpeg"

type Project = {
  id: string
  title: string
  short: string
  description: string
  tech: string[]
  image?: string
  website?: string
  ios?: string
  android?: string
  repo?: string
}

const projects: Project[] = [
  {
    id: 'poker-timer',
    title: 'PokerTimer',
    short: 'A hybrid timer for live poker games',
    description:
      'Build a reliable, synced poker blind/timer app with push notifications, Live Activities support and a simple UI for tournament directors.',
    tech: ['React Native', 'Expo', 'TypeScript', 'AWS (Lambda, DynamoDB)'],
    ios: 'https://apps.apple.com/example-poker-timer',
    android: 'https://play.google.com/example-poker-timer',
    repo: 'https://github.com/yourname/poker-timer',
  },
  {
    id: 'invest-tracker',
    title: 'InvestTrack',
    short: 'Aggregate investments from multiple providers',
    description:
      'A dashboard to combine portfolio data across brokers and custodians, visualize holdings, and track performance over time.',
    tech: ['React', 'TypeScript', 'Node.js', 'Plaid?'],
    website: 'https://investtrack.example.com',
    repo: 'https://github.com/yourname/investtrack',
  },
]

function Container({children}: { children: ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>
}

function Badge({children}: { children: ReactNode }) {
  return (
    <span className="inline-block bg-slate-100 text-slate-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {children}
    </span>
  )
}

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Your Name — Software Engineer</title>
        <meta name="description"
              content="Portfolio of Your Name — full stack engineer. Projects, apps, blog and contact."/>
      </Head>

      <header className="border-b bg-white sticky top-0 z-30">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-semibold">Toon de Boer</Link>

            <nav className="space-x-4 text-sm text-slate-600">
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <a
                href="/resume.pdf"
                className="ml-3 inline-block px-3 py-1.5 border rounded-md text-sm"
                aria-label="Download resume"
              >Resume</a>
            </nav>
          </div>
        </Container>
      </header>

      <main className="py-12">
        <Container>
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold">Hi — I&apos;m Toon de Boer</h1>
              <p className="mt-4 text-lg text-slate-700">
                I build mobile and web apps that solve real problems — from a synchronized poker timer to an
                investment tracker. I&apos;m a Full Stack Engineer (React, React Native, Angular, TypeScript, Node, AWS)
                passionate about
                building polished UX and scalable backends.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#projects" className="inline-block rounded-md border px-4 py-2 font-medium">
                  View projects
                </Link>
                <a href="mailto:you@example.com" className="inline-block px-4 py-2 bg-slate-800 text-white rounded-md">
                  Get in touch
                </a>
              </div>

              <div className="mt-6 text-sm text-slate-600 flex gap-4 flex-wrap">
                <span>Currently open to new opportunities</span>
                <span>•</span>
                <span>Available for interviews</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-80">
              <div
                className="flex items-center justify-center rounded-2xl p-2">
                <Image
                  src={headshot}
                  alt="Headshot"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </section>

          <section id="projects" className="mt-16">
            <h2 className="text-2xl font-bold">Selected projects</h2>
            <p className="mt-2 text-slate-600">A few things I&apos;ve built — links to stores and repos included.</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.id} className="group border rounded-2xl p-4 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{p.short}</p>
                    </div>
                    <div className="text-right text-xs text-slate-500">{p.tech.slice(0, 2).join(' • ')}</div>
                  </div>

                  <p className="mt-3 text-sm text-slate-700">{p.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap">
                      {p.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {p.website && (
                        <a href={p.website} className="text-sm hover:underline" target="_blank" rel="noreferrer">
                          Live
                        </a>
                      )}

                      {p.ios && (
                        <a href={p.ios} className="text-sm hover:underline" target="_blank" rel="noreferrer">
                          App Store
                        </a>
                      )}

                      {p.android && (
                        <a href={p.android} className="text-sm hover:underline" target="_blank" rel="noreferrer">
                          Google Play
                        </a>
                      )}

                      {p.repo && (
                        <a href={p.repo} className="text-sm text-slate-500 hover:underline" target="_blank"
                           rel="noreferrer">
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/projects" className="inline-block px-5 py-2 border rounded-md">
                See all projects
              </Link>
            </div>
          </section>

          <section id="about" className="mt-16">
            <h2 className="text-2xl font-bold">About</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-700">I&apos;m a full stack developer focused on building reliable, maintainable
                  systems and delightful user
                  interfaces. I have experience across web and mobile, and I enjoy taking projects from idea to store
                  release.</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li><strong>Stacks:</strong> React, Next.js, React Native, Node, TypeScript</li>
                  <li><strong>Cloud:</strong> AWS (Lambda, API Gateway, DynamoDB, S3), Vercel</li>
                  <li><strong>Other:</strong> CI/CD, testing, observability</li>
                </ul>

                <div className="mt-6">
                  <a href="/resume.pdf" className="inline-block px-4 py-2 border rounded-md">Download resume (PDF)</a>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p>
                  Quick highlights:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Designed and implemented a hybrid timer system for a PokerTimer app with push notifications.</li>
                  <li>Built an investment-tracking dashboard that aggregates accounts and visualizes holdings.</li>
                  <li>Strong focus on developer experience, automated testing and observability.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-16">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-600">Want to chat about a role, collaboration or a coffee? Reach out.</p>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:you@example.com" className="block mt-1 text-slate-700">you@example.com</a>

                <h4 className="font-semibold mt-4">Social</h4>
                <div className="mt-2 flex gap-3">
                  <a href="https://github.com/toondeboer" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/toon-de-boer" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Contact form (optional)</h4>
                <form action="/api/contact" method="post" className="mt-2 space-y-3">
                  <div>
                    <label className="block text-xs">Name</label>
                    <input name="name" className="mt-1 w-full border rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-xs">Email</label>
                    <input name="email" className="mt-1 w-full border rounded-md px-3 py-2"/>
                  </div>
                  <div>
                    <label className="block text-xs">Message</label>
                    <textarea name="message" className="mt-1 w-full border rounded-md px-3 py-2 h-24"/>
                  </div>
                  <div>
                    <button type="submit" className="px-4 py-2 border rounded-md">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <footer className="border-t py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <div>© {new Date().getFullYear()} Your Name — Built with React, Next.js & TypeScript</div>
            <div className="mt-3 md:mt-0">Made with ❤️ — Available for hire</div>
          </div>
        </Container>
      </footer>
    </>
  )
}
