import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
      <div className="text-xl font-bold text-white">DevStudio</div>
      <div className="flex gap-4">
        <Button variant="ghost" className="text-white">Services</Button>
        <Button variant="ghost" className="text-white">Portfolio</Button>
        <Button variant="ghost" className="text-white">Contact</Button>
      </div>
    </nav>
  )
}
