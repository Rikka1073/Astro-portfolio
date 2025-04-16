export const personalInfo = {
  name: "Masafumi",
  location: "Ibaraki, Japan",
  email: "rkesh2003@gmail.com",
  github: "https://github.com/Rikka1073",
  linkedin: "https://qiita.com/masafumi1073",
};

export const workExperience = [
  {
    company: "金融サービス申込システム開発",
    location: "リモート",
    position: "フロントエンドエンジニア",
    period: "2024年10月 - 現在",
    achievements: [
      "大手保険会社のオンライン申込システム開発案件にフロントエンドエンジニアとして参画。",
      "Next.jsを使用したモダンなUIの設計・実装を担当。特にReact Hook Formを活用し、複雑な申込フォームにおける入力バリデーションシステムを構築。ユーザビリティと入力精度の向上を実現した。",
      "開発仕様書の作成など上流工程にも少しずつ携わり始め、要件理解のスキルを徐々に磨いている段階。",
    ],
  },
  {
    company: "教育情報サイト運用",
    location: "リモート",
    position: "運用エンジニア",
    period: "2021年5月 - 2024年3月",
    achievements: [
      "NORENというCMSを活用し、教育系情報サイトの運用業務に3年間従事。",
      "単なるコーディング作業にとどまらず、運用フロー全体の最適化にも取り組んだ。具体的には、サイト修正から本番公開までの週次フローを構築し、チームメンバー同士が常に案件の進行状況を共有できる体制を設計。複数作業者が同時に作業する際の修正もれや作業被りを防止するための管理シートも作成した。",
      "また、学習用教材のデモアプリをJavaScriptで開発し、ユーザーの学習体験向上に貢献。さらに、コーポレートサイトのリニューアルプロジェクトでは、構築からリリースまでを一貫して担当した。",
      "これらの取り組みを通じて、運用チーム全体の効率化とコミュニケーション向上に大きく貢献し、より質の高いサービス提供に寄与した。",
    ],
  },
];

export const education = [
  {
    institution: "経営学",
    location: "駒澤大学, 東京 日本",
    degree: "経営学",
    period: "2018年4月 - 2021年3月",
    achievements: [],
  },
];
export const skills = {
  programmingLanguages: ["TypeScript", "JavaScript"],
  frontendDevelopment: ["Nextjs", "Reactjs", "chakra-ui", "Tailwind CSS", "HTML", "CSS"],
  backendDevelopment: [],
  databaseAndStorage: [],
  cloudAndDevOps: ["AWS"],
  toolsAndServices: ["Clerk (Auth)", "microCMS (CMS)", "GitHub", "Vercel", "Supabase", "Firebase"],
};

export const projects = [
  {
    title: "アイドルの服装情報を共有できるアプリ",
    github: "https://github.com/Rikka1073/Typescript-idol-app",
    description: [
      "推しのアイドルの服装情報を共有できるアプリ（アプリ名：K-Style Finder）を開発。",
      "React + TypeScriptを使用して、ユーザーが簡単に服装情報を投稿できるUIを設計。特に、chakra-uiを活用し、ユーザーが直感的に操作できるようなデザインを心掛けた。",
      "データベースにはSupabaseを使用し、ユーザーが投稿した服装情報を効率的に管理。これにより、アプリのパフォーマンスとスケーラビリティを向上させた。",
      "デプロイにはfirebaseを使用し、CI/CDパイプラインを構築。これにより、コードの変更が自動的に本番環境に反映されるようになり、開発効率が大幅に向上した。",
    ],
  },
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
