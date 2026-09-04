import { ArrowDown, ArrowUpRight, Mail, Play } from 'lucide-react';

const projects = [
  { no:'01', type:'AI / MOBILITY', title:'タクシー車内の\n忘れ物検知システム', body:'車内に残された物をAIで検知し、忘れ物を未然に防ぐ。AKATSUKIプロジェクト「ORANGE AI」で開発中。', meta:'ORANGE AI 採択' },
  { no:'02', type:'SCHOOL / SYSTEM', title:'図書館セルフ\n貸出システム', body:'学校生活の中にあった不便を、実際に使える仕組みへ。情報科の先生と導入に向けて進行中。', meta:'PRODUCT DESIGN & DEV' },
  { no:'03', type:'TOURISM / AI', title:'TASUKU', body:'外国人旅行者のスマホに「地元を知り尽くした友人」を。検索・予約・移動を多言語で支えるAIコンシェルジュ。', meta:'IN DEVELOPMENT' },
];

const services = [
  ['01','Webサイト制作','企画からデザイン、実装、公開後の運用まで。目的が伝わり、成果につながるサイトをつくります。'],
  ['02','Webアプリ・業務システム開発','身近な課題や業務の詰まりを整理し、使う人の現場に合った仕組みとして実装します。'],
  ['03','AI活用・プロトタイプ開発','アイデア検証のための小さな試作から、AIを組み込んだサービス設計まで伴走します。'],
];

const awards = [
  ['2026','自由すぎる研究EXPO2026','入選'],
  ['2025','U-22プログラミング・コンテスト2025','経済産業省商務情報政策局長賞（テクノロジー部門）／ピーエスシー賞／PCAクラウド賞'],
  ['2025','アプリ甲子園2025','ファイナリスト'], ['2025','IPA セキュリティ・キャンプ2025','ジュニア採択'],
  ['2025','AKATSUKIプロジェクト ORANGE AI','採択'], ['2025','サイエンスキャッスルジャパン2025','優秀ポスター賞'],
  ['2025','OPAプログラミングコンテスト2025','優秀賞'], ['2025','ライフイズテック レッスンコンテスト 夏の部','優秀賞'],
  ['2025','第82回 奈良県児童・生徒発明くふう展','NHK奈良放送局長賞'], ['2025','第84回 全日本学生児童発明くふう展','入選'],
  ['2025','中学生「税についての作文」','奈良県納税貯蓄組合総連合会 会長賞'], ['2025','第67回 一条杯 奈良県中学校英語レシテーションコンテスト','4位'],
  ['2025','グローバルサイエンティストアワード「夢の翼」','奨励賞'], ['2025','ライフイズテックコンテスト 身の回りの問題解決部門','優秀賞'],
  ['2024','未踏ジュニア','採択／スーパークリエータ認定'], ['2024','第2回 WIPO Show and Tell プレゼンテーションコンテスト','ファイナリスト'],
  ['2024','SDGs探究AWARDS 企画・アイデア部門','優秀賞'],
];

