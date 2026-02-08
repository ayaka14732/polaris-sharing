# 快速启动指南 / Quick Start Guide

## 中文说明

### 1. 安装依赖

```bash
pnpm install
```

如果没有安装 pnpm，请先运行：
```bash
npm install -g pnpm
```

### 2. 启动开发服务器

```bash
pnpm dev
```

### 3. 访问网站

打开浏览器访问：http://localhost:3000

默认语言为简体中文，您也可以通过右上角切换到繁体中文或英语。

### 4. 添加极光视频（可选）

1. 将您的极光视频重命名为 `aurora.mp4`
2. 放置在 `public/videos/` 目录
3. 编辑 `src/app/[locale]/about/page.tsx`，取消注释第 91-97 行的视频标签

### 5. 构建生产版本

```bash
pnpm build
pnpm start
```

---

## English Instructions

### 1. Install Dependencies

```bash
pnpm install
```

If you don't have pnpm installed:
```bash
npm install -g pnpm
```

### 2. Start Development Server

```bash
pnpm dev
```

### 3. Access the Website

Open your browser and visit: http://localhost:3000

Default language is Simplified Chinese. You can switch to Traditional Chinese or English using the language selector in the top right.

### 4. Add Aurora Video (Optional)

1. Rename your aurora video to `aurora.mp4`
2. Place it in `public/videos/` directory
3. Edit `src/app/[locale]/about/page.tsx` and uncomment lines 91-97 for the video tag

### 5. Build for Production

```bash
pnpm build
pnpm start
```

---

## 功能说明 / Features

### 单位换算器 / Unit Converter
- 支持长度、重量、温度等多种单位转换
- Supports conversion of length, weight, temperature and more

### 日历转换 / Calendar Converter
- 农历与阳历互转
- Convert between Lunar and Solar calendars
- 显示生肖和天干地支
- Shows Chinese Zodiac and Heavenly Stems

### 行程记录 / Journey Tracker
- 记录旅行计划
- Track your travel plans
- 本地存储，数据持久化
- Local storage with data persistence

---

## 技术栈 / Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl

## 需要帮助？ / Need Help?

如有问题，请查看 README.md 或访问项目文档。

For questions, please refer to README.md or visit the project documentation.
