import { ArrowUpRight, BrainCircuit, Code2, Mail, PanelsTopLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  { year: '2026', title: '自由すぎる研究EXPO2026', result: '入選', image: '/contests/free-research-expo.png' },
  { year: '2025', title: 'U-22プログラミング・コンテスト', result: '経済産業省商務情報政策局長賞（テクノロジー部門）／ピーエスシー賞／PCAクラウド賞', image: '/contests/images (5).jpeg' },
  { year: '2025', title: 'アプリ甲子園', result: 'ファイナリスト', image: '/contests/maxresdefault (1).jpg' },
  { year: '2025', title: 'IPA セキュリティ・キャンプ', result: 'ジュニア採択', image: '/contests/security-camp_logo.jpg' },
  { year: '2025', title: 'AKATSUKIプロジェクト ORANGE AI', result: '採択', image: '/contests/images (6).jpeg' },
  { year: '2025', title: 'サイエンスキャッスルジャパン', result: '優秀ポスター賞', image: '/contests/pic_250513_Science_01.jpg' },
  { year: '2025', title: 'OPAプログラミングコンテスト', result: '優秀賞', image: '/contests/images.png' },
  { year: '2025', title: 'ライフイズテック レッスンコンテスト 夏の部', result: '優秀賞', image: '/contests/c1f954c0-7855-4ab6-a9a7-1d0c9b2a6b80.png' },
  { year: '2025', title: '奈良県児童・生徒発明くふう展', result: 'NHK奈良放送局長賞', image: '/contests/IMG_1138-1200x900.jpg' },
  { year: '2025', title: '全日本学生児童発明くふう展', result: '入選' },
  { year: '2025', title: '中学生「税についての作文」', result: '奈良県納税貯蓄組合総連合会 会長賞' },
  { year: '2025', title: '一条杯 奈良県中学校英語レシテーションコンテスト', result: '4位' },
  { year: '2025', title: 'グローバルサイエンティストアワード「夢の翼」', result: '奨励賞', image: '/contests/images (7).jpeg' },
  { year: '2024', title: '未踏ジュニア', result: '採択／スーパークリエータ認定', image: '/contests/images (8).jpeg' },
  { year: '2024', title: 'WIPO Show and Tell プレゼンテーションコンテスト', result: 'ファイナリスト', image: '/contests/hr-kyujin-top.png' },
  { year: '2024', title: 'SDGs探究AWARDS', result: '企画・アイデア部門 優秀賞', image: '/contests/images (1).png' },
];

const work = [
  { icon: PanelsTopLeft, title: 'Webサイト制作', text: '企画・デザイン・実装から、公開後の運用まで。目的が伝わるサイトをつくります。' },
  { icon: Code2, title: 'Webアプリ・システム開発', text: '身近な課題や業務の不便を整理し、使う人に合った仕組みとして実装します。' },
  { icon: BrainCircuit, title: 'AI・プロトタイプ開発', text: 'アイデアを素早く試せる形に。AIを活用したサービス設計にも対応します。' },
];

const projects = [
  ['AI / MOBILITY', 'タクシー車内の忘れ物検知システム', '車内の忘れ物をAIで検知。ORANGE AIで開発中。'],
  ['SCHOOL / SYSTEM', '図書館セルフ貸出システム', '学校で見つけた不便を、実際に使える仕組みへ。'],
  ['TOURISM / AI', 'TASUKU', '外国人旅行者を多言語で支えるAIコンシェルジュ。'],
];

const media = [
  ['セトフラ', 'YouTube', 'https://youtu.be/ehUx2IxKy2Q?si=3tnm_5b3X2_F9IQS', '/media-setofura.png', '「ORENGE AI」参加者から2人目のゲスト　奈良女子大学附属中3年生のエンジニア　水野太陽'],
  ['SDGs探究Library', 'Interview', 'https://sdgs-awards.umedai.jp/library/2025/11/06/interview-nara-wu-secondary-school/', '/media-sdgs.jpg', '奈良女子大学附属中等教育学校 水野太陽さん 技術で繋ぐ地域の輪。「みまもりコンパス」で認知症徘徊問題に挑む中学生エンジニアの挑戦'],
];

const shell = 'mx-auto w-[calc(100%_-_40px)] max-w-[1080px] max-md:w-[calc(100%_-_28px)]';
const label = 'text-[11px] tracking-[.08em] text-neutral-500';
const pill = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors';

