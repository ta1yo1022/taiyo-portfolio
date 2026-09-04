import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP=Noto_Sans_JP({variable:'--font-noto-sans-jp',weight:'variable',display:'swap',preload:false});
export const metadata:Metadata={metadataBase:new URL('https://taiyo-mizuno-portfolio.ta1yo1022.chatgpt.site'),title:'水野太陽',description:'水野太陽のポートフォリオ',openGraph:{title:'水野太陽',description:'水野太陽のポートフォリオ',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'水野太陽のポートフォリオ'}]},twitter:{card:'summary_large_image',title:'水野太陽',description:'水野太陽のポートフォリオ',images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja" className="scroll-smooth motion-reduce:scroll-auto"><body className={`${notoSansJP.variable} m-0 bg-white text-neutral-950 [font-family:var(--font-noto-sans-jp),sans-serif]`}>{children}</body></html>}
