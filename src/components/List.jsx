'use client'

export default function List({ components }) {
  return (
    <div className="not-prose">
      <ul className="space-y-4">
        {components.map((component) => (
          <li key={component.id}>
            <h2>{component.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
