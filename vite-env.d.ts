/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Cloudflare Turnstile site key for the contact form. The secret lives in
  // MJP Hub, whose /api/emails/send checks the token.
  readonly VITE_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
