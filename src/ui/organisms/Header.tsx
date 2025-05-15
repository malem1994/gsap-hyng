import Logo from '@assets/images/logo.svg'
import { Navigation } from './navigation/Navigation'
import { Button } from '../atoms/Button'

export const Header = () => {
  return (
    <header
      className='sticky top-0 bg-white w-full inline-flex items-center justify-between gap-4 p-4 z-10'
    >
      <img src={Logo} alt="Logo" className='h-10' />

      <Navigation />

      <Button label="Reach out" className='text-black font-light rounded-full hover:text-white hover:bg-black py-2 px-4' />
    </header>
  )
}
