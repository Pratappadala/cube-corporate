import {PageSections} from "../../components/site/PageSections";
import '../site.css';import '../pages.css';import {pages} from '../../lib/pages';import {SiteShell} from '../../components/site/SiteShell';import {notFound} from 'next/navigation';
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=pages[slug as keyof typeof pages];return {title:p?.title,description:p?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=pages[slug as keyof typeof pages];if(!p)notFound();const Content=p.Content;return <SiteShell><main><section className="page-hero"><div className="crumb"><a href="/index.html">Home</a> / {p.title}</div><h1>{p.title}</h1><p>{p.description}</p></section><Content/><PageSections slug={slug}/><section className="page-cta"><h2>Let’s shape your next chapter.</h2><a className="button" href="/contact.html">Book a consultation</a></section></main></SiteShell>}
