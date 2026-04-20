import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://davidsorrentino.com',
    sitemap: 'https://davidsorrentino.com/sitemap.xml',
  }
}
