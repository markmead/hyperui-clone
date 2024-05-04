'use client'

import { MDXRemote } from 'next-mdx-remote'

export default function MdxContent({ source, components = {}, scope = {} }) {
  return <MDXRemote {...source} components={components} scope={scope} />
}
