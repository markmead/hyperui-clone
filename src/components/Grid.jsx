import Card from '@/components/Card'

export default function Grid({ components }) {
  return (
    <section className="py-8">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {components.map((component, index) => (
          <li key={index}>
            <Card {...component} />
          </li>
        ))}
      </ul>
    </section>
  )
}
