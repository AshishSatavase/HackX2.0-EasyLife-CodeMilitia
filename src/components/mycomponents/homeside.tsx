
import { Button } from "@/components/ui/button"

export default function HomeSide() {
  return (
    <div className="bg-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col space-y-6">
          
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            The best place to start your insurance journey
          </h1>
          <p className="text-lg text-gray-600">Here you can put a short description about your project.</p>
          <div className="flex items-center justify-center space-x-4">
            <Button className=" text-white w-20" onClick={() => { window.location.pathname = '/sign-up'; }}>SignUp</Button>
            <Button variant='outline' className="w-20 bg-transparent text-blue-600 border border-blue-600" onClick={() => { window.location.pathname = '/sign-in'; }}>SignIn</Button>
          </div>
          <p className="text-sm text-gray-500">Trusted by individuals and teams at the world's best companies</p>
        </div>
        <div className="">
          <img alt="Showcase Illustration" className=" p-10 m-10" src="https://static.vecteezy.com/system/resources/previews/011/382/145/original/happy-family-gets-life-protection-insurance-3d-character-illustration-png.png" />
        </div>
      </div>
    </div>
  )
}