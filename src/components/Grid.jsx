'use client'

import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Card from '@/components/Card'
import Filter from '@/components/Filter'

export default function Grid({ components, filterable = false }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [filteredComponents, setFilteredComponents] = useState(components)

  const searchParams = useSearchParams()

  useEffect(() => {
    setCategory(searchParams.get('category') || '')
  }, [searchParams])

  useEffect(() => {
    const filtered = components.filter((component) => {
      const matchesCategory = category ? component.category === category : true
      const matchesSearch = component.title.toLowerCase().includes(search.toLowerCase())

      return matchesCategory && matchesSearch
    })

    setFilteredComponents(filtered)
  }, [components, category, search])

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl space-y-4">
        {filterable && (
          <Filter
            search={search}
            category={category}
            handleSetSearch={setSearch}
            handleSetCategory={setCategory}
          />
        )}

        {filteredComponents.length ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredComponents.map((component, index) => (
              <li key={index}>
                <Card {...component} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="prose mx-auto text-center prose-p:mt-2 prose-lead:mb-0">
            <p className="lead">No components found.</p>
            <p>Try a different search query or category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
