import { useEffect, useState } from 'react'

import { toHtml } from '@/services/transformers'

export default function Preview({ title, id, index }) {
  const [code, setCode] = useState('')
  const [html, setHtml] = useState('')

  useEffect(() => {
    async function getComponent() {
      const text = await fetch(`/components/${id}/${index}.html`)
      const html = await text.text()

      setCode(html)
      setHtml(toHtml(html))
    }

    getComponent()
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <iframe srcDoc={html} className="w-full" />
    </div>
  )
}
