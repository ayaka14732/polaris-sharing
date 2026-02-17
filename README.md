# Polaris Sharing

An elegant personal sharing website.

## 🚀 Tech Stack

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Internationalization**: next-intl
* **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install
```

## 🏃‍♂️ Development

```bash
# Run in development mode
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to view the site.

## 📁 Project Structure

```
polaris-sharing/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-based routing
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── about/         # About page
│   │   │   └── tools/         # Tools section
│   │   │       ├── unit-converter/
│   │   │       ├── calendar-converter/
│   │   │       └── journey-tracker/
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   ├── lib/                   # Utility functions
│   └── i18n.ts                # i18n configuration
├── messages/                  # Locale message files
│   ├── zh-CN.json
│   ├── zh-TW.json
│   └── en.json
└── public/                    # Static assets
    └── videos/                # Aurora videos
```

## 🐳 Docker Deployment

Make sure `next.config.js` has standalone output enabled:

```js
const nextConfig = {
  output: 'standalone',
}
```

Build and run:

```bash
docker build -t polaris-sharing .
docker run -d -p 127.0.0.1:8080:3000 --name polaris-sharing polaris-sharing
```

To update:

```bash
git pull
docker build -t polaris-sharing .
docker stop polaris-sharing && docker rm polaris-sharing
docker run -d -p 127.0.0.1:8080:3000 --name polaris-sharing polaris-sharing
```
