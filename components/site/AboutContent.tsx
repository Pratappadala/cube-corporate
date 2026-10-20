import {CaribbeanMap} from "./CaribbeanMap";
import { Card } from '../ui/Card';
const values = [
  { title: 'Integrity', icon: '◇', text: 'Bring a responsible, transparent approach to every discussion and decision.' },
  { title: 'Excellence', icon: '✧', text: 'Focus on clear thinking, considered recommendations and practical outcomes.' },
  { title: 'Collaboration', icon: '◎', text: 'Connect stakeholder needs and specialist perspectives around a shared objective.' },
  { title: 'Client focus', icon: '♧', text: 'Start with your priorities and shape the next steps around your organisation.' },
];
const steps = [
  ['Understand', 'Define your objectives, operating needs and expansion priorities.'],
  ['Evaluate', 'Assess options against agreed criteria and stakeholder requirements.'],
  ['Establish', 'Coordinate the roadmap, responsibilities and implementation milestones.'],
  ['Evolve', 'Keep governance and growth aligned as your operations develop.'],
];
function SectionHeading({label,title,text}:{label:string;title:string;text?:string}) {
  return <div className="about-heading"><div className="eyebrow">{label}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
function LeadershipSection() {
  return <section className="about-block" id="leadership" aria-labelledby="leadership-title">
    <div className="about-heading"><div className="eyebrow">THE PEOPLE BEHIND THE PERSPECTIVE</div><h2 id="leadership-title">Our Leadership Team</h2><p>Meet the people who will guide the conversation, connect perspectives and shape your next chapter.</p></div>
    <div className="about-team-grid">{[1,2,3,4].map(n=><Card className="about-person reveal" key={n}>
      <div className="about-portrait" aria-hidden="true"><svg viewBox="0 0 180 180"><circle cx="90" cy="67" r="29"/><path d="M32 164c0-43 21-64 58-64s58 21 58 64"/></svg><span>PROFILE {String(n).padStart(2,'0')}</span></div>
      <div className="about-person-copy"><h3>Profile forthcoming</h3><p>Name, role and biography to be confirmed.</p></div>
    </Card>)}</div>
    <p className="about-editorial-note">Design preview: leadership names, portraits and biographies are awaiting client confirmation.</p>
  </section>;
}
function GlobalPresenceSection() {
  return <section className="about-block about-presence" id="global-presence">
    <SectionHeading label="GLOBAL AMBITION. LOCAL PERSPECTIVE." title="Our Global Perspective" text="Connecting enterprise ambitions with a considered path to Caribbean market entry."/>
    <CaribbeanMap/>
    <div className="about-presence-grid"><div><span>01 / MARKET FOCUS</span><h3>The Caribbean</h3><p>Explore jurisdictions and operating conditions against your business priorities.</p><a href="/caribbean.html">Explore the region </a></div><div><span>02 / ENTERPRISE OUTLOOK</span><h3>Global operations</h3><p>Connect your GCC or IDC plans with the wider needs of your organisation.</p><a href="/gcc-idc.html">Explore GCC & IDC support </a></div><div><span>03 / LOCAL UNDERSTANDING</span><h3>Jurisdiction insight</h3><p>Bring governance, talent and infrastructure considerations into the decision.</p><a href="/market-entry.html">Explore market entry </a></div></div>
    <p className="about-editorial-note">Verified office locations and contact details will be added once confirmed. The map illustrates market focus, not an office network.</p>
  </section>;
}
export function AboutContent(){return <section className="page-body about-page">
  <nav className="about-section-nav" aria-label="About page sections"><a href="#our-story">Our story</a><a href="#our-values">Our values</a><a href="#leadership">Our team</a><a href="#global-presence">Global perspective</a><a href="#approach">Our approach</a><a href="#careers">Careers</a></nav>
  <section className="content-split about-story" id="our-story"><div><div className="eyebrow">OUR STORY</div><h2>Your Global Partner<br/>in Corporate Success</h2><p>Cube Corporate supports global enterprises exploring, establishing and scaling a presence in the Caribbean. Our approach brings strategy, corporate structure, governance and operational priorities into one connected conversation.</p><p>We start with your objectives and build a considered path towards your next stage of growth.</p><a className="textlink" href="/services.html">Explore our expertise </a></div><figure><img src="/assets/team.jpg" alt="Illustrative photograph of professionals collaborating"/><figcaption>Shared perspective. A clearer path forward.</figcaption></figure></section>
  <section className="about-block" id="our-values"><SectionHeading label="WHAT GUIDES US" title="Our Values" text="A considered approach begins with the principles behind every decision."/><div className="about-four-grid">{values.map(v=><Card className="page-card about-value reveal" key={v.title}><span className="about-value-icon" aria-hidden="true">{v.icon}</span><h3>{v.title}</h3><p>{v.text}</p></Card>)}</div></section>
  <section className="about-purpose"><div><div className="eyebrow">OUR PURPOSE</div><h2>Clarity for your next chapter.</h2></div><p>Bring the right questions, perspectives and priorities together—so your organisation can move from possibility to a practical plan.</p></section>
  <LeadershipSection/>
  <GlobalPresenceSection/>
  <section className="about-block" id="approach"><SectionHeading label="CLARITY AT EVERY STEP" title="From possibility to presence" text="A connected journey, with a clear next step at every stage."/><div className="about-four-grid">{steps.map(([title,text],i)=><Card className="page-card about-step reveal" key={title}><div className="eyebrow">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
  <section className="about-careers content-split" id="careers"><img src="/assets/office.jpg" alt="Illustrative contemporary workspace" loading="lazy"/><div><div className="eyebrow">GROW WITH PURPOSE</div><h2>Be part of our next chapter.</h2><p>Clear thinking. Collaborative spirit. A curiosity about business beyond borders. Explore the careers page for future opportunities with Cube Corporate.</p><a className="button" href="/careers.html">Explore careers </a><p className="about-editorial-note">Current vacancies are awaiting confirmation.</p></div></section>
</section>}
