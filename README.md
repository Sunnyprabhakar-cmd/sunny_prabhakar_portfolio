# Sunny Prabhakar - Portfolio Website

A modern, production-ready portfolio website built with React + Vite. Features project filtering, animated timeline, and responsive design optimized for recruiters.

## Features

✨ **Project Filtering** - Sort projects by category (All, Full-Stack, Backend)
✨ **Animated Timeline** - Visual journey of education, projects, and achievements
✨ **Profile Integration** - Professional headshot prominently displayed
✨ **Responsive Design** - Mobile-optimized for all devices
✨ **Performance** - Optimized for fast load times (50KB gzipped)
✨ **Accessibility** - Semantic HTML and keyboard navigation

## Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 4.5
- **Styling**: CSS3 with CSS Variables
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify ready

## Quick Start

### Development

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000` by default.

### Production Build

```bash
npm run build
npm run preview
```

Creates optimized `dist/` folder ready for deployment.

## Deployment

### To Vercel

```bash
npm install -g vercel
vercel
```

### To Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Using Git + CI/CD

1. Push to GitHub
2. Connect repository to Vercel/Netlify
3. Automatic deployment on push to main

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation
│   ├── Hero.jsx        # Hero section with profile
│   ├── About.jsx       # About me
│   ├── Skills.jsx      # Technical skills
│   ├── Projects.jsx    # Projects with filter
│   ├── Timeline.jsx    # Animated timeline
│   ├── Education.jsx   # Education & certs
│   ├── Contact.jsx     # Contact info
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── App.css             # App styles
├── index.css           # Global styles
└── main.jsx            # Entry point

dist/                   # Production build (generated)
package.json            # Dependencies
vite.config.js          # Vite configuration
index.html              # HTML template
```

## Customization

### Update Profile Image

Replace the image URL in `src/components/Hero.jsx`:

```jsx
<img src="YOUR_IMAGE_URL" alt="Sunny Prabhakar" />
```

### Add/Modify Projects

Edit `projectsData` in `src/components/Projects.jsx`:

```js
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    category: 'fullstack', // or 'backend'
    stack: 'Tech stack here',
    description: ['Point 1', 'Point 2'],
    link: 'https://github.com/...',
    metrics: ['Metric 1', 'Metric 2']
  },
  // ...
]
```

### Update Timeline

Edit `timelineEvents` in `src/components/Timeline.jsx`:

```js
const timelineEvents = [
  {
    year: '2026',
    title: 'Event Title',
    description: 'Description',
    category: 'project' // or 'education', 'achievement'
  },
]
```

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --accent: #0f766e;      /* Primary brand color */
  --ink: #132018;         /* Text color */
  --bg: #f6f0e8;          /* Background */
  /* ... other colors */
}
```

## Performance

- **Build Size**: ~155KB (50KB gzipped)
- **Load Time**: < 2s on 4G
- **Lighthouse Score**: 95+
- **Mobile Ready**: Fully responsive

## Analytics & SEO

Update the HTML meta tags in `index.html`:

```html
<meta name="description" content="Your description">
<title>Your Name | Portfolio</title>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Open source. Clone and customize for your portfolio!

## Contact

Questions? Reach out at anmsunnyprabhakar@gmail.com
# sunny_prabhakar_portfolio
