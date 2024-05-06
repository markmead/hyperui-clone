import { useEffect, useState } from 'react'

import { useCopyToClipboard } from 'react-use'

import { toHtml, toVue, toReact } from '@/services/transformers'

export default function Preview({ title, id, container, index }) {
  const [initial, setInitial] = useState('')
  const [code, setCode] = useState('')
  const [html, setHtml] = useState('')
  const [type, setType] = useState('html')
  const [breakpoint, setBreakpoint] = useState('1024px')
  const [isPreview, setIsPreview] = useState(true)
  const [state, copyToClipboard] = useCopyToClipboard()

  const breakpoints = [
    {
      name: 'Mobile',
      width: '340px',
    },
    {
      name: 'Small',
      width: '640px',
    },
    {
      name: 'Medium',
      width: '768px',
    },
    {
      name: 'Large',
      width: '1024px',
    },
  ]

  useEffect(() => {
    async function getComponent() {
      const text = await fetch(`/components/${id}/${index}.html`)
      const html = await text.text()

      setInitial(html)
      setCode(html)
      setHtml(toHtml(html, container))
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
    <div className="space-y-4">
      <h2 className="text-xl font-medium">{title}</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="inline-block rounded-md border border-gray-200 px-4 py-2 text-sm font-medium"
        >
          {isPreview ? 'Show Code' : 'Show Preview'}
        </button>

        <div>
          <span className="inline-flex overflow-hidden rounded-md border border-gray-200 bg-white">
            <button
              onClick={() => copyToClipboard(code)}
              className="inline-block border-r px-4 py-2 text-sm font-medium"
            >
              Copy to Clipboard
            </button>

            <div>
              <label htmlFor="type" className="sr-only">
                Type
              </label>

              <select
                id="type"
                className="border-none text-sm font-medium"
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

        <div className="flex flex-1 items-center justify-end gap-2">
          {breakpoints.map(({ name, width }) => (
            <div key={name}>
              <button
                onClick={() => setBreakpoint(width)}
                className="inline-block rounded-md border border-gray-200 px-4 py-2 text-sm font-medium"
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-md ring-2 ring-gray-200">
        {isPreview ? (
          <iframe srcDoc={html} className="h-[500px] w-full" style={{ maxWidth: breakpoint }} />
        ) : (
          <pre className="w-full">{code}</pre>
        )}
      </div>
    </div>
  )
}
