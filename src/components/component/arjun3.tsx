
import { Button } from "@/components/ui/button"

export function arjun3() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col space-y-6">
          <span className="text-xs font-medium uppercase tracking-widest text-gray-500">- Free 30 days trial</span>
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            The best place to start your insurance journey
          </h1>
          <p className="text-lg text-gray-600">Here you can put a short description about your project.</p>
          <div className="flex space-x-4">
            <Button className="bg-blue-600 text-white">Try for free</Button>
            <Button className="bg-transparent text-blue-600 border border-blue-600">See how it works</Button>
          </div>
          <p className="text-sm text-gray-500">Trusted by individuals and teams at the world's best companies</p>
        </div>
        <div>
          <img alt="Showcase Illustration" className="w-full h-auto" src="/placeholder.svg" />
        </div>
      </div>
    </div>
  )
}
