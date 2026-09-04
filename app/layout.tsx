import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans=Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata:Metadata={metadataBase:new URL('https://taiyo-mizuno-portfolio.ta1yo1022.chatgpt.site'),title:'水野太陽 — Student Creator / Entrepreneur',description:'身の回りの課題を見つけ、Web・AI・プロダクトで解決する学生クリエイター、水野太陽のポートフォリオ。制作・開発のご相談も受付中です。',openGraph:{title:'水野太陽 — 課題を見つけ、技術で動かす。',description:'学生クリエイター 水野太陽のポートフォリオ',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'水野太陽 — 課題を見つけ、技術で動かす。'}]},twitter:{card:'summary_large_image',title:'水野太陽 — 課題を見つけ、技術で動かす。',description:'学生クリエイター 水野太陽のポートフォリオ',images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
