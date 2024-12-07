// @ts-check
import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://personaplus.vercel.app/",

    adapter: vercelStatic({
        webAnalytics: {
            enabled: true,
        },
    }),

    compressHTML: true,
    integrations: [mdx()],
});
