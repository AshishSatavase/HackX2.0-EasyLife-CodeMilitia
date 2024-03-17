import RecommmendationCard1 from "./recomcard";
import SideBar from "./sidebar";


export const Recommendation=()=>{

    return(
        <>
      
        <div className="">
          <div className="h-full overflow-y-auto fixed left-0 top-0 bottom-0">
            <SideBar />
          </div >
  
          <div className="flex-col ml-80 m-10 border rounded-full  items-center justify-center">
          <RecommmendationCard1/>

          </div>
          </div>
          </>
    );
}