import { defineConfig } from "vitepress";

export default defineConfig({
  title: "My Blog", // 网站标题（显示在导航栏和标签页）
  description: "A Tech Blog", // SEO 描述
  base: "/my-blog/", // 部署到子路径时的根路径（必须与仓库名匹配）
  lang: "zh-CN", // 网站语言
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 自定义 favicon
  ],
  themeConfig: {
    nav: [
      // 导航栏
      { text: "Home", link: "/" },
      { text: "Archive", link: "/archive" },
    ],
    sidebar:
      // 自动生成侧边栏（按目录结构）
      [
        {
          text: "文章列表",
          items: [{ text: "第一篇", link: "/posts/first-post" }],
        },
      ],
    socialLinks: [
      // 社交链接
      { icon: "github", link: "https://github.com/yxshan" },
    ],
    footer: {
      // 页脚
      message: "MIT Licensed",
      copyright: "Copyright © 2025",
    },
  },
});