const media = [
  ['セトフラ','YouTube Interview','https://youtu.be/ehUx2IxKy2Q?si=3tnm_5b3X2_F9IQS'],
  ['SDGs探究Library','Interview','https://sdgs-awards.umedai.jp/library/2025/11/06/interview-nara-wu-secondary-school/'],
  ['U-22プログラミング・コンテスト','Presentation','https://youtu.be/fOKbw1ndCqg?si=_JrmEFevKuMr2_AV'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="水野太陽 ホーム">TAIYO<br/>MIZUNO</a>
      <nav aria-label="メインナビゲーション"><a href="#projects">PROJECTS</a><a href="#services">WORK WITH ME</a><a href="#profile">PROFILE</a></nav>
      <a className="header-contact" href="mailto:mizuno.taiyo.sub@gmail.com">CONTACT <ArrowUpRight size={15}/></a>
    </header>

    <section className="hero" id="top">
      <p className="eyebrow">STUDENT CREATOR / ENTREPRENEUR — NARA, JAPAN</p>
      <h1><span>課題を見つけ、</span><span className="outline-text">技術で動かす。</span></h1>
      <div className="hero-bottom">
        <div className="portrait-wrap"><img src="/taiyo.jpg" alt="水野太陽のイラスト"/></div>
        <div className="hero-copy"><p>水野 太陽</p><p className="en-name">TAIYO MIZUNO</p><p className="intro">身の回りの不便を見つけ、Web・AI・プロダクトで解決する学生クリエイター。つくるだけで終わらせず、人を巻き込み、現場に届けるところまで。</p><a className="text-link" href="#projects">SELECTED PROJECTS <ArrowDown size={15}/></a></div>
      </div>
    </section>

    <section className="statement" aria-label="ステートメント"><p>THINK.</p><p>BUILD.</p><p>DELIVER.</p><span>アイデアを、使われるものへ。</span></section>

    <section className="section" id="projects">
      <div className="section-heading"><span>01</span><h2>SELECTED<br/>PROJECTS</h2><p>技術を、現場へ。</p></div>
      <div className="project-list">{projects.map(p=><article className="project" key={p.no}><div className="project-no">{p.no}</div><div><p className="project-type">{p.type}</p><h3>{p.title.split('\n').map(line=><span key={line}>{line}</span>)}</h3></div><div className="project-detail"><p>{p.body}</p><span>{p.meta}</span></div></article>)}</div>
    </section>

    <section className="section inverse" id="services">
      <div className="section-heading"><span>02</span><h2>WORK<br/>WITH ME</h2><p>制作・開発のご相談を受付中です。</p></div>
      <div className="service-intro"><p>「こんなものがあったら」を、<br/>一緒に形にします。</p><p>Webサイト、アプリ、業務システム、AI活用。課題の整理からプロトタイプ、実装、運用まで、必要な範囲で柔軟に対応します。</p></div>
      <div className="services">{services.map(([no,title,body])=><article key={no}><span>{no}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <a className="big-cta" href="mailto:mizuno.taiyo.sub@gmail.com?subject=制作・開発のご相談"><span>相談してみる</span><span>LET&apos;S TALK <ArrowUpRight/></span></a>
    </section>

    <section className="section" id="profile">
      <div className="section-heading"><span>03</span><h2>PROFILE &<br/>SKILLS</h2><p>つくる力と、動かす力。</p></div>
      <div className="profile-grid"><div className="profile-lead"><p className="jp-name">水野 太陽</p><p className="en-name">TAIYO MIZUNO</p><p>奈良女子大学附属中等教育学校。プログラミングを軸に、プロダクト開発と起業準備に取り組む。未踏ジュニア2024スーパークリエータ。</p></div><div className="skills">{['WEB DEVELOPMENT','APP DEVELOPMENT','AI / MACHINE LEARNING','PRODUCT DESIGN','PROTOTYPING','PRESENTATION','PROJECT LEADERSHIP','COMMUNITY BUILDING'].map((skill,i)=><div key={skill}><span>{String(i+1).padStart(2,'0')}</span><p>{skill}</p></div>)}</div></div>
      <div className="leadership"><p>LEADERSHIP</p><div><span>2024</span><p>奈良女子大学附属中等教育学校<br/><strong>前期課程 生徒会長</strong></p></div><div><span>2025</span><p>奈良女子大学附属中等教育学校<br/><strong>後期課程 副生徒会長</strong></p></div></div>
    </section>

    <section className="section awards-section"><div className="section-heading"><span>04</span><h2>AWARDS &<br/>SELECTIONS</h2><p>主な受賞・採択実績</p></div><div className="awards">{awards.map(([year,title,result],i)=><div className="award-row" key={`${title}-${i}`}><span>{year}</span><p>{title}</p><strong>{result}</strong></div>)}</div></section>

    <section className="section media-section"><div className="section-heading"><span>05</span><h2>MEDIA</h2><p>掲載・出演</p></div><div className="media-list">{media.map(([title,type,url])=><a href={url} target="_blank" rel="noreferrer" key={title}><Play size={18} fill="currentColor"/><div><h3>{title}</h3><p>{type}</p></div><ArrowUpRight className="media-arrow"/></a>)}</div></section>

    <footer><p className="eyebrow">AVAILABLE FOR SELECTED PROJECTS</p><h2>つくりたいもの、<br/><span className="outline-text">聞かせてください。</span></h2><a href="mailto:mizuno.taiyo.sub@gmail.com"><Mail/> mizuno.taiyo.sub@gmail.com <ArrowUpRight/></a><div className="footer-bottom"><span>© 2026 TAIYO MIZUNO</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
