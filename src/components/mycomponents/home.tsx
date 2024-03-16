import {   UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import SideBar from "./sidebar";
import Form from "./form";

const Home=()=>{
    return(
    <>
    <div className="p-0 m-0 ">
        <div className="h-full overflow-y-auto fixed left-0 top-0 bottom-0">
        <SideBar></SideBar>
        </div >
            
           
        </div>
    </>
        );
}
export default Home;