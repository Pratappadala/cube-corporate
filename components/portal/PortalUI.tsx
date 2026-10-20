import type {ReactNode} from 'react';import {projects,type Project} from '../../lib/portal';
export function Badge({status}:{status:string}){return <span className={'badge '+(/pending|progress/i.test(status)?'pending':'')}>{status}</span>}
export function Panel({children}:{children:ReactNode}){return <section className="panel">{children}</section>}
export function PageHeading({title,description,children}:{title:string;description:string;children?:ReactNode}){return <div className="topline"><div><h1>{title}</h1><p>{description}</p></div>{children}</div>}
export function Tabs({items,value,onChange}:{items:string[];value:string;onChange:(s:string)=>void}){return <div className="tabs">{items.map(t=><button key={t} className={t===value?'active':''} onClick={()=>onChange(t)}>{t}</button>)}</div>}
export function Progress({value}:{value:number}){return <div className="progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label="Project progress"><i style={{width:value+'%'}}/></div>}
export function ProjectRow({project:p}:{project:Project}){return <a className="project-row" href={'#project-'+projects.indexOf(p)}><img src={'/assets/'+p.img} alt="Project illustration"/><div><h3>{p.name}</h3><p>{p.category}</p><Progress value={p.progress}/></div><Badge status={p.status}/></a>}
export function DataTable({headers,children}:{headers:string[];children:ReactNode}){return <div className="table-wrap"><table><thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{children}</tbody></table></div>}
