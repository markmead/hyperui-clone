import Banner from '@/components/Banner'
import Grid from '@/components/Grid'

import { listComponents } from '@/services/components'

async function getComponents() {
  const components = await listComponents()

  return components
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

      <Grid components={components} filterable />
    </>
  )
}
