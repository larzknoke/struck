import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/jobs": "/jobs/geselle",
    "/leistungen": "/leistungen/dacheindeckung",
  },
});
