import Link from "next/link";
import { BrandMark, ContactConstellation, NestContactVisual, PageShell, WorldPanel } from "./ui";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero section-pad" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">TheMaskedBit</p>
            <h1>Technology.<br />Ideas.<br /><span>Better living.</span></h1>
            <p className="hero-deck">We build thoughtful products for the things that matter in everyday life.</p>
            <a className="text-link" href="#nestcontact">Explore TheMaskedBit <span>↓</span></a>
          </div>
          <ContactConstellation />
        </section>

        <section className="product section-pad" id="nestcontact">
          <div className="product-copy reveal">
            <p className="eyebrow">From TheMaskedBit</p>
            <h2>Meet<br />NestContact.</h2>
            <p className="product-line">Know who matters.<br />Know what’s next.</p>
            <p className="muted">A simpler way to manage the people, conversations and relationships that matter to you.</p>
            <div className="actions">
              <Link className="button dark" href="/tools">Explore NestContact</Link>
              <a className="button light" href="https://nestcontact.com">Get the app ↗</a>
            </div>
          </div>
          <NestContactVisual />
        </section>

        <section className="story section-pad reveal">
          <p className="eyebrow">A calmer way to keep in touch</p>
          <h2>Relationships shouldn’t need complicated software.</h2>
          <div className="story-side">
            <p>NestContact brings contacts, conversations, notes, follow-ups and important moments together in one calm place.</p>
            <p>It works for individuals and adapts to professionals and small businesses—without becoming a traditional, complicated CRM.</p>
            <Link className="text-link" href="/tools">Discover NestContact <span>→</span></Link>
          </div>
        </section>

        <section className="worlds section-pad" id="worlds">
          <div className="section-intro reveal"><p className="eyebrow">Three directions. One point of view.</p><h2>What we’re building.</h2></div>
          <div className="world-list">
            <WorldPanel number="01" title="Tools" headline="Technology that gets out of your way." copy="We build useful software for real everyday problems." status="Available now" href="/tools" accent="green" />
            <WorldPanel number="02" title="Media" headline="Ideas worth understanding." copy="We’re exploring new ways to make technology, products and useful ideas easier to understand." status="In progress" href="/media" accent="amber" />
            <WorldPanel number="03" title="Betterment" headline="Technology for a better everyday." copy="We’re exploring how thoughtful technology can support growth, wellbeing and more intentional living." status="In progress" href="/betterment" accent="violet" />
          </div>
        </section>

        <section className="belief section-pad">
          <p className="eyebrow">What we believe</p>
          <h2>Useful before<br /><span>impressive.</span></h2>
          <div className="belief-copy"><p>Good technology shouldn’t demand your attention just because it can.</p><p>It should solve something real, respect the person using it, and quietly make life a little easier.</p><strong>That’s what we try to build.</strong></div>
        </section>

        <section className="ecosystem section-pad">
          <div className="section-intro"><p className="eyebrow">The ecosystem</p><h2>Explore TheMaskedBit</h2></div>
          <div className="tiles">
            <Link href="/tools" className="tile tile-green"><span>01 / Tools</span><h3>Products that solve everyday problems.</h3><b>NestContact →</b></Link>
            <Link href="/media" className="tile tile-amber"><span>02 / Media</span><h3>Ideas worth sharing.</h3><b>Coming together →</b></Link>
            <Link href="/betterment" className="tile tile-violet"><span>03 / Betterment</span><h3>Technology for better living.</h3><b>In exploration →</b></Link>
          </div>
        </section>

        <section className="finale section-pad">
          <BrandMark large />
          <h2>We’re just<br />getting started.</h2>
          <p>NestContact is our first step.<br />More useful things are taking shape.</p>
        </section>
      </main>
    </PageShell>
  );
}
