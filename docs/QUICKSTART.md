# Quick Start Guide

Get your resume website up and running in minutes!

## 1. First Time Setup

Open your terminal and run:

```bash
cd "/Users/claudioalbertonbatista/Project Claudio/resume-website"
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Then open your browser to: http://localhost:3000

You should see your beautiful resume website!

## 3. Customize Your Resume

Edit this file to update your information:
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/data/resume-data.ts
```

The website will automatically refresh when you save changes!

### What You Can Customize:

- **Personal Info**: Name, title, location, email, LinkedIn
- **Summary**: Your professional summary
- **Key Achievements**: Your major accomplishments
- **Experience**: Work history with roles, companies, dates, responsibilities
- **Education**: Degrees and institutions
- **Skills**: Technical skills
- **Languages**: Languages you speak
- **Patents**: Patents and innovations

## 4. Customize Colors (Optional)

To change the color scheme, edit:
```
/Users/claudioalbertonbatista/Project Claudio/resume-website/app/globals.css
```

Look for the `:root` and `.dark` sections and modify the HSL color values.

### Quick Color Presets:

**Professional Blue (Current)**
```css
--primary: 221.2 83.2% 53.3%;
```

**Modern Purple**
```css
--primary: 262 83% 58%;
```

**Tech Green**
```css
--primary: 142 76% 36%;
```

**Bold Red**
```css
--primary: 0 84% 60%;
```

## 5. Test the PDF Export

1. Click the "Download PDF" button at the bottom right
2. Your browser will generate a beautiful PDF version of your resume
3. Perfect for sending to recruiters!

## 6. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `out` folder with your static website ready to deploy!

## 7. Deploy (Choose One)

### GitHub Pages (Free)
```bash
# Initialize git if not already done
git init
git add .
git commit -m "My resume website"

# Create a repo on GitHub, then:
git remote add origin https://github.com/yourusername/resume.git
git push -u origin main
```

Then follow the GitHub Pages setup in DEPLOYMENT.md

### Vercel (Fastest)
```bash
npx vercel
```

### Netlify (Simple)
1. Drag and drop the `out` folder to https://app.netlify.com/drop

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Features to Try

1. **Dark Mode**: Click the moon/sun icon in the top right
2. **Responsive Design**: Resize your browser or view on mobile
3. **Smooth Animations**: Scroll down to see sections animate in
4. **PDF Export**: Click "Download PDF" button
5. **Print**: Use Ctrl/Cmd+P to print directly

## Need Help?

- Check README.md for detailed documentation
- Check DEPLOYMENT.md for deployment instructions
- All files are well-commented and easy to understand

## Project Structure (Quick Reference)

```
resume-website/
├── data/
│   └── resume-data.ts          ← EDIT THIS for your info
├── app/
│   ├── globals.css             ← EDIT THIS for colors
│   └── page.tsx                ← Main page layout
├── components/                 ← All UI components
└── package.json                ← Dependencies
```

## Tips

1. **Keep it updated**: Regularly update your experience and skills
2. **Test PDF export**: Make sure it looks good before sending to recruiters
3. **Mobile first**: Always check how it looks on mobile devices
4. **Keep it concise**: Recruiters spend 6 seconds on average reviewing a resume
5. **Use action verbs**: Start bullet points with strong action verbs

## Next Steps

1. Customize your data in `resume-data.ts`
2. Adjust colors if desired in `globals.css`
3. Test everything locally with `npm run dev`
4. Build with `npm run build`
5. Deploy to your preferred platform
6. Share your professional resume URL!

Enjoy your new modern resume website!
