import { Suspense } from 'react'

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
      <Banner title="SuperUI" subtitle="A Tailwind CSS UI Kit">
        SuperUI is a collection of components and templates built with Tailwind CSS. It's designed
        to showcase the power of Tailwind CSS and how it can be used to build beautiful, responsive
        user interfaces.
      </Banner>

      <Suspense>
        <Grid components={components} />
      </Suspense>
    </>
  )
}
