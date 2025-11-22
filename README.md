# HappyPaws

A simple project for Agile & UX coursework at Hyper Island.

HappyPaws is an animal rescue organization seeking a mobile-first landing page to showcase pets available for adoption. The design encourages exploration, highlights urgent cases, and allows users to favorite pets. The goal is a playful, intuitive, and responsive experience that makes it easy for pet lovers to browse, favorite, and adopt animals—especially those in urgent need.

## Project File Structure

```
DESIGN.md
index.html
package.json
README.md
assets/
src/
  components/
    Footer/
      footer.css
      footer.html
    Pet-card/
      pet-card.css
      pet-card.html
  pages/
    Chat/
      chat.css
      chat.html
      index.md
    Checkout/
      checkout.css
      checkout.html
      index.md
    Dashboard/
      dashboard.css
      dashboard.html
      index.md
    Favorites/
      favorites.css
      favorites.html
      index.md
    Landing/
      index.md
      landing.css
      landing.html
    Pet-Card-Detail/
      index.md
      pet-card-detail.css
      pet-card-detail.html
  styles/
    layout.css
    reset.css
    variables.css
```

## Vite Setup Instructions

This project uses Vite as the build tool and development server for fast development and optimized builds.

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/Tratatemium/HappyPaws.git
   cd HappyPaws
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will:
- Start a local development server (typically at `http://localhost:5173`)
- Enable hot module replacement (HMR) for instant updates
- Provide fast refresh when you make changes to your files

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
- Bundle and minify all assets
- Generate optimized files in the `dist/` directory
- Prepare the project for deployment

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This serves the built files from the `dist/` directory to test the production version locally.

### Project Structure

- **`index.html`** - Main HTML entry point
- **`src/`** - Source code directory
  - **`components/`** - Reusable UI components
  - **`pages/`** - Individual page components and styles
  - **`styles/`** - Global styles, variables, and layout
- **`assets/`** - Static assets (images, fonts, etc.)
- **`package.json`** - Project configuration and dependencies

### Development Tips

1. **Hot Reload**: Changes to HTML, CSS, and JS files will automatically refresh the browser
2. **CSS Modules**: You can use CSS modules by naming files with `.module.css`
3. **Asset Handling**: Place images and other assets in the `assets/` folder or import them directly in your code
4. **Environment Variables**: Create a `.env` file for environment-specific variables (prefix with `VITE_`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally