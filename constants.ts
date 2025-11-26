import { TimelineItem, Project, Game, NavLink } from './types';

// ==========================================
// 填写说明 / Instructions
// ==========================================
// 这是一个数据配置文件。你只需要修改下面的文字内容，网页会自动更新。
// 这里的 'export const' 是导出数据的固定格式，请保留，只修改引号 '' 里的内容。

// --- 1. 个人基本信息 (PERSONAL INFO) ---
// 修改这里的名字、头衔和个人简介
export const PERSONAL_INFO = {
  name: "Arthurs Feng", // 你的名字
  title: "全栈创意开发者",   // 你的职业头衔
  tagline: "是不是缺少了一丝幻想呢", // 首页的一句标语
  about: "我是一名拥有5年经验的充满激情的开发者，擅长 React, Node.js 和生成式 AI。我热衷于将复杂的问题转化为美观、交互性强的用户界面。不写代码的时候，我喜欢探索虚拟世界或优化我的桌面布局。", // AI会用这段话来了解你
  socials: {
    github: "https://github.com/fsdffs12138",
    bilibili: "https://space.bilibili.com/27962591",
    linkedin: "https://linkedin.com"
  }
};

// --- 2. 导航栏链接 (NAVIGATION) ---
// 一般不需要改，除非你想改菜单的名字
export const NAV_LINKS: NavLink[] = [
  { label: '关于', href: '#hero' },
  { label: '时间线', href: '#timeline' },
  { label: '作品集', href: '#projects' },
  { label: '游戏库', href: '#gaming' },
];

// --- 3. 时间线数据 (TIMELINE DATA) ---
// 记录你的工作经历、学历或重要里程碑
// type 可选值: 'work' (工作), 'education' (教育), 'milestone' (里程碑)
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
// 展示你的得意之作
export const PROJECT_DATA: Project[] = [
  {
    id: 'p1',
    title: '星云仪表盘 (Nebula Dashboard)',
    description: '一个使用 D3.js 和 WebSocket 构建的加密资产实时数据可视化仪表盘。',
    tags: ['React', 'D3.js', 'WebSockets', 'Tailwind'], // 技术栈标签
    imageUrl: 'https://picsum.photos/800/600?random=1', // 项目封面图链接
    demoUrl: '#', // 演示链接 (如果没有可删掉这一行)
    repoUrl: '#'  // 代码仓库链接 (如果没有可删掉这一行)
  },
  {
    id: 'p2',
    title: 'Echo AI 聊天机器人',
    description: '利用 Gemini API 开发的智能客户支持机器人，具有上下文感知记忆功能。',
    tags: ['TypeScript', 'Gemini API', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 'p3',
    title: 'Voxel 编辑器',
    description: '基于 Three.js 的浏览器端 3D 体素编辑器。支持导出 OBJ 格式模型。',
    tags: ['Three.js', 'React', 'WebGL'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    repoUrl: '#'
  }
];

// --- 5. 游戏经历 (GAMING DATA) ---
// 展示你在玩的游戏，增加个人趣味性
// status 可选值: 'playing' (在玩), 'completed' (通关), 'wishlist' (想玩)
export const GAMING_DATA: Game[] = [
  {
    id: 'g1',
    title: '艾尔登法环 (Elden Ring)',
    hoursPlayed: 145,
    rating: 5, // 评分 1-5
    imageUrl: 'https://picsum.photos/400/600?random=10',
    status: 'completed',
    comment: '开放世界设计的杰作。女武神很难打，但很公平。'
  },
  {
    id: 'g2',
    title: '赛博朋克 2077',
    hoursPlayed: 80,
    rating: 4,
    imageUrl: 'https://picsum.photos/400/600?random=11',
    status: 'completed',
    comment: '氛围无与伦比。故事真的直击人心。'
  },
  {
    id: 'g3',
    title: '空洞骑士 (Hollow Knight)',
    hoursPlayed: 50,
    rating: 5,
    imageUrl: 'https://picsum.photos/400/600?random=12',
    status: 'playing',
    comment: '目前卡在苦痛之路。救命。'
  },
  {
    id: 'g4',
    title: '博德之门 3',
    hoursPlayed: 200,
    rating: 5,
    imageUrl: 'https://picsum.photos/400/600?random=13',
    status: 'completed',
    comment: '十年来玩过最好的 RPG。卡拉克是真爱。'
  }
];