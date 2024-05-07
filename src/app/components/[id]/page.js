import { listComponent } from '@/services/components'

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
    components: Object.entries(component.components).map(([_, item]) => {
      return {
        ...item,
        id: params.id,
        container: item.container || component.container,
      }
    }),
  }

  return (
    <section className="py-8">
      <div className="prose max-w-none">
        <Renderer source={component.source} components={components} scope={data} />
      </div>
    </section>
  )
}
