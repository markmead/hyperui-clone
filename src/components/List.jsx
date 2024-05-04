'use client'

import Preview from '@/components/Preview'

export default function List({ components }) {
  return (
    <div className="not-prose">
      <ul className="space-y-4">
        {components.map((component, index) => (
          <li key={index}>
            <Preview {...component} index={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  )
}
