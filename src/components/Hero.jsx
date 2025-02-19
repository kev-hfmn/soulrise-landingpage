import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Crafting Digital Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-zinc-400">
          Transform your vision into reality with our expert web development services
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            View Portfolio
          </Button>
        </div>
      </div>
    </div>
  )
}