function SectionTitle({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) {
  return <div className="mb-11 text-center">
    <span className={label}>{eyebrow}</span>
    <h2 className="my-2.5 text-[clamp(2rem,4vw,3rem)] leading-tight font-bold tracking-[-.045em]">{children}</h2>
    {description && <p className="m-0 text-sm text-neutral-500">{description}</p>}
  </div>;
}

export default function Home() {
  return <main id="top" className="bg-white text-neutral-950">
    <section className={`${shell} grid grid-cols-[minmax(220px,310px)_minmax(0,1fr)] items-center gap-[clamp(52px,8vw,110px)] pt-[108px] pb-[116px] max-md:grid-cols-[116px_minmax(0,1fr)] max-md:items-start max-md:gap-x-6 max-md:gap-y-2.5 max-md:pt-[70px] max-md:pb-[84px]`}>
      <img className="aspect-square w-full max-w-[310px] rounded-full border border-neutral-200 bg-neutral-100 object-cover max-md:row-span-3 max-md:w-[116px]" src="/taiyo.jpg" alt="水野太陽のアイコン"/>
      <div className="min-w-0 max-md:contents">
        <h1 className="my-3 text-[clamp(3.4rem,7vw,5.4rem)] leading-none font-bold tracking-[-.055em] max-md:col-start-2 max-md:m-0 max-md:text-[clamp(2.25rem,10vw,3.2rem)]">水野太陽</h1>
        <p className="m-0 text-[clamp(1.25rem,2vw,1.7rem)] font-semibold tracking-[.05em] max-md:col-start-2 max-md:text-[1.05rem]">TAIYO MIZUNO</p>
        <p className="mt-8 max-w-[620px] text-base leading-[1.9] text-neutral-600 max-md:col-span-full max-md:mt-5">WEBアプリ開発が好きです。たまにESP32とかArduinoを使ったりもします。</p>
        <div className="mt-5 flex items-center gap-3 max-md:col-span-full">
          <a className="inline-flex transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950" href="https://x.com/ta1yo1022" target="_blank" rel="noreferrer" aria-label="Xのta1yo1022ページを開く">
            <img className="size-5 invert" src="/x.svg" alt="" />
          </a>
          <a className="inline-flex transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950" href="https://www.instagram.com/ta1yo1022/" target="_blank" rel="noreferrer" aria-label="Instagramのta1yo1022ページを開く">
            <img className="size-[22px]" src="/instagram.svg" alt="" />
          </a>
          <span className="ml-1 text-xs font-medium text-neutral-500">@ta1yo1022</span>
        </div>
      </div>
    </section>

    <section className={`${shell} py-24 max-md:py-[74px]`} id="achievements">
      <SectionTitle eyebrow="ACHIEVEMENTS" description="これまでの主な受賞・採択実績">実績</SectionTitle>
      <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
        {achievements.map(({ year, title, result, image }) => <Card className="min-h-[330px] overflow-hidden border-0 bg-white py-0 text-neutral-950 shadow-none ring-1 ring-black/10 transition duration-200 motion-reduce:transition-none hover:-translate-y-[3px] hover:shadow-[0_14px_38px_rgba(0,0,0,.07)] max-md:min-h-0" key={`${title}-${result}`}>
          <div className="relative aspect-video overflow-hidden bg-neutral-100">
            {image ? <img className="size-full object-cover" src={image} alt={`${title}の画像`} /> : <div className="grid size-full place-items-center text-xs font-semibold tracking-[.16em] text-neutral-400">NO IMAGE</div>}
          </div>
          <CardHeader className="gap-2 pt-5"><span className="text-[11px] font-semibold tracking-[.08em] text-neutral-500">{year}年</span><CardTitle className="text-[17px] leading-normal tracking-[-.02em]">{title}</CardTitle></CardHeader>
          <CardContent className="mt-auto pb-5"><p className="m-0 text-[13px] leading-relaxed text-neutral-600">{result}</p></CardContent>
        </Card>)}
      </div>
    </section>


    <section className={`${shell} pt-8 pb-24 max-md:py-[74px]`}>
      <SectionTitle eyebrow="MEDIA">メディア</SectionTitle>
      <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">{media.map(([title, type, url, image, copy]) => <a className="group relative flex min-h-[380px] items-end overflow-hidden rounded-xl bg-neutral-950 text-white shadow-[0_1px_1px_rgba(0,0,0,.1),0_2px_2px_rgba(0,0,0,.1),0_4px_4px_rgba(0,0,0,.1),0_8px_8px_rgba(0,0,0,.1),0_16px_16px_rgba(0,0,0,.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 max-md:min-h-[360px]" href={url} target="_blank" rel="noreferrer" key={title}>
        <img className="absolute inset-x-0 top-0 h-[110%] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] group-hover:-translate-y-[4%] group-focus-visible:-translate-y-[4%] motion-reduce:transition-none" src={image} alt="" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90" />
        <div className="relative z-10 w-full p-6 text-left">
          <span className="mb-2 block text-[11px] font-semibold tracking-[.12em] text-white/70 uppercase">{type}</span>
          <h3 className="text-xl leading-snug font-bold tracking-[-.025em]">{title}</h3>
          <div className="grid grid-rows-[1fr] translate-y-0 opacity-100 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] md:grid-rows-[0fr] md:translate-y-4 md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100 motion-reduce:transition-none"><div className="overflow-hidden">
            <p className="mt-4 text-sm leading-[1.75] text-white/85">{copy}</p>
            <span className="mt-5 inline-flex items-center gap-2 bg-white px-4 py-2.5 text-xs font-bold tracking-[.04em] text-neutral-950">詳しく見る<ArrowUpRight size={15} /></span>
          </div></div>
        </div>
      </a>)}</div>
    </section>
  </main>;
}
