# 鬼滅の刃 - 全角色资料集

<p align="center">
  <img src="img/多人合照/合照6.png" alt="鬼灭之刃" width="600">
</p>

<p align="center">
  <strong>专为《鬼灭之刃》粉丝打造的全角色资料集网站</strong>
</p>

<p align="center">
  <a href="https://vuejs.org/" target="_blank"><img src="https://img.shields.io/badge/Vue-3.4-4FC08D?style=flat-square&logo=vue.js" alt="Vue"></a>
  <a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite" alt="Vite"></a>
  <a href="https://element-plus.org/" target="_blank"><img src="https://img.shields.io/badge/ElementPlus-2.6-409EFF?style=flat-square&logo=element" alt="Element Plus"></a>
  <img src="https://img.shields.io/badge/版本-1.0.0-blue?style=flat-square" alt="Version">
</p>

---

## 📖 项目简介

本项目是一个基于 **Vue 3** + **Vite** 构建的《鬼灭之刃》主题粉丝网站，收录了完整的角色资料、呼吸法技能、人物关系、高清壁纸与战斗混剪视频。网站采用现代化的暗色主题设计，搭配丰富的交互动画，为粉丝提供沉浸式的浏览体验。

> **数据规模**：19 位角色 | 12 部战斗混剪 | 90+ 张高清壁纸

---

## ✨ 功能特性

### 🎭 角色图鉴
- **19 位角色**完整资料：主角团、九柱、上弦之鬼、传说剑士
- 角色属性面板：攻击力、防御力、速度、技巧、意志力五维数据
- 人物关系网络：可视化展示角色间的羁绊与恩怨
- 呼吸法/血鬼术详解：水之呼吸、雷之呼吸、炎之呼吸等全收录

### 🎬 战斗映像
- 12 部顶级战斗混剪视频，涵盖经典对战场景
- 视频分类：主角战斗、柱战斗、燃剪合集
- 支持分辨率、文件大小等元数据展示

### 🖼️ 壁纸画廊
- 90+ 张超高清原画壁纸（4K/1080p）
- 按角色分类整理，支持快速检索
- 头像集：21 张 750×750 方形角色头像

### 🌍 世界观
- 呼吸法系谱完整梳理
- 十二鬼月组织架构
- 鬼杀队历史与背景故事

### 🔐 用户系统
- 登录/注册功能（本地存储认证）
- 角色详情、壁纸画廊、官方咨询等需要登录后访问
- 滚动进度条、返回顶部等交互细节

