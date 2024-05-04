import Link from 'next/link'

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl">
      <div className="flex h-12 items-center justify-between rounded-xl border border-gray-200 bg-gray-100 px-4">
        <Link href="/" className="font-medium">
          SuperUI 🦸‍♀️
        </Link>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/components?category=application"
                className="text-sm font-medium transition hover:opacity-75"
              >
                Application
              </Link>
            </li>

            <li>
              <Link
                href="/components?category=marketing"
                className="text-sm font-medium transition hover:opacity-75"
              >
                Marketing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
