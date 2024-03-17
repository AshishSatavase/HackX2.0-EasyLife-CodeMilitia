import { UserButton } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import SideBar from "./sidebar"
import ChatGpt from "./chatgpt"
export const EasyAI=()=>{
    
    
    return(
        <>
      
      <div className="">
        <div className="h-full overflow-y-auto fixed left-0 top-0 bottom-0">
          <SideBar />
        </div >

        <div className="flex-col  ml-60  items-center justify-center">

        </div>
           <ChatGpt/>
        </div>
        </>
    )
}