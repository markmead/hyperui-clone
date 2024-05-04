import Banner from '@/components/Banner'
import Grid from '@/components/Grid'

import { components } from '@/data/components'

async function getComponents() {
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

      <Grid components={components} />
    </>
  )
}
