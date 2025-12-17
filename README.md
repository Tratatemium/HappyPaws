# HappyPaws 🐾

A mobile-first pet adoption platform built for Agile & UX coursework at Hyper Island.

HappyPaws is an animal rescue organization platform that showcases pets available for adoption with a focus on mobile-first design. The application features pet browsing, urgent case highlighting, favorites functionality, and a complete adoption workflow. Built with Vanilla JavaScript, Vite, and responsive CSS.

## ✨ Features

- **Mobile-First Responsive Design** - Optimized for touch devices and mobile browsing
- **Pet Gallery** - Browse available pets with filtering by species (Dogs, Cats, Rabbits, Birds)
- **Urgent Adoptions Carousel** - Highlights pets needing immediate adoption
- **Favorites System** - Save and manage favorite pets with localStorage persistence
- **Pet Profiles** - Detailed pet information including photos, stories, and special needs
- **Adoption Workflow** - Complete checkout process with terms and conditions
- **Dark/Light Theme Toggle** - Accessible theme switching
- **Chat Interface** - Communication with rescue staff
- **Loading Animation** - Smooth transitions between pages

## 🎯 Live Demo

Visit the deployed application: [HappyPaws on GitHub Pages](https://tratatemium.github.io/HappyPaws/)

## 📁 Project Structure

```
├── DESIGN.md                      # Design specifications and requirements
├── index.html                     # Main entry point
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── public/
│   ├── icons/                     # SVG icons and images
│   └── logo/                      # Brand logos
└── src/
    ├── main.js                    # Application entry point
    ├── load-data.js               # Data loading utilities
    ├── load-pet-cards.js          # Pet card rendering and favorites
    ├── filter-pets.js             # Pet filtering functionality
    ├── assets/
    │   └── pet-data.json          # Pet database (50 pets)
    ├── components/
    │   ├── Header/                # Navigation header
    │   ├── Footer/                # Navigation footer
    │   ├── sidebar/               # Mobile sidebar navigation
    │   └── accessibility-practices/
    │       └── lightdark.js       # Theme toggle
    ├── pages/
    │   ├── Landing/               # Home page with carousel
    │   ├── Gallery/               # Pet browsing grid
    │   ├── Pet-Card-Detail/       # Individual pet profiles
    │   ├── Favorites/             # Saved pets list
    │   ├── Chat/                  # Communication interface
    │   ├── Checkout/              # Adoption process
    │   └── loading-page/          # Loading animation
    └── styles/
        ├── variables.css          # CSS custom properties
        ├── reset.css              # CSS normalization
        ├── layout.css             # Base layout styles
        └── layouts.css            # Responsive layouts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tratatemium/HappyPaws.git
   cd HappyPaws
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

### Development Server

The Vite development server provides:
- **Hot Module Replacement (HMR)** - Instant updates without page refresh
- **Fast Refresh** - Preserve component state during development
- **Local Server** - Typically runs on `http://localhost:5173`
- **Source Maps** - Easy debugging with original source code

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified and bundled assets
- Optimized images and fonts
- Tree-shaking for smaller bundle size
- Source maps for debugging

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

## 🏗️ Architecture

### Technology Stack

- **Build Tool**: Vite (v7.2.4)
- **Languages**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Deployment**: GitHub Pages
- **Package Manager**: npm
- **Version Control**: Git

### Data Management

- **Pet Database**: JSON file with 50 pet records
- **Local Storage**: Favorites persistence across sessions
- **State Management**: Simple global state object
- **Image Hosting**: PostImg CDN for pet photos

### Page Navigation

The application uses a multi-page architecture with:
- **Entry Point**: Loading page with 3-second animation
- **Main Navigation**: Header burger menu and footer tabs
- **Routing**: Simple page redirects via JavaScript
- **Components**: Modular HTML/CSS/JS components loaded dynamically

## 🎨 Design System

### Mobile-First Approach

- Responsive breakpoints for mobile, tablet, and desktop
- Touch-friendly interface with large tap targets
- Optimized for vertical scrolling and mobile gestures

### Accessibility Features

- **Color Contrast**: WCAG compliant color ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Alternative Text**: All images have descriptive alt text
- **Theme Toggle**: Dark/light mode for user preference

### Key UI Components

- **Pet Cards**: Interactive cards with favorites toggle
- **Carousel**: Urgent adoptions showcase
- **Filters**: Species-based pet filtering
- **Forms**: Adoption checkout with validation
- **Chat Interface**: Mobile-optimized messaging UI

## 📱 Pages Overview

### 🏠 Landing Page
- Hero section with call-to-action
- Urgent adoptions carousel
- Species filter chips (Dogs, Cats, Rabbits, Birds)
- Featured pet highlights

### 🖼️ Gallery Page
- Grid layout of all available pets
- Species filtering functionality
- Favorites toggle on each card
- Infinite scroll for performance
- Urgent adoption badges

### 🐕 Pet Detail Page
- Large hero image with photo gallery
- Comprehensive pet information (age, breed, story)
- Health and vaccination status
- Special needs and personality traits
- Adoption and favorites buttons

### ❤️ Favorites Page
- Personal collection of saved pets
- Quick access to pet details
- Remove from favorites functionality
- Empty state when no favorites

### 💬 Chat Page
- Mobile-first messaging interface
- Contact rescue staff
- Real-time chat simulation
- File attachment support (UI)

### 🛒 Checkout Page
- Pet adoption form
- Terms and conditions
- Adoption fee information
- Form validation and submission

## 🔧 Configuration

### Vite Configuration

The project uses a custom Vite configuration ([vite.config.js](vite.config.js)) with:

- **Base Path**: `/HappyPaws/` for GitHub Pages
- **Multi-Page Setup**: Multiple HTML entry points
- **Asset Optimization**: Automatic image and font optimization
- **Build Output**: Customized for deployment

### Environment Setup

The project uses environment variables for configuration:

1. **Create a `.env` file** in the root directory
2. **Add your environment variables** (prefix with `VITE_` for client-side access):
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
3. **Restart the development server** after adding new variables

**Note**: Environment variables prefixed with `VITE_` are exposed to the client-side code. Keep sensitive data in server-only variables.

## 🤝 Contributing

This project is part of academic coursework. For educational purposes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Project Requirements

This project fulfills the following academic requirements:

- ✅ Mobile-first responsive design
- ✅ Interactive pet browsing experience
- ✅ Favorites functionality with persistence
- ✅ Urgent adoption highlighting
- ✅ Accessibility compliance
- ✅ Modern web development practices
- ✅ Component-based architecture
- ✅ Performance optimization

## 🐾 About HappyPaws

HappyPaws is a conceptual animal rescue organization focused on creating positive adoption experiences. The platform prioritizes:

- **User Experience**: Intuitive navigation and enjoyable interactions
- **Pet Welfare**: Highlighting urgent cases and special needs
- **Accessibility**: Ensuring everyone can use the platform
- **Mobile Experience**: Optimized for on-the-go browsing
- **Community**: Connecting pets with loving families

## 📄 License

This project is created for educational purposes as part of Hyper Island coursework.

---

**Built with ❤️ for pets in need of homes** 🏠🐕🐱🐰🐦