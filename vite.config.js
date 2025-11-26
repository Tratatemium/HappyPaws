import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // project root
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        gallery: "src/pages/Gallery/gallery.html",
        landing: "src/pages/Landing/landing.html",
        favorites: "src/pages/Favorites/favorites.html",
        chat: "src/pages/Chat/chat.html",
      },
    },
  },
});