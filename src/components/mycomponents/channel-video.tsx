import { UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import SideBar from "./sidebar";
import VideoCallComp from "./video-call-component";

export const ChannelVideo=()=>{
    return(
        <div className=" ">
            <div className="">
            <div className="h-full overflow-y-auto fixed left-0 top-0 bottom-0">
           <SideBar/>
           </div >
            </div>
            
           <div>
            <div>
            <div className="border-b bg-blue-400 bg-opacity-15 mb-5 ml-40">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" onClick={()=>{window.location.pathname='/channelform'}}>Form Filling</Button>
          
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" onClick={()=>{window.location.pathname='/channelvideo'}}>Video Conferencing</Button>

        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" onClick={()=>{window.location.pathname='/channelappointment'}}>Appointmetnt</Button>

        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/"/>
        </div>
      </div>
    </div>
            </div>
            <div className="flex justify-center items-center">
                {/* //place */}
                <VideoCallComp/>
            </div>
           </div>
        </div>
    );
}