---

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| [Vue](https://vuejs.org/) | ^3.4.0 | 前端框架 |
| [Vue Router](https://router.vuejs.org/) | ^4.3.0 | 路由管理 |
| [Pinia](https://pinia.vuejs.org/) | ^2.1.0 | 状态管理 |
| [Vite](https://vitejs.dev/) | ^5.4.0 | 构建工具 |
| [Element Plus](https://element-plus.org/) | ^2.6.0 | UI 组件库 |
| [Element Plus Icons](https://element-plus.org/en-US/component/icon.html) | ^2.3.0 | 图标库 |

### 开发工具
- `unplugin-auto-import` - 自动导入 API
- `unplugin-vue-components` - 组件自动注册
- `ElementPlusResolver` - Element Plus 组件解析

---

## 📁 项目结构

```
demon-slayer-website/
├── public/                    # 静态资源（会被复制到 dist）
│   └── img/                   # 角色图片（按角色分文件夹）
│       ├── 灶门炭治郎/
│       ├── 灶门祢豆子/
│       ├── 富冈义勇/
│       ├── ...
│       └── 头像/              # 21 张角色头像
├── src/
│   ├── assets/
│   │   └── styles/            # 全局样式与特效
│   ├── components/            # 公共组件
│   │   ├── AppHeader.vue      # 顶部导航
│   │   ├── AppFooter.vue      # 底部页脚
│   │   ├── HeroCarousel.vue   # 首页轮播图
│   │   ├── CharacterCard.vue  # 角色卡片
│   │   ├── VideoCard.vue      # 视频卡片
│   │   ├── BattleCard.vue     # 战斗卡片
│   │   ├── GlobalSearch.vue   # 全局搜索
│   │   ├── KatanaCursor.vue   # 日轮刀光标特效
│   │   ├── ParticleBackground.vue # 粒子背景
│   │   ├── TypewriterText.vue # 打字机效果
│   │   ├── PageSkeleton.vue   # 骨架屏加载
│   │   └── DownloadProgress.vue # 下载进度
│   ├── data/
│   │   ├── characters.js      # 角色数据（19 位）
│   │   └── videos.js          # 视频数据（12 部）
│   ├── plugins/
│   │   └── imgFallback.js     # 图片加载失败兜底
│   ├── router/
│   │   └── index.js           # 路由配置
│   ├── views/
│   │   ├── Home.vue           # 首页
│   │   ├── Login.vue          # 登录页
│   │   ├── Characters.vue     # 角色列表
│   │   ├── CharacterDetail.vue# 角色详情
│   │   ├── Videos.vue         # 视频列表
│   │   ├── Gallery.vue        # 壁纸画廊
│   │   ├── About.vue          # 世界观
│   │   ├── Consultation.vue   # 官方咨询
│   │   └── NotFound.vue       # 404 页面
│   ├── App.vue                # 根组件
│   └── main.js                # 入口文件
├── video/                     # 战斗混剪视频（12 个 MP4）
├── index.html                 # HTML 模板
├── vite.config.js             # Vite 配置
├── package.json               # 依赖管理
└── README.md                  # 本文件
```

---

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18.0
- npm >= 9.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

> 服务默认在 http://localhost:3000 启动，支持热更新（HMR）

### 构建生产版本

```bash
npm run build
```

> 构建产物输出至 `dist/` 目录

### 预览生产构建

```bash
npm run preview
```

---

## 📊 数据说明

### 角色数据（19 位）

| 分类 | 角色数量 | 代表角色 |
|------|---------|----------|
| 主角团 | 4 | 灶门炭治郎、灶门祢豆子、我妻善逸、嘴平伊之助 |
| 九柱 | 8 | 富冈义勇、炼狱杏寿郎、蝴蝶忍、宇髄天元、时透无一郎、甘露寺蜜璃、伊黑小芭内、不死川实弥、悲鸣屿行冥 |
| 鬼阵营 | 4 | 鬼舞辻无惨、黑死牟、童磨、猗窝座 |
| 传说/已故 | 2 | 继国缘壹、锖兔 |

每位角色包含：基本信息、角色背景、性格特征、动机目标、人际关系、五维属性、关联视频等完整字段。

### 视频数据（12 部）

| 分类 | 数量 | 说明 |
|------|------|------|
| 主角战斗 | 4 | 炭治郎/善逸个人战斗剪辑 |
| 柱战斗 | 5 | 九柱经典对战场景 |
| 燃剪合集 | 3 | 全员向热血混剪 |

视频格式：MP4 (H.264 High Profile)，最高分辨率 1920×1080，总时长约 34 分钟。

### 图片数据（90+ 张）

- **角色插画**：按角色分文件夹，包含 3~4 张高清插画
- **多人合照**：13 张团体/战斗场景
- **头像集**：21 张 750×750 方形头像，覆盖主要角色
- **分辨率范围**：640×640 ~ 5990×3369（4K）

---

## 🎨 设计特色

- **暗色主题**：以 `#0d0d0d` 为基底，搭配 `#c41e3a`（鬼灭红）作为主题色
- **日式美学**：和风排版、渐变羽织纹理、日轮刀光标特效
- **交互动画**：
  - 页面滚动揭示动画（Scroll Reveal）
  - 视差滚动背景（Parallax）
  - 页面过渡动画（Page Transition）
  - 粒子背景特效（Particle Background）
  - 打字机文本效果（Typewriter）
  - 骨架屏加载（Skeleton Loading）

---

## 📝 内容标注文档

详细的数据集标注文档请查看 [`内容标注文档.md`](内容标注文档.md)，包含：
- 图片文件的完整元数据（尺寸、大小、内容描述）
- 视频文件的编码信息与时长统计
- 数据用途建议（角色识别、风格迁移、壁纸制作等）

---

## 📄 开源协议

本项目仅供学习交流使用，所有角色图片与视频素材版权归《鬼灭之刃》官方及原作者吾峠呼世晴所有。

---

<p align="center">
  🔥 <strong>心を燃やせ、限界を超えろ</strong> 🔥
</p>

<p align="center">
  <em>"纵使我身形俱灭，也定将恶鬼斩杀"</em>
</p>
