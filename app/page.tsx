import { ArrowUpRight, BrainCircuit, Code2, Mail, PanelsTopLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  ['2026', '自由すぎる研究EXPO2026', '入選'],
  ['2025', 'U-22プログラミング・コンテスト', '経済産業省商務情報政策局長賞（テクノロジー部門）／ピーエスシー賞／PCAクラウド賞'],
  ['2025', 'アプリ甲子園', 'ファイナリスト'],
  ['2025', 'IPA セキュリティ・キャンプ', 'ジュニア採択'],
  ['2025', 'AKATSUKIプロジェクト ORANGE AI', '採択'],
  ['2025', 'サイエンスキャッスルジャパン', '優秀ポスター賞'],
  ['2025', 'OPAプログラミングコンテスト', '優秀賞'],
  ['2025', 'ライフイズテック レッスンコンテスト 夏の部', '優秀賞'],
  ['2025', '奈良県児童・生徒発明くふう展', 'NHK奈良放送局長賞'],
  ['2025', '全日本学生児童発明くふう展', '入選'],
  ['2025', '中学生「税についての作文」', '奈良県納税貯蓄組合総連合会 会長賞'],
  ['2025', '一条杯 奈良県中学校英語レシテーションコンテスト', '4位'],
  ['2025', 'グローバルサイエンティストアワード「夢の翼」', '奨励賞'],
  ['2025', 'ライフイズテックコンテスト', '身の回りの問題解決部門 優秀賞'],
  ['2024', '未踏ジュニア', '採択／スーパークリエータ認定'],
  ['2024', 'WIPO Show and Tell プレゼンテーションコンテスト', 'ファイナリスト'],
  ['2024', 'SDGs探究AWARDS', '企画・アイデア部門 優秀賞'],
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
        {achievements.map(([year, title, result], index) => <Card className={`min-h-[180px] border-0 bg-white text-neutral-950 shadow-none ring-1 ring-black/10 transition duration-200 motion-reduce:transition-none hover:-translate-y-[3px] hover:shadow-[0_14px_38px_rgba(0,0,0,.07)] max-md:min-h-40 ${index < 3 ? 'bg-neutral-950 text-white ring-neutral-950' : ''}`} key={`${title}-${result}`}>
          <CardHeader className="gap-5"><span className={`${label} ${index < 3 ? 'text-neutral-400' : ''}`}>{year}</span><CardTitle className="text-[17px] leading-normal tracking-[-.02em]">{title}</CardTitle></CardHeader>
          <CardContent className="mt-auto"><p className={`m-0 text-[13px] leading-relaxed ${index < 3 ? 'text-neutral-400' : 'text-neutral-600'}`}>{result}</p></CardContent>
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

    <section className="bg-neutral-100 py-24 max-md:py-[74px]" id="skills"><div className={shell}>
      <SectionTitle eyebrow="WHAT I DO" description="制作・開発のご相談を受け付けています">できること</SectionTitle>
      <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">{work.map(({icon: Icon,title,text}) => <Card className="min-h-[250px] border-0 bg-white text-neutral-950 shadow-none ring-1 ring-black/10 max-md:min-h-[220px]" key={title}>
        <CardHeader className="gap-[18px]"><div className="grid size-11 place-items-center rounded-full bg-neutral-950 text-white"><Icon size={22}/></div><CardTitle className="mt-5 text-xl tracking-[-.025em]">{title}</CardTitle><CardDescription className="leading-[1.8] text-neutral-600">{text}</CardDescription></CardHeader>
      </Card>)}</div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">{['Web Development','App Development','AI / ML','Product Design','Prototyping','Presentation','Project Leadership'].map(tag=><span className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs" key={tag}>{tag}</span>)}</div>
    </div></section>
  </main>;
}
