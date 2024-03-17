/**
npx v0 add 9H97aFeNf7U
 * v0 by Vercel.
 * @see https://v0.dev/t/9H97aFeNf7U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function RecommmendationCard1() {
  return (
    <div className="max-w-4xl mx-auto my-8  z">
      <div className="space-y-6">
        <Card className="w-full  bg-blue-100">
          <CardHeader>
            <CardTitle>Care Supreme Direct</CardTitle>
            <CardDescription>Cover ₹7 Lakh</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">No Room Rent Limit</Badge>
            <Badge>₹10.5 lakh Renewal Bonus</Badge>
            <Badge>Unlimited Restoration of cover</Badge>
            <Link className="block text-right text-blue-600" href="#">
              View all features ›
            </Link>
            <div className="grid grid-cols-3 gap-4">
              <div>Claims paid within 3 months 100%</div>
              <div>Cashless Hospitals 248</div>
              <div>Starting at ₹797/month</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Check premium</Button>
          </CardFooter>
        </Card>
        <Card className="w-full bg-blue-100">
          <CardHeader>
            <CardTitle>Aspire Gold+ (Direct)</CardTitle>
            <CardDescription>Cover ₹5 Lakh</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">No Room Rent Limit</Badge>
            <Badge>₹5 lakh No Claim Bonus</Badge>
            <Badge>Unlimited Restoration of Cover,Forever</Badge>
            <Link className="block text-right text-blue-600" href="#">
              View all features ›
            </Link>
            <div className="grid grid-cols-3 gap-4">
              <div>Claims paid within 3 months 100%</div>
              <div>Cashless Hospitals 269</div>
              <div>Starting at ₹683/month</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Check premium</Button>
          </CardFooter>
        </Card>
        <Card className="w-full bg-blue-100">
          <CardHeader>
            <CardTitle>Smart Health Pro</CardTitle>
            <CardDescription>Cover ₹5 Lakh</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">Single pvt AC Room</Badge>
            <Badge>₹2.5 lakh No Claim Bonus</Badge>
            <Badge>Restoration of cover once a year</Badge>
            <Link className="block text-right text-blue-600" href="#">
              View all features ›
            </Link>
            <div className="grid grid-cols-3 gap-4">
              <div>Claims paid within 3 months 99.1%</div>
              <div>Cashless Hospitals 286</div>
              <div>Starting at ₹451/month</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Check premium</Button>
          </CardFooter>
        </Card>
        <Card className="w-full bg-blue-100">
          <CardHeader>
            <CardTitle>Activ One</CardTitle>
            <CardDescription>Cover ₹7 Lakh</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">No Room Rent Limit</Badge>
            <Badge>₹7 lakh Renewal Bonus; optional</Badge>
            <Badge>Unlimited Restoration of cover</Badge>
            <Link className="block text-right text-blue-600" href="#">
              View all features ›
            </Link>
            <div className="grid grid-cols-3 gap-4">
              <div>Claims paid within 3 months 99.4%</div>
              <div>Cashless Hospitals 520</div>
              <div>Starting at ₹574/month</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Check premium</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

