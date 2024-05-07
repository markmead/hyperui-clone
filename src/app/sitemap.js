import { listComponents } from '@/services/components'

export default async function sitemap() {
  const components = await listComponents()

  const slugs = components
    .map((component) => {
      return component.id
    })
    .map((slug) => {
      return {
        url: `https://www.hyperui-clode.dev/components/${slug}`,
        lastModified: new Date(),
      }
    })

  return [
    {
      url: 'https://www.hyperui-clode.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://www.hyperui-clode.dev/components',
      lastModified: new Date(),
    },
    ...slugs,
  ]
}
