import { products } from "../data";
import { InteriorPage } from "../ui";

export const metadata = { title: "Tools" };

export default function Tools() {
  return (
    <InteriorPage
      eyebrow="01 / Tools"
      title="Technology built for real needs."
      intro="Tools includes our own products and selected service projects created for organisations."
    >
      <section className="tools-list section-pad">
        {products.map((item, index) => {
          const content = (
            <>
              <span className="tool-number">0{index + 1}</span>
              <div>
                <p className="eyebrow">{item.kind}</p>
                <h2>{item.name}</h2>
              </div>
              <p>{item.description}</p>
              <b>{item.href ? "View project ↗" : "Service project"}</b>
            </>
          );

          return item.href ? (
            <a className="tool-row" href={item.href} key={item.name}>{content}</a>
          ) : (
            <article className="tool-row" key={item.name}>{content}</article>
          );
        })}
      </section>
    </InteriorPage>
  );
}
