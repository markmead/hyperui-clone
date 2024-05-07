export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/components/'],
    },
    sitemap: 'https://www.hyperui-clone.dev/sitemap.xml',
  }
}
