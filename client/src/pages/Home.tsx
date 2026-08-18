/* Editorial Property Journal direction: image-led storytelling, warm ivory canvas, deep green trust anchors, serif headlines, restrained motion. */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react";

const images = {
  hero: "/manus-storage/P01_Hero_01_cfba4e24.jpg",
  living: "/manus-storage/P02_Hero_d3012f25.jpg",
  lounge: "/manus-storage/P03_Hero_55c7f728.jpg",
  kitchen: "/manus-storage/P04_Hero_04af7b2c.png",
  dining: "/manus-storage/P05_Hero_01_3bb513ac.png",
  artwork: "/manus-storage/P01_Detail_Artwork_ed7ac36d.png",
  lamp: "/manus-storage/P03_Detail_Lamp_f43e5a28.png",
  stillLife: "/manus-storage/stage-stay-still-life_398faacf.jpg",
};

const faqs = [
  {
    question: "Is the styling service really free?",
    answer: "If the property sells and the agreed referral fee is paid by the agent, no styling fee is payable under the signed agreement.",
  },
  {
    question: "Do I need to pay anything upfront?",
    answer: "No upfront styling payment is charged while the sale proceeds, subject to the terms of the signed Home Styling Service Agreement.",
  },
  {
    question: "When could a fee apply?",
    answer: "A fee may apply if the client withdraws from the sale or another event defined as Withdrawal from Sale occurs under the agreement.",
  },
  {
    question: "What does the styling service include?",
    answer: "The agreed scope may include furniture and decor placement, spatial staging and preparation for listing photography.",
  },
  {
    question: "Does styling guarantee a faster sale or a higher price?",
    answer: "No result is guaranteed. Professional styling is intended to improve presentation and support the property’s marketing campaign.",
  },
];

function SectionMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-marker">
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Stage and Stay home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-wordmark">Stage <i>&amp;</i> Stay</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#service" onClick={closeMenu}>Styling scope</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a consultation <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal-up">
            <SectionMarker number="01" label="Professional home styling / Sydney" />
            <h1>Sell your home<br />with <em>confidence.</em></h1>
            <p className="hero-lede">Professional home styling aligned with your property sale — without upfront styling payment while the sale proceeds.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Check your eligibility <ArrowRight size={16} /></a>
              <a className="text-link" href="#how-it-works">How it works <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-proof"><span className="proof-line" /> <span>If your home sells, styling is free.*</span></div>
          </div>
          <div className="hero-visual reveal-in">
            <img src={images.hero} alt="Light-filled living and dining room styled for sale" />
            <div className="image-caption"><span>Project 01</span><span>Living &amp; Dining</span></div>
          </div>
          <div className="hero-side-note">Sydney’s property presentation studio<br /><span>Scroll to explore</span></div>
        </section>

        <section className="statement-band">
          <div className="section-pad statement-grid">
            <SectionMarker number="02" label="The Stage and Stay promise" />
            <div>
              <h2>Your home sells.<br /><em>We succeed.</em></h2>
              <p>When your property sells and the agreed referral fee is paid, no styling fee is payable under the agreement. Our success is connected to the same outcome you are working toward: a completed sale.</p>
            </div>
            <div className="statement-aside"><span>Clear terms</span><span>Considered spaces</span><span>One shared outcome</span></div>
          </div>
        </section>

        <section className="value-section section-pad">
          <div className="section-heading">
            <SectionMarker number="03" label="Why sellers choose the structure" />
            <div className="heading-copy"><h2>A clearer value<br /><em>at first glance.</em></h2><p>Stage and Stay is designed for sellers who want their property prepared with intention, without carrying an upfront styling payment while the sale proceeds.</p></div>
          </div>
          <div className="value-list">
            <div className="value-item"><span>01</span><h3>Conditional free styling</h3><p>If the property sells and the agreed referral fee is paid, styling is free.</p></div>
            <div className="value-item"><span>02</span><h3>No upfront payment</h3><p>No upfront styling payment is charged while the sale proceeds.</p></div>
            <div className="value-item"><span>03</span><h3>Shared motivation</h3><p>Your agent and styling team are aligned around the completed sale.</p></div>
          </div>
        </section>

        <section className="portfolio-section section-pad" id="service">
          <div className="portfolio-intro"><SectionMarker number="04" label="Selected work / Royce Property Styling" /><h2>Every space tells<br /><em>a considered story.</em></h2><p>Real homes, directly styled. The landing page should let the work do the convincing.</p><a className="text-link" href="#contact">Start the conversation <ArrowRight size={16} /></a></div>
          <div className="portfolio-grid">
            <figure className="portfolio-main"><img src={images.living} alt="Styled living room project" /><figcaption><span>Project 02</span><strong>Living room</strong></figcaption></figure>
            <figure><img src={images.kitchen} alt="Styled kitchen and dining project" /><figcaption><span>Project 04</span><strong>Kitchen &amp; dining</strong></figcaption></figure>
            <figure><img src={images.dining} alt="Styled living room project" /><figcaption><span>Project 05</span><strong>Living room</strong></figcaption></figure>
          </div>
        </section>

        <section className="approach-section section-pad">
          <div className="approach-image"><img src={images.lounge} alt="Styled lounge and study room" /><span className="floating-label">Project 03 / Lounge &amp; Study</span></div>
          <div className="approach-copy"><SectionMarker number="05" label="The service in practice" /><h2>Styling prepares the property<br /><em>to be seen at its best.</em></h2><p>From furniture and decor placement to spatial staging and listing photography preparation, every element helps the property present with intention.</p><div className="detail-grid"><div><img src={images.artwork} alt="Artwork styling detail" /><span>Details create desire.</span></div><div><img src={images.lamp} alt="Lamp styling detail" /><span>Every object has a purpose.</span></div></div><div className="scope-note"><strong>The scope is defined by the agreement.</strong><span>Furniture quantities, rooms, timing and detailed work remain subject to property assessment and the signed agreement.</span></div></div>
        </section>

        <section className="process-section section-pad" id="how-it-works">
          <div className="section-heading"><SectionMarker number="06" label="How the service works" /><div className="heading-copy"><h2>A simple three-step<br /><em>customer journey.</em></h2><p>Turn a complex service structure into a clear sequence of actions, so the next step always feels obvious.</p></div></div>
          <div className="process-grid">
            <div className="process-step"><span>01 / Start</span><h3>Sign the<br />agreement</h3><p>Review the service scope and conditions, then sign the Home Styling Service Agreement.</p></div>
            <div className="process-arrow"><ArrowRight size={24} /></div>
            <div className="process-step tone-green"><span>02 / Prepare</span><h3>Style<br />and list</h3><p>Coordinate with your agent so styling and listing preparation happen together.</p></div>
            <div className="process-arrow"><ArrowRight size={24} /></div>
            <div className="process-step tone-terra"><span>03 / Success</span><h3>Sell<br />successfully</h3><p>When the property sells and the agreed referral fee is paid, styling is free.</p></div>
          </div>
        </section>

        <section className="synergy-section">
          <div className="section-pad synergy-grid">
            <div className="synergy-copy"><SectionMarker number="07" label="A coordinated sale" /><h2>Different expertise.<br /><em>One shared outcome.</em></h2><p>The agent leads the transaction. Stage and Stay prepares the property’s presentation. Together, the property goes to market ready to make a strong first impression.</p></div>
            <div className="synergy-diagram"><div className="role role-agent"><span>REAL ESTATE AGENT</span><h3>Transaction<br />expert</h3><p>Listing<br />Negotiation<br />Contracts &amp; settlement</p></div><div className="role-center"><span>SHARED GOAL</span><strong>Completed<br />sale</strong></div><div className="role role-styling"><span>STAGE AND STAY</span><h3>Presentation<br />expert</h3><p>Property presentation<br />Spatial styling<br />Photography readiness</p></div></div>
          </div>
        </section>

        <section className="trust-section section-pad">
          <div className="trust-copy"><SectionMarker number="08" label="Trust & transparency" /><h2>Clear terms build<br /><em>confidence.</em></h2><p>The “free” message should always be paired with a clear explanation of when a fee may apply.</p><div className="trust-quote">Clear terms.<br />Confident decisions.</div></div>
          <div className="trust-list"><div><span>01</span><div><h3>Service Fee Schedule</h3><p>The exact styling fee follows the schedule attached to the agreement and any individual quote.</p></div></div><div><span>02</span><div><h3>Withdrawal from Sale</h3><p>A sale withdrawal notice or another defined event may activate the fee conditions.</p></div></div><div><span>03</span><div><h3>14-day payment window</h3><p>Payment is generally due within 14 days of the relevant notice or event, subject to the agreement.</p></div></div><div><span>04</span><div><h3>The signed agreement comes first</h3><p>The signed Home Styling Service Agreement and applicable local laws take priority over page summaries.</p></div></div></div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="faq-intro"><SectionMarker number="09" label="Questions, answered" /><h2>FAQs turn hesitation<br />into a <em>conversation.</em></h2><p>Answer the questions customers ask first, so expectations around “free” and the signed agreement are clear.</p><img src={images.stillLife} alt="Styling detail with ceramic vase and linen" /></div>
          <div className="faq-list">{faqs.map((faq, index) => <div className={openFaq === index ? "faq-item is-open" : "faq-item"} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><ChevronDown size={20} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-copy"><SectionMarker number="10" label="Begin the conversation" /><h2>Prepare your property<br />to be seen at its <em>best.</em></h2><p>Start a professional home styling conversation as you prepare your property for market. We will guide the next step with your agent.</p><div className="contact-conditions"><strong>Clear terms before you proceed.</strong><span>If the property sells and the agreed referral fee is paid, styling is free. If you withdraw from the sale, a fee may apply under the signed agreement.</span></div></div>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="form-top"><h3>{submitted ? "Thank you." : "Start a conversation"}</h3><span>{submitted ? "ENQUIRY RECEIVED" : "01 / ENQUIRY"}</span></div>
            {submitted ? <div className="success-message"><Check size={30} /><p>Your enquiry has been received. Our team will be in touch to confirm availability and explain the agreement conditions.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={16} /></button></div> : <><div className="form-grid"><label>Name<input name="name" required /></label><label>Phone<input name="phone" type="tel" required /></label><label>Email<input name="email" type="email" required /></label><label>Property suburb<input name="suburb" /></label><label className="full">Property address<input name="address" /></label><label>Real estate agent name<input name="agent" /></label><label>Preferred contact time<input name="time" /></label><label className="full">Message<textarea name="message" rows={3} /></label></div><button className="button button-terra submit-button" type="submit">Submit enquiry <ArrowRight size={17} /></button></>}
            <p className="form-disclaimer">This page is a general summary only. The signed Home Styling Service Agreement and applicable local laws govern the service.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-wordmark">Stage <i>&amp;</i> Stay</span></a><p>Professional property styling, aligned with your sale.</p></div><div className="footer-links"><a href="#how-it-works">How it works</a><a href="#service">Styling scope</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div><div className="footer-note">Sydney, NSW<br /><span>© {new Date().getFullYear()} Stage &amp; Stay</span></div></footer>
    </div>
  );
}
