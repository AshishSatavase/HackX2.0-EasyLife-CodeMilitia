/**
 * v0 by Vercel.
 * @see https://v0.dev/t/znNKwmixxlo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-blue-100 p-5">
          <div className="flex items-center space-x-2">
            <FlagIcon className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-blue-600">CodingNepal</span>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-md">
              <div className="flex items-center space-x-2">
                <HomeIcon className="h-5 w-5" />
                <span>Home</span>
              </div>
              <ChevronRightIcon className="h-4 w-4" />
            </div>
            <div className="mt-2">
              <div className="flex items-center justify-between px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                <div className="flex items-center space-x-2">
                  <LayoutGridIcon className="h-5 w-5" />
                  <span>Overview</span>
                </div>
                <ChevronRightIcon className="h-4 w-4" />
              </div>
              <p className="mt-4 font-bold text-gray-700">Editor</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <WandIcon className="h-5 w-5" />
                  <span className="ml-2">Magic build</span>
                </div>
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <SettingsIcon className="h-5 w-5" />
                  <span className="ml-2">Filters</span>
                </div>
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <FilterIcon className="h-5 w-5" />
                  <span className="ml-2">Filter</span>
                </div>
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <UploadIcon className="h-5 w-5" />
                  <span className="ml-2">Upload new</span>
                </div>
              </div>
              <p className="mt-4 font-bold text-gray-700">Setting</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <CogIcon className="h-5 w-5" />
                  <span className="ml-2">Features</span>
                </div>
                <div className="flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-blue-200">
                  <SettingsIcon className="h-5 w-5" />
                  <span className="ml-2">Setting</span>
                </div>
              </div>
              <div className="flex items-center px-4 py-2 mt-4 text-gray-700 hover:bg-blue-200">
                <MinusIcon className="h-5 w-5" />
                <span className="ml-2">Collapse</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    )
  }
  
  function ChevronRightIcon(props:any) {
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
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  
  function CogIcon(props:any) {
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
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v2" />
        <path d="M12 22v-2" />
        <path d="m17 20.66-1-1.73" />
        <path d="M11 10.27 7 3.34" />
        <path d="m20.66 17-1.73-1" />
        <path d="m3.34 7 1.73 1" />
        <path d="M14 12h8" />
        <path d="M2 12h2" />
        <path d="m20.66 7-1.73 1" />
        <path d="m3.34 17 1.73-1" />
        <path d="m17 3.34-1 1.73" />
        <path d="m11 13.73-4 6.93" />
      </svg>
    )
  }
  
  
  function FilterIcon(props:any) {
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
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }
  
  
  function FlagIcon(props:any) {
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
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    )
  }
  
  
  function HomeIcon(props:any) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LayoutGridIcon(props:any) {
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
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    )
  }
  
  
  function MinusIcon(props:any) {
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
        <path d="M5 12h14" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props:any) {
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function UploadIcon(props:any) {
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
  }
  
  
  function WandIcon(props:any) {
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
        <path d="M15 4V2" />
        <path d="M15 16v-2" />
        <path d="M8 9h2" />
        <path d="M20 9h2" />
        <path d="M17.8 11.8 19 13" />
        <path d="M15 9h0" />
        <path d="M17.8 6.2 19 5" />
        <path d="m3 21 9-9" />
        <path d="M12.2 6.2 11 5" />
      </svg>
    )
  }
  