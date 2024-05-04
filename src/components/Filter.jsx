export default function Filter({ search, category, handleSetSearch, handleSetCategory }) {
  const categories = [
    { label: 'All', value: '' },
    { label: 'Application', value: 'application' },
    { label: 'Marketing', value: 'marketing' },
  ]

  return (
    <form action="#">
      <div className="flex justify-center gap-4">
        {categories.map(({ label, value }, index) => (
          <label key={index} htmlFor={label} className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="category"
              id={label}
              value={value}
              checked={value === category}
              onChange={() => handleSetCategory(value)}
              className="h-5 w-5 border-gray-200"
            />

            <span className="text-sm font-medium">{label}</span>
          </label>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="search" className="sr-only">
          Search components
        </label>

        <input
          type="search"
          id="search"
          placeholder="Search components..."
          className="w-full rounded-lg border-gray-200"
          value={search}
          onChange={(event) => handleSetSearch(event.target.value)}
        />
      </div>
    </form>
  )
}
