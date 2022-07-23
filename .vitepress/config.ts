import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Limit Break",
  description: "Hardcore FFXIV Savage Static",

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
      text: "Recruting",
      link: "/members/recruiting",
      activeMatch: "/members/recruiting",
    },
  ];
}