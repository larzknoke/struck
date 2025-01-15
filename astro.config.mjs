import { defineConfig } from "astro/config";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/jobs": "/jobs/geselle",
    "/leistungen": "/leistungen/dacheindeckung",
  },

  integrations: [playformCompress()],
});