import { listComponent, listComponents } from '@/services/components'

import Banner from '@/components/Banner'
import Renderer from '@/components/Renderer'
import List from '@/components/List'

const components = {
  List,
}

async function getComponent(id) {
  const component = await listComponent(id)

  return component
}

export default async function Page({ params }) {
  const component = await getComponent(params.id)

  const data = {
    ...component,
    components: Object.entries(component.components).map(([_, component]) => {
      return {
        ...component,
        id: params.id,
      }
    }),
  }

  return (
    <>
      <Banner title={component.seo.title} subtitle={component.seo.description} />

      <section className="py-8">
        <div className="prose max-w-none">
          <Renderer source={component.source} components={components} scope={data} />
        </div>
      </section>
    </>
  )
}
