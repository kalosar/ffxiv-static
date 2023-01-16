import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Limit Break",
  description: "Soft Hardcore FFXIV Ultimate Static",

  lastUpdated: true,

  themeConfig: {
    logo: "/logo.png",
    nav: nav(),
  },
});

function nav() {
  return [
    {
      text: "Members",
      link: "/members/index",
      activeMatch: "/members/index",
    },
    {
      text: "Recruiting",
      link: "/members/recruiting",
      activeMatch: "/members/recruiting",
    },
  ];
}
