import matter from 'gray-matter'

import { join } from 'path'
import { promises as fs } from 'fs'

export async function listComponents() {
  const path = join(process.cwd(), '/src/data/components')
  const slugs = await fs.readdir(path)

  const components = await Promise.all(
    slugs.map(async (slug) => {
      const file = join(path, slug)
      const content = await fs.readFile(file, 'utf8')

      const { data } = matter(content)

      const id = slug.replace('.mdx', '')
      const count = Object.keys(data.components).length

      return {
        ...data,
        count,
        id,
      }
    })
  )

  return components
}
