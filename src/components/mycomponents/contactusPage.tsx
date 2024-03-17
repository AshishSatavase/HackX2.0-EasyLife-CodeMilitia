import ContactUs from "./contact";
import SideBar from "./sidebar";

export const ContactUsPage=()=>{
    return(
        <>
      
        <div className="">
          <div className="h-full overflow-y-auto fixed left-0 top-0 bottom-0">
            <SideBar />
          </div >
  
          <div className="flex-col  ml-60  items-center justify-center">
          <ContactUs/>
          </div>
            
          </div>
          </>
    );
}