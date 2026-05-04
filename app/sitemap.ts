import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://davidsorrentino.com',
      lastModified: '2026-05-04',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
