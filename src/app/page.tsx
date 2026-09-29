import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  title: "Orangessance — Culture is infrastructure",
  description:
    "Orangessance is the cultural strategy and operating company behind BASEbloc.app, which turns event check-ins into verified proof that your community showed up. Built on Base.",
  openGraph: {
    title: "Orangessance — Culture is infrastructure",
    description: "A cultural strategy and operating company rooted in Oakland and built to travel.",
    url: "https://www.orangessance.com",
    siteName: "Orangessance",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>

  <header><div className="wrap nav"><a className="brand" href="#top" aria-label="Orangessance home"><span className="orange">Orange</span><span className="black">ssance</span></a><nav aria-label="Main navigation"><ul><li className="hide"><a href="#approach">Approach</a></li><li className="hide"><a href="#work">What we do</a></li><li><a href="#basebloc">BASEbloc</a></li><li><a className="talk" href="mailto:andre@orangessance.com">Connect</a></li></ul></nav></div></header>
  <main id="top">
    <section className="hero"><div className="wrap hero-grid"><div><p className="location">OAKLAND, CALIFORNIA · BUILT TO TRAVEL</p><h1>Culture is infrastructure.</h1><p className="lede">Orangessance is the cultural strategy and operating company behind BASEbloc.app. We turn trusted relationships and live events into verified proof that your community showed up. Built on Base.</p><div className="actions"><a className="button primary" href="mailto:andre@orangessance.com">Work with us</a><a className="button quiet" href="#basebloc">Meet BASEbloc</a></div><div className="manifesto"><strong>Our work</strong><p>Build the reason people show up. Recognize the people who do. Create a stronger starting point for what comes next.</p></div></div><div className="pass-stack" role="img" aria-label="Illustrative BASEbloc attendance pass, stacked on top of passes from earlier events">
          <div className="ghost g2" aria-hidden="true"><span>Charity walk</span><span>Verified</span></div>
          <div className="ghost g1" aria-hidden="true"><span>Neighborhood showcase</span><span>Verified</span></div>
          <div className="pass-shadow"><div className="pass">
            <div className="pass-top">
              <div className="pass-head"><b>BASEbloc.app</b><span className="stamp" aria-hidden="true"><svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3L13 4.5" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /></svg></span></div>
              <p className="kind">Verified attendance</p>
              <h2>You were there.</h2>
              <div className="pass-event"><span>Event</span><span className="r">Where</span><strong>Community gathering</strong><strong className="r">Oakland, CA</strong></div>
            </div>
            <div className="pass-bottom">
              <div className="holder"><span>Guest</span><strong>you.base.eth</strong></div>
              <div className="chips"><span className="chip"><i></i>Verified</span><span className="chip" style={{"--c": "var(--orange)"} as React.CSSProperties}><i></i>Passkey</span><span className="chip"><i></i>Base</span></div>
            </div>
          </div></div>
          <p className="caption">Illustrative example. Every event adds to the stack.</p>
        </div></div></section>
    <div className="ribbon" aria-hidden="true"><div className="ribbon-track"><span>Culture is infrastructure</span><span>Participation should count</span><span>Trust is the starting point</span><span>Oakland roots, wider reach</span><span>Build what people return to</span><span>Culture is infrastructure</span><span>Participation should count</span><span>Trust is the starting point</span><span>Oakland roots, wider reach</span><span>Build what people return to</span></div></div>
    {/* PROOF STRIP: add before launch. Real, verifiable numbers only (check-ins verified, events hosted), plus one named organizer quote with permission. */}
    <section id="approach" className="thesis"><div className="wrap"><p className="eyebrow">The Orangessance approach</p><div className="statement"><div><h2>People are the foundation.</h2><p className="quote">Not the last mile.</p></div><div className="copy"><p>Communities create the culture, fill the rooms, and carry the story forward. Too often, though, they are treated as an audience to reach rather than <strong>a foundation to recognize, organize, and support.</strong></p><p>Orangessance helps organizers and institutions build with people—not around them—so each activation can create more trust, more insight, and more possibility for the next one.</p></div></div><div className="rule"></div><div className="principles"><article className="principle"><b>01 / EARN TRUST</b><p>Start with lived relationships and a reason people can believe in.</p></article><article className="principle"><b>02 / CREATE MOMENTUM</b><p>Design real experiences that turn interest into participation.</p></article><article className="principle"><b>03 / CARRY IT FORWARD</b><p>Give participation a useful record and a meaningful next step.</p></article></div></div></section>
    <section id="thesis" className="rails"><div className="wrap"><p className="eyebrow">The thesis</p><h2>Culture is infrastructure.</h2><blockquote>Culture without tech can’t scale. Tech without culture can’t onboard everyone.</blockquote><p className="rails-copy">The tech is ready. Passkeys replaced seed phrases, and Base made onchain activity fast and low-cost. What&apos;s missing is the cultural trust that gives people a reason to show up. Orangessance builds both sides of that bridge.</p></div></section>
    <section id="work" className="work"><div className="wrap"><p className="eyebrow">What we do</p><h2>We build the conditions for participation to last.</h2><p className="intro">Our work connects cultural strategy, activation, and practical operating infrastructure—so the value created in a room does not disappear when the event ends.</p><div className="cards"><article className="card" style={{"--accent": "var(--blue)"} as React.CSSProperties}><span className="number">01</span><h3>Cultural strategy</h3><p>We help organizers and institutions earn attention and trust through credible storytelling, local relationships, and opportunities people actually want to join.</p><p className="detail">STRATEGY · STORYTELLING · COALITION DESIGN</p></article><article className="card" style={{"--accent": "var(--orange)"} as React.CSSProperties}><span className="number">02</span><h3>Activation</h3><p>We create gatherings and campaigns with a clear reason to show up, a real experience once people arrive, and a path to follow through.</p><p className="detail">EVENTS · CAMPAIGNS · COMMUNITY FOLLOW-UP</p></article><article className="card" style={{"--accent": "var(--ink)"} as React.CSSProperties}><span className="number">03</span><h3>Participation infrastructure</h3><p>We build systems that help organizations recognize regulars, learn from participation, and coordinate across a trusted coalition.</p><p className="detail">BASEBLOC · COALITION OPERATIONS · COMMUNITY INTELLIGENCE</p></article></div></div></section>
    <section id="basebloc" className="product"><div className="wrap product-grid"><div><p className="eyebrow">Flagship operating product</p><h2>BASEbloc makes showing up count.</h2><p className="intro">BASEbloc helps organizers, nonprofits, and community institutions recognize participation and carry a verified record from one activation to the next.</p><p className="product-proof">When people show up, it should count for more than a headcount.</p><div className="actions"><a className="button primary" href="https://basebloc.app">Explore BASEbloc.app</a></div><a className="verify" href="https://base.easscan.org/address/0x2E057B00Cbeccf3FF6b410daa2CC1F99DFF94E2d">Every check-in is public on Base. Verify it yourself</a></div><div className="who"><article><p className="tag">For hosts</p><h3>Know your regulars.</h3><p>Publish, sell or RSVP, and check people in—so the people most aligned with your work can be recognized first.</p></article><article><p className="tag">For communities</p><h3>Make participation visible.</h3><p>Sign in with a passkey, no wallet setup needed, and keep a record of every event you showed up for.</p></article><article><p className="tag">For coalitions</p><h3>Build from shared momentum.</h3><p>Connect participation across aligned activations without losing the relationships that make each community distinct.</p></article></div></div></section>
    <section className="roots"><div className="wrap roots-grid"><div><p className="eyebrow">Why Orangessance</p><h2>Rooted in Oakland. Designed for durable collaboration.</h2><p className="intro">Technology alone does not create belonging. People do. We pair practical systems with coalition collaborators who have decades of trust in Oakland&apos;s most underrepresented communities.</p><div className="markers"><div className="marker"><b>Base</b><span>Every record lives on Base mainnet</span></div><div className="marker"><b>Passkey</b><span>Guests sign in with no seed phrase</span></div><div className="marker"><b>Public</b><span>Every check-in verifiable onchain</span></div><div className="marker"><b>Coalition 001</b><span>BASE Oakland bloc</span></div></div></div><aside className="roots-note"><strong>Our standard</strong>Every project should leave a community with more trust, more connection, and more ability to act than it had before.</aside></div></section>
    <section className="close"><div className="wrap"><p className="eyebrow" style={{"color": "#c9d8ff"} as React.CSSProperties}>Start a conversation</p><h2>Build something people will come back to.</h2><p>Work with Orangessance to turn participation into a stronger foundation for what comes next.</p><div className="actions"><a className="button primary" href="mailto:andre@orangessance.com">Get in touch</a><a className="button quiet" href="https://basebloc.app">Explore BASEbloc.app</a></div></div></section>
  </main>
  <footer><div className="wrap foot"><a className="brand" href="#top"><span className="orange">Orange</span><span className="black">ssance</span></a><nav className="foot-nav" aria-label="Network links"><a href="https://basebloc.org">BASEbloc.org</a><a href="https://basebloc.app">BASEbloc.app</a><a href="https://baseoak.org">BASEoak.org</a><a href="https://baseiq.app">BASEiq.app</a></nav><span>© 2026 Orangessance · Oakland, CA<br /><span className="tagline">Built on Base · Powered by AI · For everyone.</span></span></div></footer>

    </>
  );
}
