import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/HappyPaws/",
  root: ".",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gallery: resolve(__dirname, "src/pages/Gallery/gallery.html"),
        landing: resolve(__dirname, "src/pages/Landing/landing.html"),
        favorites: resolve(__dirname, "src/pages/Favorites/favorites.html"),
        chat: resolve(__dirname, "src/pages/Chat/chat.html"),
        checkout: resolve(__dirname, "src/pages/Checkout/checkout.html"),
        loadingPage: resolve(
          __dirname,
          "src/pages/loading-page/loading-page.html"
        ),
        petCardDetail: resolve(
          __dirname,
          "src/pages/Pet-Card-Detail/pet-card-detail.html"
        ),
      },
    },
  },
});