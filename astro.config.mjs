// @ts-check
import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://personaplus.vercel.app/",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    compressHTML: true,
});
