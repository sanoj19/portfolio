# My Portfolio

A modern, responsive portfolio website built with React and Vite. This portfolio showcases my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and interactive elements
- **Performance**: Optimized for fast loading and great user experience
- **Accessible**: Built with accessibility best practices
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS-in-JS with styled-jsx
- **Icons**: React Icons
- **Animations**: CSS animations and transitions
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Change the name and title
   - Update the description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Update your story and experience
   - Modify the statistics
   - Change the feature highlights

3. **Projects Section** (`src/components/Projects.jsx`)
   - Replace with your actual projects
   - Update project descriptions and technologies
   - Add your GitHub and live demo links

4. **Skills Section** (`src/components/Skills.jsx`)
   - Update with your actual skills
   - Modify skill levels
   - Add or remove skill categories

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update contact information
   - Add your social media links
   - Configure form submission (currently simulated)

### Styling
- **Colors**: Update CSS variables in `src/index.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Modify component styles using styled-jsx

### Images
Replace placeholder images with your actual photos:
- Add your profile picture
- Update project screenshots
- Add any additional images

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the Vite configuration

3. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your portfolio will be live at `https://your-project-name.vercel.app`

### Alternative Deployment Options

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and building. Configuration is in `vite.config.js`.

### Vercel Configuration
Deployment settings are configured in `vercel.json` for optimal Vercel deployment.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

The portfolio includes:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## 🎨 Customization Tips

1. **Color Scheme**: Update CSS variables in `index.css`
2. **Typography**: Change fonts in `index.html`
3. **Animations**: Modify CSS animations for different effects
4. **Layout**: Adjust grid layouts for different screen sizes
5. **Content**: Replace all placeholder content with your information

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**






