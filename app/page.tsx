import Link from "next/link";
import { BrandMark, PageShell } from "./ui";

const pillars = [
  { number: "01", title: "Tools", description: "Useful software for everyday problems.", status: "NestContact — Available now", href: "/tools", tone: "green" },
  { number: "02", title: "Media", description: "Ideas and stories worth understanding.", status: "Coming soon", href: "/media", tone: "amber" },
  { number: "03", title: "Betterment", description: "Thoughtful technology for everyday wellness.", status: "Coming soon", href: "/betterment", tone: "violet" },
] as const;

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="simple-hero section-pad">
          <p className="eyebrow">TheMaskedBit</p>
          <h1>Thoughtful things<br />for everyday life.</h1>
          <p>We build thoughtful products across three areas: Tools, Media and Betterment.</p>
          <a className="down-link" href="#pillars" aria-label="Explore what we build">↓</a>
        </section>

        <section className="areas section-pad" id="pillars">
          <p className="eyebrow">What we’re building</p>
          <div className="area-list">
            {pillars.map((pillar) => (
              <Link className={`area-row ${pillar.tone}`} href={pillar.href} key={pillar.title}>
                <span className="area-number">{pillar.number}</span>
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
                <small>{pillar.status}</small>
                <b aria-hidden="true">→</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="simple-belief section-pad">
          <BrandMark large />
          <p className="eyebrow">What we believe</p>
          <h2>Useful before impressive.</h2>
          <p>Good technology should solve something real, respect the person using it, and quietly make life a little easier.</p>
        </section>
      </main>
    </PageShell>
  );
}
