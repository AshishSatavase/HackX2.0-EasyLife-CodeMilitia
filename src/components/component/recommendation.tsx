
import { Button } from "@/components/ui/button"

export function recommendation() {
  return (
    <div className="bg-[#f4f8ff] p-6 rounded-lg shadow-md flex justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <img
            alt="Care Health Insurance"
            className="mr-3"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div>
            <h2 className="text-lg font-semibold">Care Supreme Direct</h2>
            <p className="text-sm font-medium text-[#f2a223]">Cover ₹7 Lakh</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div className="flex items-center">
            <BedIcon className="text-[#6e798c] mr-2" />
            No Room Rent Limit
          </div>
          <div className="flex items-center">
            <IndianRupeeIcon className="text-[#6e798c] mr-2" />
            ₹10.5 lakh Renewal Bonus
          </div>
          <div className="flex items-center">
            <RefreshCwIcon className="text-[#6e798c] mr-2" />
            Unlimited Restoration of cover
          </div>
          <div className="flex items-center">
            <HelpCircleIcon className="text-[#6e798c] mr-2" />
            On ground claims support (in 120+ cities)
          </div>
          <div className="flex items-center">
            <HotelIcon className="text-[#6e798c] mr-2" />
            Cashless Hospitals
          </div>
          <div className="flex items-center">
            <UserIcon className="text-[#6e798c] mr-2" />
            Relationship manager For every customer
          </div>
        </div>
        <div className="flex items-center mt-4">
          <Button className="bg-white text-[#0072ce] border border-[#0072ce] mr-4">View all features ›</Button>
          <div className="flex items-center text-[#6e798c]">
            <CheckCircleIcon className="mr-2" />
            Claims paid within 3 months
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-baseline mb-2">
          <span className="text-2xl font-semibold text-[#0072ce]">₹797</span>
          <span className="text-sm text-[#6e798c]">/month</span>
        </div>
        <Button className="bg-[#0072ce] text-white">Check premium</Button>
      </div>
    </div>
  )
}


function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function IndianRupeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  )
}


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
