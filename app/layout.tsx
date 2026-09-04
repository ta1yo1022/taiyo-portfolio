import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP=Noto_Sans_JP({variable:'--font-noto-sans-jp',weight:'variable',display:'swap',preload:false});
export const metadata:Metadata={metadataBase:new URL('https://taiyo-mizuno-portfolio.ta1yo1022.chatgpt.site'),title:'水野太陽 — Student Creator / Entrepreneur',description:'身の回りの課題を見つけ、Web・AI・プロダクトで解決する学生クリエイター、水野太陽のポートフォリオ。制作・開発のご相談も受付中です。',openGraph:{title:'水野太陽 — 課題を見つけ、技術で動かす。',description:'学生クリエイター 水野太陽のポートフォリオ',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'水野太陽 — 課題を見つけ、技術で動かす。'}]},twitter:{card:'summary_large_image',title:'水野太陽 — 課題を見つけ、技術で動かす。',description:'学生クリエイター 水野太陽のポートフォリオ',images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body className={notoSansJP.variable}>{children}</body></html>}
