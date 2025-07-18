# Minor Basilica & Diocesan Shrine Parish of St. Paul of the Cross

A modern, professional React website for the Minor Basilica & Diocesan Shrine Parish of St. Paul of the Cross located in Marikina Concepcion Dos, Philippines.

## 🚀 Modern Tech Stack

- **React 18** - Latest React with hooks and modern features
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Professional animations and transitions
- **React Icons** - Beautiful icon library
- **React Scroll** - Smooth scrolling navigation
- **React Intersection Observer** - Scroll-triggered animations

## 🌟 Features

### ✨ Modern Design
- **Responsive Design** - Perfect on all devices
- **Professional Animations** - Smooth scroll animations and hover effects
- **Modern UI/UX** - Clean, elegant design with Tailwind CSS
- **Interactive Elements** - Hover effects, transitions, and micro-interactions

### 📱 Sections
- **Hero Section** - Animated welcome with call-to-action buttons
- **About Us** - Who We Are, History, Vision & Mission, Parish Priests
- **News & Events** - Latest news and upcoming events with timeline
- **Shrine Services** - Baptism, Confirmation, Wedding, Confession, Blessing
- **Gallery** - Interactive photo gallery with lightbox
- **Contact Us** - Contact form with validation and church information

### 🎨 Design Features
- **Gradient Backgrounds** - Beautiful purple and blue gradients
- **Card-based Layout** - Modern card designs with shadows
- **Typography** - Google Fonts (Playfair Display & Source Sans Pro)
- **Color Scheme** - Professional purple and blue theme
- **Loading Animations** - Smooth page transitions

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone/Download** the project files

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Browser**
   - Navigate to `http://localhost:3000`
   - The website will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
church-website-react/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/             # React components
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── About.js           # About us section
│   │   ├── News.js            # News and events
│   │   ├── Services.js        # Shrine services
│   │   ├── Gallery.js         # Photo gallery
│   │   ├── Contact.js         # Contact form
│   │   ├── Footer.js          # Footer
│   │   └── BackToTop.js       # Back to top button
│   ├── App.js                 # Main App component
│   ├── index.js               # React entry point
│   └── index.css              # Tailwind CSS and custom styles
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎯 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Purple shades (`#8e44ad`)
- **Secondary**: Blue shades (`#3498db`)
- **Dark**: Gray shades for text and backgrounds

### Content Updates
- Edit component files in `src/components/` to update content
- Modify `tailwind.config.js` for color changes
- Update images by replacing placeholder content

### Adding Real Images
Replace placeholder gallery items with actual church photos:
```jsx
// In Gallery.js, replace placeholder items with real images
const galleryItems = [
  {
    id: 1,
    title: 'Church Interior',
    image: '/images/church-interior.jpg', // Add real image path
    description: 'Beautiful interior of our sacred space'
  }
];
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+) - Full layout with all features
- **Tablet** (768px - 1199px) - Adapted layout
- **Mobile** (up to 767px) - Mobile-first design with hamburger menu

## 🎨 Animation Features

- **Scroll Animations** - Elements animate as they come into view
- **Hover Effects** - Interactive hover states on cards and buttons
- **Page Transitions** - Smooth loading animations
- **Micro-interactions** - Small animations for better UX

## 🔧 Advanced Features

- **Form Validation** - Contact form with email validation
- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Back to Top** - Animated back to top button
- **Loading States** - Professional loading animations
- **Error Handling** - Form validation and error messages

## 📞 Contact Information

Update the following in the components:
- Church address in `Contact.js` and `Footer.js`
- Phone numbers and email addresses
- Office hours and mass schedules
- Social media links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Traditional Hosting
1. Run: `npm run build`
2. Upload `build` folder to your web server

## 📄 License

This project is created for the Minor Basilica & Diocesan Shrine Parish of St. Paul of the Cross.

## 🙏 Special Thanks

Built with modern web technologies to provide the best experience for the church community.

---

**Note**: This is a static React application. For dynamic features like a CMS, blog, or online donations, additional backend development would be required. 