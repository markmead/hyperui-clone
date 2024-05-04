import { listComponent, listComponents } from '@/services/components'

import Banner from '@/components/Banner'
import Renderer from '@/components/Renderer'

const components = {}

export async function generateStaticParams() {
  const components = await listComponents()

  return components.map((component) => ({
    params: {
      id: component.id,
    },
  }))
}

async function getComponent(id) {
  const component = await listComponent(id)

  return component
}

export default async function Page({ params }) {
  const component = await getComponent(params.id)

  return (
    <>
      <Banner title={component.seo.title} subtitle={component.seo.description} />

      <div className="prose">
        <Renderer source={component.source} components={components} />
      </div>
    </>
  )
}
