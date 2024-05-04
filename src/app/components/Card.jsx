import Link from 'next/link'

export default function Card({ title, count, href }) {
  const countSuffix = count === 1 ? 'component' : 'components'

  return (
    <Link href={href}>
      <div className="rounded-lg border border-gray-100 p-4 transition hover:scale-105">
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="mt-2 text-sm">
          {count} {countSuffix}
        </p>
      </div>
    </Link>
  )
}
