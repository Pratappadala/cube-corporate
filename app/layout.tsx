import type {Metadata} from 'next';
export const metadata:Metadata={title:{default:'Cube Corporate',template:'%s — Cube Corporate'},description:'Corporate advisory, Caribbean market entry and GCC / IDC establishment.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
