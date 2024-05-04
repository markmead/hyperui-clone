import Banner from '@/components/Banner'
import Grid from '@/components/Grid'

export default function Home() {
  const components = [
    {
      title: 'Alert',
      count: 5,
      href: '/alert',
    },
    {
      title: 'Avatar',
      count: 5,
      href: '/avatar',
    },
    {
      title: 'Badge',
      count: 5,
      href: '/badge',
    },
    {
      title: 'Button',
      count: 5,
      href: '/button',
    },
    {
      title: 'Card',
      count: 5,
      href: '/card',
    },
    {
      title: 'Checkbox',
      count: 5,
      href: '/checkbox',
    },
    {
      title: 'Dropdown',
      count: 5,
      href: '/dropdown',
    },
    {
      title: 'Input',
      count: 5,
      href: '/input',
    },
    {
      title: 'Modal',
      count: 5,
      href: '/modal',
    },
    {
      title: 'Radio',
      count: 5,
      href: '/radio',
    },
    {
      title: 'Select',
      count: 5,
      href: '/select',
    },
    {
      title: 'Switch',
      count: 5,
      href: '/switch',
    },
    {
      title: 'Tabs',
      count: 5,
      href: '/tabs',
    },
    {
      title: 'Textarea',
      count: 5,
      href: '/textarea',
    },
    {
      title: 'Tooltip',
      count: 5,
      href: '/tooltip',
    },
  ]

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
