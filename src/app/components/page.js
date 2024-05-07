import { Suspense } from 'react'

import Banner from '@/components/Banner'
import Grid from '@/components/Grid'

import { ogMeta, twitterMeta } from '@/data/metadata'
import { listComponents } from '@/services/components'

async function getComponents() {
  const components = await listComponents()

  return components
}

export const metadata = {
  title: 'Application and Marketing Components | SuperUI',
  description:
    'View our collection of application and marketing components and templates built with Tailwind CSS.',
  openGraph: {
    ...ogMeta,
    title: 'Application and Marketing Components | SuperUI',
    description:
      'View our collection of application and marketing components and templates built with Tailwind CSS.',
  },
  twitter: {
    ...twitterMeta,
    title: 'Application and Marketing Components | SuperUI',
    description:
      'View our collection of application and marketing components and templates built with Tailwind CSS.',
  },
}

export default async function Page() {
  const components = await getComponents()

  return (
    <>
      <Banner title="Component Search" subtitle="Find Your Next Component">
        Our library includes a wide variety of components, designed to meet the needs of any
        project. Whether you're building a simple blog or a complex web app, you're sure to find the
        perfect component to enhance your site's functionality and aesthetics.
      </Banner>

      <Suspense>
        <Grid components={components} filterable />
      </Suspense>
    </>
  )
}
