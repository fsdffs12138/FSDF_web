import { TimelineItem, Project, Game, NavLink, PersonalInfo } from './types';

// ==========================================
// 填写说明 / Instructions
// ==========================================

// --- 1. 个人基本信息 (PERSONAL INFO) ---
export const PERSONAL_INFO: PersonalInfo = {
  name: "Arthurs Feng",
  // 使用 Unsplash 的高质量头像
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", 
  // 侧边栏卡片的背景图 - 抽象流体艺术
  profileCover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", 
  title: "全栈创意开发者",
  tagline: "永远相信美好的事情即将发生", // 经典的 Fomalhaut/Hexo 风格标语
  about: "我是一名拥有5年经验的充满激情的开发者，擅长 React, Node.js 和生成式 AI。我热衷于将复杂的问题转化为美观、交互性强的用户界面。",
  socials: {
    github: "https://github.com/fsdffs12138",
    bilibili: "https://space.bilibili.com/27962591",
    linkedin: "https://linkedin.com"
  },
  runTimeStart: "2023-01-01" // 网站建站时间
};

// --- 2. 导航栏链接 (NAVIGATION) ---
export const NAV_LINKS: NavLink[] = [
  { label: '首页', href: '#hero' },
  { label: '归档', href: '#timeline' }, // Rename to match blog terms
  { label: '清单', href: '#projects' },
  { label: '娱乐', href: '#gaming' },
];

// --- 3. 时间线数据 (TIMELINE DATA) ---
export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 't1',
    year: '2024',
    title: '高级前端工程师',
    companyOrInstitution: 'TechNova Solutions',
    description: '主导前端架构向 Next.js 14 迁移。指导初级开发人员并实施新的设计系统。',
    type: 'work'
  },
  {
    id: 't2',
    year: '2022',
    title: '全栈开发者',
    companyOrInstitution: 'Creative Pulse Agency',
    description: '使用 WebGL 和 React 为世界500强客户开发屡获殊荣的营销网站。',
    type: 'work'
  },
  {
    id: 't3',
    year: '2020',
    title: '计算机科学学士',
    companyOrInstitution: '创新大学',
    description: '以优异成绩毕业。主修人机交互与人工智能。',
    type: 'education'
  },
  {
    id: 't4',
    year: '2018',
    title: '第一个自由职业项目',
    companyOrInstitution: '自主创业',
    description: '为当地潮牌构建了一个定制的电子商务平台。',
    type: 'milestone'
  }
];

// --- 4. 项目/作品集数据 (PORTFOLIO DATA) ---
export const PROJECT_DATA: Project[] = [
  {
    id: 'p1',
    title: '星云仪表盘 (Nebula Dashboard)',
    description: '一个使用 D3.js 和 WebSocket 构建的加密资产实时数据可视化仪表盘。',
    longDescription: '星云仪表盘是为了解决传统金融数据展示滞后问题而诞生的。该项目采用了 D3.js 进行复杂的数据可视化渲染，结合 WebSocket 实现了毫秒级的数据更新。界面设计采用了深色玻璃拟态风格，旨在减少长时间盯盘的视觉疲劳。',
    features: [
      '毫秒级 WebSocket 数据推送',
      '自定义 D3.js K线图与深度图',
      '响应式 Grid 布局，支持拖拽重组',
      '服务器端渲染 (SSR) 优化首屏加载'
    ],
    tags: ['React', 'D3.js', 'WebSocket', 'Tailwind'], 
    // 数据/科技风格图片
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', 
    demoUrl: '#', 
    repoUrl: '#'  
  },
  {
    id: 'p2',
    title: 'Echo AI 聊天机器人',
    description: '利用 Gemini API 开发的智能客户支持机器人，具有上下文感知记忆功能。',
    longDescription: 'Echo AI 不仅仅是一个简单的问答机器人。它集成了一个基于向量数据库的长期记忆系统，能够记住用户偏好和历史对话上下文。通过微调的 Prompt Engineering，它能够以特定的品牌语调进行回复，大大降低了人工客服的压力。',
    features: [
      '基于 Gemini Pro 的自然语言处理',
      'RAG (检索增强生成) 技术集成',
      '多模态输入支持（文本、图片）',
      '实时的情感分析仪表盘'
    ],
    tags: ['TypeScript', 'Gemini API', 'Node.js'],
    // AI/芯片/大脑风格图片
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'p3',
    title: 'Voxel 编辑器',
    description: '基于 Three.js 的浏览器端 3D 体素编辑器。支持导出 OBJ 格式模型。',
    longDescription: '这是一个完全在浏览器中运行的轻量级 3D 建模工具。受到 MagicaVoxel 的启发，我希望创建一个无需下载安装即可使用的体素编辑器。它使用了 React Three Fiber 来管理场景图，并通过 WebWorkers 处理复杂的几何体合并计算，保证了在低端设备上的流畅运行。',
    features: [
      '纯前端 OBJ/GLTF 模型导出',
      '支持层级 (Layer) 管理系统',
      '内置光线追踪渲染预览',
      'PWA 离线支持'
    ],
    tags: ['Three.js', 'React', 'WebGL'],
    // 3D/抽象几何风格图片
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    demoUrl: '#',
    repoUrl: '#'
  }
];

// --- 5. 游戏经历 (GAMING DATA) ---
export const GAMING_DATA: Game[] = [
  {
    id: 'g1',
    title: '艾尔登法环 (Elden Ring)',
    hoursPlayed: 145,
    rating: 5,
    // 奇幻/风景
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    status: 'completed',
    comment: '开放世界设计的杰作。女武神很难打，但很公平。'
  },
  {
    id: 'g2',
    title: '赛博朋克 2077',
    hoursPlayed: 80,
    rating: 4,
    // 赛博朋克/霓虹
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600&auto=format&fit=crop',
    status: 'completed',
    comment: '氛围无与伦比。故事真的直击人心。'
  },
  {
    id: 'g3',
    title: '空洞骑士 (Hollow Knight)',
    hoursPlayed: 50,
    rating: 5,
    // 暗黑/微距/神秘
    imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600&auto=format&fit=crop',
    status: 'playing',
    comment: '目前卡在苦痛之路。救命。'
  },
  {
    id: 'g4',
    title: '博德之门 3',
    hoursPlayed: 200,
    rating: 5,
    // 骰子/RPG元素
    imageUrl: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=600&auto=format&fit=crop',
    status: 'completed',
    comment: '十年来玩过最好的 RPG。卡拉克是真爱。'
  }
];