import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  description: "A personal blog built with VitePress",
  base: "/my-blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/" },
    ],

    sidebar: [
      {
        text: "Posts",
        items: [{ text: "First Post", link: "/posts/first-post" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
