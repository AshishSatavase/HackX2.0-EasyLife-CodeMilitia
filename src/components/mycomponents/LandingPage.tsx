import HomeSide from "./homeside";
import { TabsDemo } from "./landingPageComp2";

export const LandingPage=()=>{
    return(
      <div className=" flex-col" >
        <div className=" pt-0" style={{margin:'-150px'}}><HomeSide/></div>
           <div className="pt-0 mb-0" style={{margin:'-240px'}}> <TabsDemo/></div>
      </div>  
    );
}