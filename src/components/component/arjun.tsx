
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function arjun() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Contact us</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd
            like to contact below.
          </p>
          <div className="mt-8 md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-8 md:mt-0">
              <form action="#" method="POST">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label className="sr-only" htmlFor="first-name">
                      First name
                    </label>
                    <Input id="first-name" placeholder="First name*" type="text" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="last-name">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Last name" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" placeholder="Email*" type="email" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <Textarea id="message" placeholder="What can we help you with?" />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
