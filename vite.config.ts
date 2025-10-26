import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import ViteSitemap from "vite-plugin-sitemap";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL;
  const ogImage = env.VITE_OG_IMAGE ;
  const twitterSite = env.VITE_TWITTER_SITE;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: "Aaron Zitoun - Ostéopathe D.O. à Pantin (93500)",
            description:
              "Aaron Zitoun, ostéopathe D.O. à Pantin. Soulagement des douleurs, suivi grossesse, nourrissons, sportifs. Prise de RDV en ligne. Cabinet au 11 Rue Etienne Marcel.",
            ogImage,
            twitterSite,
          },
        },
        minify: true,
      }),
      ViteSitemap({
        hostname: siteUrl,
        dynamicRoutes: [
          '/',
          '/parcours',
          '/osteopathie',
          '/seance',
          '/tarifs',
          '/faq',
          '/contact',
          '/mentions-legales',
        ],
        exclude: [],
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
        readable: true,
        generateRobotsTxt: false,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
