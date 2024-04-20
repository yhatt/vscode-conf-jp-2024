import { defineConfig } from '@marp-team/marp-cli'

const canonicalUrl = process.env.URL || undefined

export default defineConfig({
  html: true,
  allowLocalFiles: true,
  themeSet: 'dist',
  url: canonicalUrl,
  ogImage: canonicalUrl ? `${canonicalUrl}/og.png` : undefined,
})
