import { BrandMark, InteriorPage } from "../ui";

export const metadata = { title: "About" };

export default function About() {
  return (
    <InteriorPage
      eyebrow="About TheMaskedBit"
      title="Meaningful technology often begins unseen."
      intro="TheMaskedBit is a technology and creative company working across tools, media and betterment."
    >
      <section className="vision section-pad">
        <div className="vision-mark">
          <BrandMark large />
          <span>Our mark</span>
        </div>
        <div className="vision-story">
          <p className="vision-lead">Technology is built from things we rarely see.</p>
          <p className="vision-beat">Bits. Signals. Code. Ideas working quietly beneath the surface.</p>
          <p>TheMaskedBit exists in that hidden layer—turning small ideas into technology that makes a visible difference.</p>
          <h2>What our mark means.</h2>
          <p>The circle is the digital world. The three forms within it represent ideas becoming signals, signals becoming products, and products creating impact.</p>
          <p>The rising central form represents the idea that breaks through.</p>
          <p>Because some of the most meaningful technology begins with something incredibly small.</p>
          <strong>A bit.<br />An idea.<br />A possibility.</strong>
        </div>
      </section>
    </InteriorPage>
  );
}
