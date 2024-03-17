
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertDialogDemo } from "@/components/mycomponents/AlertDialogDemo"

export function AppointmentCard() {
  return (
    <Card className="w-[400px] border-s-zinc-800 border-t-zinc-800">
      <CardHeader>
        <CardTitle>Book Offline Appointment</CardTitle>
        <CardDescription>Get free home services</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <textarea id="name" placeholder="Enter Address" className="h-25 text-center textarea-with-border"  />
            </div>
            <div className="flex items-center justify-between space-y-1.5">
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="TimeSlot" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">10am-12pm</SelectItem>
                  <SelectItem value="sveltekit">12pm-2pm</SelectItem>
                  <SelectItem value="astro">2pm-4pm</SelectItem>
                  <SelectItem value="nuxt">4pm-6pm</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <AlertDialogDemo>Confirm Booking</AlertDialogDemo>
      </CardFooter>
    </Card>
  )
}
