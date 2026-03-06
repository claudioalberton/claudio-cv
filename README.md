# Claudio Alberton Batista - Professional Resume

👋 **Technology Development Manager | Senior IT Operations Engineer | Software Architect**

[![Live Resume](https://img.shields.io/badge/Live%20Resume-View%20Online-blue)](https://claudioalberton.github.io/claudio_resume/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-green)](https://claudioalberton.github.io/claudio_resume/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue)](https://www.typescriptlang.org/)

## 👨‍💼 About

This is my interactive resume website showcasing **19+ years** of experience leading technology innovation across automotive manufacturing and gaming industries. I've designed patented 3D alignment systems deployed across Latin America and currently modernize global IT infrastructure and automation for a Canadian game studio.

### 🏆 Key Highlights

- **🏅 Multiple Patents**: Designed world's most advanced laser alignment systems (Aligner Digi 4 & 5)
- **🌎 Latin America First**: Created Latin America's first AI-powered 3D aligner (Aligner 3D Flash)
- **☁️ Cloud Architecture**: AWS-based solutions for enterprise automation (TcDataCloud, Dynamic Software Block)
- **🤖 AI Integration**: Leveraging AI tools for development optimization, code generation, and planning
- **🎮 Gaming Industry**: Currently at Uken Games, modernizing IT infrastructure and device lifecycle management
- **📊 Enterprise Solutions**: ERP modernization, R&D innovation, and executive technology strategy

## 🌐 Live Resume

👉 **[View My Resume Online](https://claudioalberton.github.io/claudio_resume/)**

The resume includes:
- Professional summary and key achievements
- Detailed work experience with 19+ years in tech leadership
- Technical skills and core competencies
- Education and certifications
- Patents and innovations
- Projects portfolio (40+ projects delivered)

## ✨ Website Features

- 📄 **PDF Export**: Download a print-ready PDF version with optimized layout
- 🌓 **Dark Mode**: Toggle between light and dark themes with smooth transitions
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance**: Static site generation for optimal loading speeds
- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 🔗 **Projects Page**: Dedicated page showcasing 40+ projects with descriptions and technologies
- 🎯 **Interactive Elements**: Clickable stat cards, smooth scrolling, and hover effects

## 🛠️ Tech Stack

This resume website is built with modern web technologies:

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components inspired by shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Export**: react-to-print
- **Theme**: next-themes for dark mode
- **Deployment**: GitHub Pages with GitHub Actions CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/claudioalberton/claudio_resume.git
cd claudio_resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/claudio_resume/](http://localhost:3000/claudio_resume/) in your browser

### Building for Production

To create a static export:

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to any static hosting service.

## 📦 Deployment

### GitHub Pages

This project is automatically deployed to GitHub Pages via GitHub Actions. The workflow:
1. Builds the Next.js project
2. Creates a `.nojekyll` file for proper static export handling
3. Deploys the `out` directory to GitHub Pages

### Manual Deployment

The `out` directory can be deployed to:
- Vercel
- Netlify
- AWS S3
- Azure Static Web Apps
- Any static file hosting service

For detailed deployment instructions, see [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## 🎨 Customization

### Update Resume Data

Edit the file `/data/resume-data.ts` to update your personal information, experience, education, skills, etc.

### Modify Styling

- Global styles: `/app/globals.css`
- Theme colors: Modify CSS variables in `globals.css`
- Component styles: Each component uses Tailwind CSS classes

### Color Scheme

The default color scheme uses a professional blue palette. To change:

1. Edit CSS variables in `/app/globals.css`
2. Modify the `--primary` and related color values
3. Both light and dark themes can be customized independently

### Additional Documentation

- **Quick Start Guide**: [`docs/QUICKSTART.md`](docs/QUICKSTART.md)
- **Customization Checklist**: [`docs/CUSTOMIZATION_CHECKLIST.md`](docs/CUSTOMIZATION_CHECKLIST.md)
- **Adding Profile Photo**: [`docs/ADD_PHOTO.md`](docs/ADD_PHOTO.md)

## 📁 Project Structure

```
resume-website/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page
│   ├── print-preview/        # PDF export page
│   └── projects/            # Projects showcase page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── achievements-section.tsx
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── languages-section.tsx
│   ├── patents-section.tsx
│   ├── pdf-export-button.tsx
│   ├── skills-section.tsx
│   ├── sidebar.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/
│   └── resume-data.ts       # Resume content data
├── lib/
│   └── utils.ts             # Utility functions
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json
```

## 🔧 Features Details

### Dark Mode
- Toggle between light and dark themes
- Persistent theme selection using localStorage
- Smooth transitions

### PDF Export
- Click "Download PDF" button to generate a PDF
- Print-optimized styling with proper page breaks
- Maintains colors and formatting
- Two-page layout with sidebar on first page

### Animations
- Fade-in effects on scroll
- Smooth transitions
- Hover effects on interactive elements
- Stagger animations for lists

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

- **Email**: [claudioalberton11@gmail.com](mailto:claudioalberton11@gmail.com)
- **LinkedIn**: [claudio-alberton-batista](https://www.linkedin.com/in/claudio-alberton-batista-366891120)
- **Location**: Araucária, Paraná, Brazil

## 📄 License

MIT License - Feel free to use this template for your own resume!

---

**Built with ❤️ by Claudio Alberton Batista**
