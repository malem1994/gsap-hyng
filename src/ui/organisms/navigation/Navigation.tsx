import { Item } from "./Item"

const MENU = [
  {
    name: 'Work',
    href: '#work',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Service',
    href: '#service',
  },
  {
    name: 'Result',
    href: '#result',
  },
]

export const Navigation = () => {
  return (
    <nav className="hidden lg:inline-flex items-center justify-center">
      {MENU.map((_, index) => (
        <Item
          key={index}
          {..._}
        />
      ))}
    </nav>
  )
}
