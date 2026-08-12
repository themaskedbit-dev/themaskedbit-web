import Link from "next/link";
import type { ReactNode } from "react";
import { navigation } from "./data";

export function BrandMark({ large = false }: { large?: boolean }) {
  return <span className={`brand-mark ${large ? "brand-mark-large" : ""}`} aria-label="TheMaskedBit"><i /><i /><i /><i /></span>;
}

export function SiteHeader() {
  return <header className="site-header"><Link className="logo" href="/"><BrandMark /><span>TheMaskedBit</span></Link><nav aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a className="nest-link" href="https://nestcontact.com">NestContact ↗</a></nav><details className="mobile-menu"><summary aria-label="Open menu"><span /><span /></summary><div>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<a href="https://nestcontact.com">NestContact ↗</a></div></details></header>;
}

export function SiteFooter() {
  return <footer className="footer section-pad"><div className="footer-brand"><BrandMark /><h2>TheMaskedBit</h2><p>Tools · Media · Betterment</p></div><div className="footer-links"><a href="https://nestcontact.com">NestContact ↗</a>{navigation.map(i => <Link href={i.href} key={i.href}>{i.label}</Link>)}<Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} TheMaskedBit</span><span>Built thoughtfully.</span></div></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><SiteHeader />{children}<SiteFooter /></>; }

export function ContactConstellation() {
  return <div className="constellation" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><BrandMark /></div>{["one","two","three","four","five","six"].map((n, i) => <span key={n} className={`node node-${n}`}>{i === 0 ? "N" : ""}</span>)}</div>;
}

export function NestContactVisual() {
  return <div className="product-visual" aria-label="Abstract presentation of the NestContact experience"><div className="float-card reminder"><span>Next up</span><strong>Catch up with Maya</strong><small>Tomorrow · 10:30</small></div><div className="phone"><div className="phone-bar"><span>9:41</span><i /></div><div className="phone-head"><span>Good morning</span><strong>Keep close to<br />what matters.</strong></div><div className="people"><i className="person p1">M</i><i className="person p2">A</i><i className="person p3">J</i><i className="person more">+8</i></div><div className="next-card"><small>STAY IN TOUCH</small><strong>Maya Chen</strong><span>It’s been 12 days</span><button>Reach out ↗</button></div></div><div className="float-card note"><span>Remember</span><strong>Ask about the new studio</strong><small>Note for Alex</small></div></div>;
}

export function WorldPanel(props: { number: string; title: string; headline: string; copy: string; status: string; href: string; accent: string }) {
  return <article className={`world-panel ${props.accent}`}><div className="world-number">{props.number}</div><div className="world-art" aria-hidden="true"><span /><span /><span /></div><div className="world-content"><p className="eyebrow">{props.title}</p><h3>{props.headline}</h3><p>{props.copy}</p><div className="world-meta"><span><i />{props.status}</span><Link href={props.href}>Explore {props.title} →</Link></div></div></article>;
}

export function InteriorPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <PageShell><main><section className="interior-hero section-pad"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section>{children}</main></PageShell>;
}
