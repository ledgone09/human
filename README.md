# Human Coin - The Silent Takeover

A cinematic static website experience showcasing the story of AI dominance and human resistance through blockchain technology.

## 🎬 Live Demo
Visit the live site: [Human Coin - The Silent Takeover](https://your-render-url.onrender.com)

## 📁 Project Structure
```
human/
├── index.html          # Landing page - "The Silent Takeover"
├── page2.html          # Chapter 2 - "The Architects" 
├── page3.html          # Chapter 3 - "The Last Protocol"
├── style.css           # All styling and cinematic animations
├── script.js           # Interactive functionality
├── bg.mp4              # Video background (main asset)
├── bg.png              # Fallback background image
├── package.json        # Node.js configuration
├── render.yaml         # Render deployment configuration
├── _redirects          # Routing rules for static hosting
└── README.md           # This file
```

## 🚀 Deployment on Render

### Automatic Deployment (Recommended)
1. Fork/clone this repository to your GitHub account
2. Go to [Render.com](https://render.com) and create an account
3. Click "New" → "Static Site"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` configuration
6. Click "Create Static Site"
7. Your site will be live in 2-3 minutes!

### Manual Configuration
If you need to configure manually:
- **Build Command**: `echo "Static site build complete"`
- **Publish Directory**: `.` (current directory)
- **Node Version**: 14 or higher

## 🛠️ Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for testing)

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/ledgone09/human.git
   cd human
   ```

2. Open `index.html` in your browser, or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

## 🎨 Features

### Visual Experience
- **Cinematic Video Background**: Full-screen MP4 video with fallback image
- **Typewriter Animations**: Sequential text reveal with fade-in effects
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Film Grain & Vignette**: Authentic cinematic overlay effects

### Technical Features
- **Pure HTML/CSS/JS**: No build process required
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Video preloading and efficient animations
- **Cross-Browser Compatible**: Works on all modern browsers
- **Mobile Friendly**: Touch-friendly interactions and responsive layout

### Story Structure
1. **The Silent Takeover** - Introduction to AI dominance
2. **The Architects** - The builders who created the technology
3. **The Last Protocol** - Human resistance through blockchain

## 📱 Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Video Loading**: Optimized with preload hints
- **Font Loading**: Google Fonts with display swap

## 🔧 Customization

### Changing Content
- Edit HTML files directly for text content
- Modify `style.css` for visual styling
- Update `script.js` for interactive features

### Replacing Video Background
1. Replace `bg.mp4` with your video file
2. Ensure video is optimized for web (H.264, MP4 format)
3. Keep file size reasonable (< 50MB recommended)

### Animation Timing
Adjust animation delays in `style.css`:
```css
.epic-line:nth-child(1) { animation-delay: 4s; }
.epic-line:nth-child(2) { animation-delay: 4.5s; }
/* etc... */
```

## 📄 License
MIT License - feel free to use this project as a template for your own cinematic websites.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support
For issues or questions:
- Open an issue on GitHub
- Check browser console for errors
- Ensure all files are properly uploaded

---

**Human Coin** - *The Last Protocol*