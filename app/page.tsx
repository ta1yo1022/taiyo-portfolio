import { ArrowUpRight, BrainCircuit, Code2, Mail, PanelsTopLeft, Play } from 'lucide-react';
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
  ['セトフラ', 'YouTube', 'https://youtu.be/ehUx2IxKy2Q?si=3tnm_5b3X2_F9IQS'],
  ['SDGs探究Library', 'Interview', 'https://sdgs-awards.umedai.jp/library/2025/11/06/interview-nara-wu-secondary-school/'],
  ['U-22プログラミング・コンテスト', 'Presentation', 'https://youtu.be/fOKbw1ndCqg?si=_JrmEFevKuMr2_AV'],
];

function SectionTitle({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{children}</h2>{description && <p>{description}</p>}</div>;
}

export default function Home() {
  return <main id="top">
    <header className="header shell">
      <a className="mini-profile" href="#top"><img src="/taiyo.jpg" alt=""/><strong>水野 太陽</strong></a>
      <nav aria-label="メインナビゲーション"><a href="#achievements">実績</a><a href="#skills">できること</a><a href="#projects">制作</a></nav>
      <a className="contact-link" href="mailto:mizuno.taiyo.sub@gmail.com">相談する <ArrowUpRight size={16}/></a>
    </header>

    <section className="hero shell">
      <img className="avatar" src="/taiyo.jpg" alt="水野太陽のアイコン"/>
      <div className="hero-content">
        <p className="role">STUDENT CREATOR · NARA, JAPAN</p>
        <h1>水野 太陽</h1>
        <p className="hero-en">TAIYO MIZUNO</p>
        <p className="hero-copy">身の回りの不便を見つけ、Web・AI・プロダクトで解決する学生クリエイター。<br/>つくるだけで終わらせず、使われるところまで届けます。</p>
        <div className="hero-actions"><a className="button primary" href="#achievements">実績を見る</a><a className="button secondary" href="mailto:mizuno.taiyo.sub@gmail.com"><Mail size={16}/> 仕事を相談する</a></div>
      </div>
    </section>

    <section className="section shell" id="achievements">
      <SectionTitle eyebrow="ACHIEVEMENTS" description="これまでの主な受賞・採択実績">実績</SectionTitle>
      <div className="achievement-grid">
        {achievements.map(([year, title, result], index) => <Card className={`achievement-card ${index < 3 ? 'featured' : ''}`} key={`${title}-${result}`}>
          <CardHeader><span className="year">{year}</span><CardTitle>{title}</CardTitle></CardHeader>
          <CardContent><p>{result}</p></CardContent>
        </Card>)}
      </div>
    </section>

    <section className="section muted" id="skills"><div className="shell">
      <SectionTitle eyebrow="WHAT I DO" description="制作・開発のご相談を受け付けています">できること</SectionTitle>
      <div className="work-grid">{work.map(({icon: Icon,title,text}) => <Card className="work-card" key={title}>
        <CardHeader><div className="service-icon"><Icon size={22}/></div><CardTitle>{title}</CardTitle><CardDescription>{text}</CardDescription></CardHeader>
      </Card>)}</div>
      <div className="skill-tags">{['Web Development','App Development','AI / ML','Product Design','Prototyping','Presentation','Project Leadership'].map(tag=><span key={tag}>{tag}</span>)}</div>
    </div></section>

    <section className="section shell" id="projects">
      <SectionTitle eyebrow="PROJECTS" description="いま取り組んでいるプロジェクト">つくっているもの</SectionTitle>
      <div className="project-grid">{projects.map(([type,title,text])=><Card className="project-card" key={title}><CardHeader><span className="type">{type}</span><CardTitle>{title}</CardTitle><CardDescription>{text}</CardDescription></CardHeader></Card>)}</div>
    </section>

    <section className="section shell profile-section">
      <SectionTitle eyebrow="PROFILE">プロフィール</SectionTitle>
      <div className="profile-card"><div><img src="/taiyo.jpg" alt="水野太陽"/><div><h3>水野 太陽</h3><p>奈良女子大学附属中等教育学校</p></div></div><p>プログラミングを軸に、プロダクト開発と起業準備に取り組んでいます。2024年度は前期課程生徒会長、2025年度は後期課程副生徒会長を務めました。</p></div>
    </section>

    <section className="section shell media-section">
      <SectionTitle eyebrow="MEDIA">メディア</SectionTitle>
      <div className="media-grid">{media.map(([title,type,url])=><a href={url} target="_blank" rel="noreferrer" key={title}><Play size={16} fill="currentColor"/><div><strong>{title}</strong><span>{type}</span></div><ArrowUpRight size={17}/></a>)}</div>
    </section>

    <footer><div className="shell footer-inner"><img src="/taiyo.jpg" alt=""/><h2>一緒につくりませんか？</h2><p>Webサイト、アプリ、AI活用など、お気軽にご相談ください。</p><a className="button light" href="mailto:mizuno.taiyo.sub@gmail.com?subject=制作・開発のご相談"><Mail size={16}/> mizuno.taiyo.sub@gmail.com</a><div className="copyright"><span>© 2026 TAIYO MIZUNO</span><a href="#top">上に戻る ↑</a></div></div></footer>
  </main>;
}
