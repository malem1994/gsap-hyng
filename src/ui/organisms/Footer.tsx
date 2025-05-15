import { Button } from '../atoms/Button'

export const Footer = () => {
  return (
    <footer
      className='
      min-h-screen p-8
      flex flex-col
      relative
      '
    >
      <div className="space-y-0">
        <p
          className='w-fit block uppercase font-black tracking-normal leading-none bg-clip-text text-transparent overflow-hidden'
          style={{
            fontSize: `25vw`,
            maxHeight: `25vw`,
            transform: `translateX(-1vw)`,
            backgroundImage: `url(https://cdn.midjourney.com/b6937806-9d9f-468a-8a72-73d93cfc3e6e/0_2.png)`
          }}
        >
          Hey
        </p>
        <p className='text-8xl tracking-normal leading-none'>Let&apos;s start something <br />great together</p>
      </div>

      <div className="w-full flex lg:inline-flex lg:items-end lg:justify-between gap-5 lg:gap-4 mt-24">
        <Button
          label='Go ahead, reach out!'
          className='text-xl py-4 px-8 rounded-full bg-amber-100 w-fit hover:text-white hover:bg-amber-500'
        />
      </div>
    </footer>
  )
}
