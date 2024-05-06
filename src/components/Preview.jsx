import { useEffect, useState } from 'react'

import { useCopyToClipboard } from 'react-use'

import { toHtml, toVue, toReact } from '@/services/transformers'

export default function Preview({ title, id, index }) {
  const [initial, setInitial] = useState('')
  const [code, setCode] = useState('')
  const [html, setHtml] = useState('')
  const [type, setType] = useState('html')
  const [isPreview, setIsPreview] = useState(true)
  const [state, copyToClipboard] = useCopyToClipboard()

  useEffect(() => {
    async function getComponent() {
      const text = await fetch(`/components/${id}/${index}.html`)
      const html = await text.text()

      setInitial(html)
      setCode(html)
      setHtml(toHtml(html))
    }

    getComponent()
  }, [])

  useEffect(() => {
    if (type === 'html') {
      setCode(initial)
    }

    if (type === 'vue') {
      setCode(toVue(initial))
    }

    if (type === 'react') {
      setCode(toReact(initial))
    }
  }, [type])

  return (
    <div>
      <h2>{title}</h2>

      <button onClick={() => setIsPreview(!isPreview)}>
        {isPreview ? 'Show Code' : 'Show Preview'}
      </button>

      <div>
        <span class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
          <button
            onClick={() => copyToClipboard(code)}
            className="inline-block border-r px-4 py-2 text-sm font-medium focus:relative focus:bg-gray-50 focus:outline-none focus:ring-0"
          >
            Copy to Clipboard
          </button>

          <div>
            <label htmlFor="type" className="sr-only">
              Type
            </label>

            <select
              id="type"
              className="border-none text-sm font-medium focus:relative focus:bg-gray-50 focus:outline-none focus:ring-0"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="html">HTML</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
            </select>
          </div>
        </span>

        {state.error && <p>Unable to copy value: {state.error.message}</p>}
      </div>

      {isPreview ? (
        <iframe srcDoc={html} className="w-full" />
      ) : (
        <pre className="w-full">{code}</pre>
      )}
    </div>
  )
}
