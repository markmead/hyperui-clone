import { join } from 'path'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

export async function listComponents() {
  const path = join(process.cwd(), '/src/data/components')
  const slugs = await fs.readdir(path)

  const components = await Promise.all(
    slugs.map(async (slug) => {
      const file = join(path, slug)
      const content = await fs.readFile(file, 'utf8')

      const { frontmatter: data } = await serialize(content, {
        parseFrontmatter: true,
      })

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

export async function listComponent(id) {
  const path = join(process.cwd(), `/src/data/components/${id}.mdx`)
  const content = await fs.readFile(path, 'utf8')

  const source = await serialize(content, {
    parseFrontmatter: true,
  })

  return {
    ...source.frontmatter,
    source,
  }
}
