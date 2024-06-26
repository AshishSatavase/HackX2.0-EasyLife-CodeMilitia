
import { Button } from "@/components/ui/button"

export function arjun4() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-4">Life Insurance You'll Love Really.</h1>
          <p className="text-lg text-gray-700 mb-6">Instant. Simple. Smart.</p>
          <div className="mb-4">
            <Button className="bg-blue-600 text-white">More Details</Button>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img
            alt="Happy family"
            className="max-w-md mx-auto"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </div>
    </div>
  )
}
