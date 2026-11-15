import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// A single-page app in dist/, served from S3 + CloudFront by MJP Hub: every
// page path is sent to index.html. The contact form sends through MJP Hub's
// /api/emails/send, so there is no API here.
export default defineConfig({
  plugins: [react()],
  // "@/…" imports, from tsconfig.json.
  resolve: { tsconfigPaths: true },
  server: { port: 3000 },
});
