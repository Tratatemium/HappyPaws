import { defineConfig } from "vite";

export default defineConfig({
  base: '/HappyPaws/',
  root: ".", // project root
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        gallery: "src/pages/Gallery/gallery.html",
        landing: "src/pages/Landing/landing.html",
        favorites: "src/pages/Favorites/favorites.html",
        chat: "src/pages/Chat/chat.html",
        checkout: "src/pages/Checkout/checkout.html",
        loadingPage: "src/pages/loading-page/loading-page.html",
        petCardDetail: "src/pages/Pet-Card-Detail/pet-card-detail.html",
      },
    },
  },
});